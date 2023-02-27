import Web3Provider, {Connectors} from 'web3-react'
import Landing from './views/Landing'
import { ethers } from 'ethers';

console.log(ethers.version)

const {InjectedConnector} = Connectors;
const MetaMask = new InjectedConnector({supportedNetworks: [5]})

function App() {
  return (
    <Web3Provider connectors={MetaMask} libraryName={'ethers.js'}>
      <div className="h-screen w-screen bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center">
        <div className="scroll-auto w-full flex items-center justify-center">
          <div className="text-6xl absolute top-10 select-none cursor-default" style={{fontFamily: 'Fortune'}}>Janka Score</div>

          <Landing />
        </div>
      </div>
    </Web3Provider>
  )
}

export default App
