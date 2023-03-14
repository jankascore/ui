'use client'
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Landing from './(attest)/Landing'
import SwitchNetwork from './(attest)/SwitchNetwork'
import Wizard from './(attest)/Wizard'

const supportedChains = [5, 84531]

export default function Home() {
  const {chain} = useNetwork();
  const {isConnected} = useAccount();
  const [isBegun, setIsBegun] = useState(false);

  return (
      <div className="h-screen w-screen absolute top-0 left-0 flex items-center justify-center">

        { chain && !supportedChains.includes(chain.id) ? <SwitchNetwork /> : 
          !isBegun || !isConnected ? <Landing hasBegun={() => setIsBegun(true)} /> : <Wizard />
        }
      </div>
  )
}
