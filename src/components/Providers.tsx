'use client'
import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {goerli, baseGoerli} from 'wagmi/chains'

export const projectId = '96a1648eb51bc6073344bddaf724f5a4';

const chains = [goerli, baseGoerli]
const {provider} = configureChains(chains, [
  w3mProvider({ projectId })
])

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({
    projectId,
    chains,
    version: 1,
  }),
  provider
})

export const ethereumClient = new EthereumClient(wagmiClient, chains)

interface ProvidersProps {
	children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return <>
    <div>
      <WagmiConfig client={wagmiClient}>

        {children}
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeVariables={{
        // @ts-ignore
        "--w3m-color-overlay": "#0c6c71d4"
      }}/>
    </div>
  </>
}

export default Providers