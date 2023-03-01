import { useWeb3React } from "@web3-react/core"
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Button, Card } from "../components";
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline';

interface SwitchToNetworkProps {
	children: ReactNode
}

const SwitchToNetwork: React.FC<SwitchToNetworkProps> = ({children}) => {
	const {chainId, provider} = useWeb3React();
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (chainId !== 5) {
			setShow(true);
		}
	}, [chainId, provider, setShow])

	const changeNetwork = useCallback(() => {
		provider?.send('wallet_switchEthereumChain', [{chainId: '0x5'}])
	}, [provider])

	if (chainId === 5) return (<>{children}</>)

	return (
		<Card overrideColor className="from-red-800 to-orange-700">
			<div className="flex justify-center">
				<ExclamationTriangleIcon height={80} width={80} className="text-amber-600" />
			</div>
			<p>We're sorry, but this network {provider?.network?.name ? `(${provider.network.name})` : ''} isn't supported.</p>
			<p className="text-center">Please switch to Goerli.</p>
			<div className="flex justify-center mt-4">
				<Button onClick={changeNetwork}>Switch</Button>
			</div>
		</Card>
	)
}

export default SwitchToNetwork