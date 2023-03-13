'use client'

import { Web3Button, Web3NetworkSwitch } from "@web3modal/react"

const WalletButtons = () => {
	return <div className="flex gap-2">
		<Web3NetworkSwitch />
		<Web3Button balance="show" />
	</div>
}

export default WalletButtons