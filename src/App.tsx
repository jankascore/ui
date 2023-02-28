import {useEffect, useState} from 'react'
import Landing from './views/Landing'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { connectors } from './ethereum/provider';
import Wizard from './views/Wizard';

const Providers = () => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <App />
    </Web3ReactProvider>
  )
}

function App() {
  const web3 = useWeb3React();
  const [isBegun, setIsBegun] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (web3.isActive && isBegun) setIsConnected(true);
    else setIsConnected(false);
  }, [web3.isActive, isBegun, setIsConnected])

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center">
      <div className="scroll-auto w-full flex items-center justify-center">
        <div className="text-6xl absolute top-10 select-none cursor-default" style={{fontFamily: 'Fortune'}}>Janka Score</div>

        {!isBegun || !isConnected ? <Landing hasBegun={() => setIsBegun(true)} /> : <Wizard />}
      </div>
    </div>
  )
}

export default Providers
