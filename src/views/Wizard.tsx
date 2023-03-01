import { ArrowRightIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Button, Card } from "../components";
import Loader from "../components/loading";
import SwitchToNetwork from "./SwitchNetwork";
import {computeScore, ScoreSet} from '../scoring-alg/getScoringAlgorithm';
import HiddenButton from "./HiddenButton";
import {ethers} from 'ethers'
import { useWeb3React } from "@web3-react/core";
import { JankaProtocol } from "../../../contracts/typechain-types";
import { getJanka } from "../scoring-alg/contract";

const Wizard: React.FC = () => {
	const web3 = useWeb3React()
	const [score, setScore] = useState<ScoreSet>();
	const [loading, setLoading] = useState(false);
	const [isAttested, setIsAttested] = useState(false);
	const [fakeAddress, setFakeAddress] = useState<string>();
	const [janka, setJanka] = useState<JankaProtocol>();

	useEffect(() => {
		setJanka(getJanka(web3.provider!.getSigner(0)))
	}, [web3.provider])

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
		setLoading(true);
		const resp = await janka!.attest(score!.score, score!.cid, score!.timestamp, {
			gasLimit: 175000, 
			//@ts-ignore
			value: ethers.utils!.parseEther('0.01')
		})
		resp.wait()
			.then(() => setIsAttested(true))
			.finally(() => setLoading(false))
	}

	const canAttest = () => {
		if (!score) return false
		if (isAttested) return false
		return true;
	}

	const isReclaimable = () => {
		if (!isAttested) return false
		return true
	}

	return (
		<SwitchToNetwork>
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
					<Button disabled={!!score} onClick={calculate}>Calculate</Button>

					<ArrowRightIcon height={20} width={20} />

					<Button disabled={!canAttest()} onClick={attest}>Attest</Button>
					
					<div className="relative">
						<div className="absolute bottom-4">2hr</div>
						<ArrowRightIcon height={20} width={20} />
					</div>

					<Button disabled={!isReclaimable()} onClick={() => {}}>Reclaim</Button>
				</div>
				{loading && <span className="absolute w-24 text-center left-0 right-0 mx-auto bottom-1/3"><Loader /></span>}
			</Card>
		</SwitchToNetwork>
	)
}

export default Wizard