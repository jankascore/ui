import { ArrowRightIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Button, Card } from "../components";
import Loader from "../components/loading";
import {computeScore, ScoreSet} from '../scoring-alg/getScoringAlgorithm';
import HiddenButton from "./HiddenButton";
import { useAccount } from 'wagmi'
import Confetti from "react-confetti";
import {useJanka} from '../contract/useJanka';

type State = 'score' | 'attest' | 'wait' | 'reclaim' | 'final'

const Wizard: React.FC = () => {
	const {address} = useAccount()
	const [flowState, setFlowState] = useState<State>('score')
	const [score, setScore] = useState<ScoreSet>();
	const [loading, setLoading] = useState(false);
	const [fakeAddress, setFakeAddress] = useState<string>();
	const [restart, setRestart] = useState(false);
	const janka = useJanka(score)

	useEffect(() => {
		getFlowState();
		if (!restart) {
			const {score, algorithmCID, finalizationTime} = janka.attestation!
			setScore({score, bounds: [score, score], cid: algorithmCID, timestamp: Number(finalizationTime.toString())})
		}
	}, [janka.attestation, address, restart])

	useEffect(() => {
		getFlowState();
	}, [score])

	const calculate = async () => {
		setLoading(true);
		const timestamp = Math.floor(new Date().getTime()/1000);
		const addr = fakeAddress || address;
		if (!addr) throw new Error("No address Found!")
		const scoreSet = await computeScore(addr, timestamp).finally(() => setLoading(false))
		setScore(scoreSet);
		getFlowState();
	}

	const getFakeAddress = (address: string) => {
		setFakeAddress(address)
	}

	const attest = async () => {
		setLoading(true);
		const tx = await janka.attest!().catch(() => setLoading(false))
		if (!tx) return;
		const resp = await tx.wait();
		janka.refetchAttestation();
		setLoading(false);
		setRestart(false);
		getFlowState();
	}

	const startOver = () => {
		setScore(undefined)
		setRestart(true);
	}

	const getFlowState = async () => {
		const att = janka.attestation
		if (!att) return setFlowState('score')
		try {
			const time = new Date(Number(att.finalizationTime.toString())*1000);

			// No attestation yet
			if (restart || time.getTime() === new Date(0).getTime()) {
				if (score?.score) return setFlowState('attest')
				else return setFlowState('score')
			}

			// attestation has been made
			if (time.getTime() >= new Date(0).getTime()) {
				if (att.isStakeClaimed) return setFlowState('final')
				else if (new Date().getTime() > time.getTime()) return setFlowState('reclaim')
				else return setFlowState('wait')
			}

		} catch (e) {
			setFlowState('score');
		}
	}

	const reclaim = async () => {
		try {
			setLoading(true);
			const tx = await janka.reclaim!().catch(() => setLoading(false))
			if (!tx) return
			const resp = await tx.wait()
			janka.refetchAttestation();
			getFlowState()
			setLoading(false);
		} catch (e) {
			setLoading(false);
		}
	}

	const getTimeRemaining = () => {
		if (!janka.attestation) return;
		if (flowState === 'score' || flowState === 'attest') return '2h'
		const now = new Date()
		const finalization = new Date(Number(janka.attestation.finalizationTime.toString())*1000)
		if (flowState === 'reclaim' || flowState === 'final') return ''
		const diff = new Date(finalization.getTime() - now.getTime());

		return `${diff.getUTCHours()}h ${diff.getUTCMinutes()}m`
	}

	return <>
		{flowState === 'final' && <div className="z-10"><Confetti width={window.innerWidth} height={window.innerHeight} /></div>}
		<HiddenButton setFakeAddress={getFakeAddress} />
		<Card className="w-full max-w-lg relative z-20">
			<div className="h-80 bg-slate-800 rounded-lg flex justify-center items-center gap-8 shadow-xl">
				<div className="text-xl md:text-3xl w-1/2 text-right">
					Your Janka Score:
				</div>

				<div className="w-1/2 flex items-end">
					<div className="text-8xl font-light mr-4">{score?.score || <EllipsisHorizontalIcon height={80} width={80} />}</div>
					<div className="text-2xl">/ 100</div>
				</div>
			</div>
			<div className="h-24 flex items-center justify-center gap-2">
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
			{flowState === 'final' && <div className="absolute right-4 bottom-28 mx-auto flex justify-center"><Button onClick={startOver}>Restart</Button></div>}
		</Card>
	</>
}

export default Wizard