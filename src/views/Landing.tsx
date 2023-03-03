import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import {Button, Card, NumberCircle} from '../components'

interface LandingProps {
	hasBegun: () => void
}

const Landing: React.FC<LandingProps> = ({hasBegun}) => {
	const {isConnected} = useAccount();

	return (
		<Card className="h-96 w-3/4 relative" shadow>
			<div className="h-full w-full flex flex-col justify-between items-center">
				<h3 className="text-center text-lg">Decentralized Self-Attested Credit Score</h3>

				<div className="flex justify-around basis-2/5 w-3/4">
					<div className="basis-1/4 relative flex items-center justify-end flex-col font-bold text-lg">
						<div className="absolute top-10"><NumberCircle number={1} size={4}/></div>
						<p>Calculate your score</p>
					</div>
				
					<div className="basis-1/4 relative flex items-center justify-end flex-col font-bold text-lg">
						<div className="absolute top-10"><NumberCircle number={2} size={4}/></div>
						<p>Self-Attest On-Chain</p>
					</div>
				
					<div className="basis-1/4 relative flex items-center justify-end flex-col font-bold text-lg">
						<div className="absolute top-10"><NumberCircle number={3} size={4}/></div>
						<p>Reclaim your Deposit</p>
					</div>
				</div>

				{ !isConnected ? <Web3Button /> : <Button onClick={() => hasBegun()}>Begin</Button> }
			</div>
		</Card>
	)
}

export default Landing