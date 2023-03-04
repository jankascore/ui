import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import {Button, Card, NumberCircle} from '../components'

interface LandingProps {
	hasBegun: () => void
}

const Landing: React.FC<LandingProps> = ({hasBegun}) => {
	const {isConnected} = useAccount();

	return (
		<Card className="md:h-72 w-3/4 relative" shadow>
			<div className="h-full w-full flex flex-col justify-between items-center">
				<h3 className="text-center text-lg">Decentralized Self-Attested Credit Score</h3>

				<div className="flex justify-between items-center basis-2/5 w-3/4 flex-col md:flex-row md:items-start">
					<div className="basis-1/4 relative flex items-center justify-end flex-col font-bold text-lg">
						<div className="top-10"><NumberCircle number={1} size={3}/></div>
						<p className="text-center">Calculate Score</p>
					</div>
				
					<div className="basis-1/4 relative flex items-center justify-end flex-col font-bold text-lg">
						<div className="top-10"><NumberCircle number={2} size={3}/></div>
						<p className="text-center">Self-Attest</p>
					</div>
				
					<div className="basis-1/4 relative flex items-center justify-end flex-col font-bold text-lg">
						<div className="top-10"><NumberCircle number={3} size={3}/></div>
						<p className="text-center">Reclaim Deposit</p>
					</div>
				</div>

				{ !isConnected ? <Web3Button /> : <Button onClick={() => hasBegun()}>Begin</Button> }
			</div>
		</Card>
	)
}

export default Landing
