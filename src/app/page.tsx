'use client'
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Landing from './(views)/Landing'
import SwitchNetwork from './(views)/SwitchNetwork'
import Wizard from './(views)/Wizard'

const supportedChains = [5, 84531]

export default function Home() {
  const {chain} = useNetwork();
  const {isConnected} = useAccount();
  const [isBegun, setIsBegun] = useState(false);

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center">
      <div className="scroll-auto w-full flex items-center justify-center">

        { chain && !supportedChains.includes(chain.id) ? <SwitchNetwork /> : 
          !isBegun || !isConnected ? <Landing hasBegun={() => setIsBegun(true)} /> : <Wizard />
        }
      </div>
    </div>
  )
}
