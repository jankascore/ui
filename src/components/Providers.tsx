'use client'
import {EthereumClient, modalConnectors, walletConnectProvider} from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {goerli, baseGoerli} from 'wagmi/chains'

const projectId = '96a1648eb51bc6073344bddaf724f5a4';

const chains = [goerli, baseGoerli]
const {provider} = configureChains(chains, [
  walletConnectProvider({ projectId })
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId,
    chains,
    version: '1',
    appName: "Janka Score",
  }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

interface ProvidersProps {
	children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return <>
      <WagmiConfig client={wagmiClient}>
				{children}
      </WagmiConfig>
  </>
}

export default Providers