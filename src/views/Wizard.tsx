import { ArrowRightIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Button, Card } from "../components";
import Loader from "../components/loading";
import SwitchToNetwork from "./SwitchNetwork";
import {computeScore, ScoreSet} from '../scoring-alg/getScoringAlgorithm';
import HiddenButton from "./HiddenButton";
import {BigNumberish, ethers} from 'ethers'
import { useWeb3React } from "@web3-react/core";
import { JankaProtocol } from "../../../contracts/typechain-types";
import { getJanka } from "../scoring-alg/contract";
import Confetti from "react-confetti";

type State = 'score' | 'attest' | 'wait' | 'reclaim' | 'final'
interface Attestation {
	score: number;
	isStakeClaimed: boolean
	algorithmCID: string;
	finalizationTime: BigNumberish
}

const Wizard: React.FC = () => {
	const web3 = useWeb3React()
	const [flowState, setFlowState] = useState<State>('score')
	const [score, setScore] = useState<ScoreSet>();
	const [loading, setLoading] = useState(false);
	const [fakeAddress, setFakeAddress] = useState<string>();
	const [janka, setJanka] = useState<JankaProtocol>();
	const [att, setAtt] = useState<Attestation>();

	useEffect(() => {
		setJanka(getJanka(web3.provider!.getSigner(0)))
	}, [web3.provider])

	useEffect(() => {
		if (!janka) return
		getFlowState();
	}, [janka, score, web3.account])

	const calculate = async () => {
		setLoading(true);
		const timestamp = Math.floor(new Date().getTime()/1000);
		const addr = fakeAddress || web3.account;
		if (!addr) throw new Error("No address Found!")
		const scoreSet = await computeScore(addr, timestamp).finally(() => setLoading(false))
		setScore(scoreSet);
	}

	const getFakeAddress = (address: string) => {
		setFakeAddress(address)
	}

	const attest = async () => {
		//@ts-ignore
		const parseEther = ethers.parseEther || ethers.utils.parseEther
		setLoading(true);
		const resp = await janka!.attest(score!.score, score!.cid, score!.timestamp, {
			gasLimit: 175000, 
			value: parseEther('0.01')
		}).finally(() => setLoading(false));
		resp.wait()
			.finally(() => {
				setLoading(false);
				getFlowState();
			})
	}

	const getFlowState = async () => {
		if (!janka) return;
		try {
			const attestation = await janka!.attestations(web3.account!);
			setAtt(attestation as unknown as Attestation)
			const time = new Date(Number(attestation.finalizationTime.toString())*1000);

			// No attestation yet
			if (time.getTime() === new Date(0).getTime()) {
				if (score) return setFlowState('attest')
				else return setFlowState('score')
			}

			// attestation has been made
			if (time.getTime() >= new Date(0).getTime()) {
				if (attestation.isStakeClaimed) return setFlowState('final')
				else if (new Date().getTime() > time.getTime()) return setFlowState('reclaim')
				else return setFlowState('wait')
			}

		} catch (e) {
			setFlowState('score');
		}
	}

	const reclaim = async () => {
		setLoading(true);
		const tx = await janka!.withdrawStake().catch(() => setLoading(false))
		if (!tx) return
		const resp = await tx.wait()
			.finally(() => {
				getFlowState()
				setLoading(false);
			})
	}

	const getTimeRemaining = () => {
		if (!att) return;
		if (flowState === 'score' || flowState === 'attest') return '2h'
		const now = new Date()
		const finalization = new Date(Number(att.finalizationTime.toString())*1000)
		if (flowState === 'reclaim' || flowState === 'final') return ''
		const diff = new Date(finalization.getTime() - now.getTime());

		return `${diff.getUTCHours()}h ${diff.getUTCMinutes()}m`
	}

	return (
		<SwitchToNetwork>
			{flowState === 'final' && <Confetti width={window.innerWidth} height={window.innerHeight} />}
			<HiddenButton setFakeAddress={getFakeAddress} />
			<Card className="w-2/4 relative">
				<div className="h-80 bg-slate-800 rounded-lg flex justify-center items-center gap-8 shadow-xl">
					<div className="text-3xl w-1/2 text-right">
						Your Janka Score:
					</div>

					<div className="w-1/2 flex items-end">
						<div className="text-8xl font-light mr-4">{score?.score || <EllipsisHorizontalIcon height={80} width={80} />}</div>
						<div className="text-2xl">/ 100</div>
					</div>
				</div>
				<div className="h-24 flex items-center justify-center gap-16">
					<Button disabled={flowState!=='score'} onClick={calculate}>Calculate</Button>

					<ArrowRightIcon height={20} width={20} />

					<Button disabled={flowState!=='attest'} onClick={attest}>Attest</Button>
					
					<ArrowRightIcon height={20} width={20} />

					<div className="relative">
						<div className="absolute bottom-9 w-full justify-center text-center">{getTimeRemaining()}</div>
						<Button disabled={flowState!=='reclaim'} onClick={reclaim}>Reclaim</Button>
					</div>
				</div>
				{loading && <span className="absolute w-24 text-center left-0 right-0 mx-auto bottom-1/3"><Loader /></span>}
			</Card>
		</SwitchToNetwork>
	)
}

export default Wizard