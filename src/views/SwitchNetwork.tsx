import { ReactNode } from "react";
import { Button, Card } from "../components";
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline';
import { useNetwork, useSwitchNetwork } from "wagmi";

const SwitchToNetwork: React.FC = () => {
	const {chain} = useNetwork();
	const {switchNetwork} = useSwitchNetwork()

	const changeNetwork = (id: number) => {
		switchNetwork?.(id)
	}

	return (
		<Card overrideColor className="from-red-800 to-orange-700">
			<div className="flex justify-center">
				<ExclamationTriangleIcon height={80} width={80} className="text-amber-600" />
			</div>
			<p>We're sorry, but this network {chain ? `(${chain.name})` : ''} isn't supported.</p>
			<p className="text-center">Please switch to Goerli.</p>
			<div className="flex justify-center gap-2 mt-4">
				<Button onClick={() => changeNetwork(5)}>Goerli</Button>
				<Button onClick={() => changeNetwork(84531)}>Base Goerli</Button>
			</div>
		</Card>
	)
}

export default SwitchToNetwork