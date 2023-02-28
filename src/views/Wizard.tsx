import { ArrowRightIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button, Card } from "../components";
import Loader from "../components/loading";
import SwitchToNetwork from "./SwitchNetwork";

const Wizard: React.FC = () => {
	const [score, setScore] = useState<number>();
	const [loading, setLoading] = useState(false);
	const [isAttested, setIsAttested] = useState(false);

	const calculate = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setScore(63)
		}, 2000);
	}

	const attest = () => {
		setLoading(true);
		alert('Dummy send transaction');
		setTimeout(() => {
			setLoading(false);
			setIsAttested(true);
		}, 2000)
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
			<Card className="w-2/4 relative">
				<div className="h-80 bg-slate-800 rounded-lg flex justify-center items-center gap-8 shadow-xl">
					<div className="text-3xl w-1/2 text-right">
						Your Janka Score:
					</div>

					<div className="w-1/2 flex items-end">
						<div className="text-8xl font-light mr-4">{score || <EllipsisHorizontalIcon height={80} width={80} />}</div>
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