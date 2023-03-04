import {useState} from 'react'
import Landing from './views/Landing'
import Wizard from './views/Wizard';
import {EthereumClient, modalConnectors, walletConnectProvider} from '@web3modal/ethereum'
import { Web3Button, Web3Modal, Web3NetworkSwitch} from '@web3modal/react';
import { configureChains, createClient, WagmiConfig, useNetwork, useAccount } from 'wagmi';
import {goerli, baseGoerli} from 'wagmi/chains'
import SwitchNetwork from './views/SwitchNetwork';

const chains = [goerli, baseGoerli]
const {provider} = configureChains(chains, [
  walletConnectProvider({ projectId: import.meta.env.VITE_PROJECT_ID})
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: import.meta.env.VITE_PROJECT_ID,
    version: '1',
    appName: "Janka Score",
    chains
  }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

const supportedChains = [5, 84531]

const Providers = () => {
  return <>
      <WagmiConfig client={wagmiClient}>
        <App />
      </WagmiConfig>

      <Web3Modal projectId={import.meta.env.VITE_PROJECT_ID} ethereumClient={ethereumClient} />
  </>
}

function App() {
  const {chain} = useNetwork();
  const {isConnected} = useAccount();
  const [isBegun, setIsBegun] = useState(false);

  console.log(`begun: ${isBegun} connected ${isConnected}`)

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center">
      <div className="scroll-auto w-full flex items-center justify-center">
        <div className="text-6xl absolute top-10 select-none cursor-default z-20" style={{fontFamily: 'Fortune'}}>Janka Score</div>

        { chain && !supportedChains.includes(chain.id) ? <SwitchNetwork /> : 
          !isBegun || !isConnected ? <Landing hasBegun={() => setIsBegun(true)} /> : <Wizard />
        }

        <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
          <Web3NetworkSwitch />
          <Web3Button balance="show" />
        </div>
      </div>
    </div>
  )
}

export default Providers
