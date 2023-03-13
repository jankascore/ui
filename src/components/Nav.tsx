import { Web3Button, Web3NetworkSwitch } from "@web3modal/react"
import Link from "next/link"
import WalletButtons from "./WalletButtons"

const Nav = () => {
	return (
		<div className="w-full fixed p-4 z-20 ">
			<div className="w-full relative box-border h-16 bg-gradient-to-tr shadow-slate-900 from-slate-800 to-slate-700 shadow-sm z-20 flex items-center justify-between rounded-lg drop-shadow-lg px-4">
				<div className="text-2xl select-none cursor-default" style={{fontFamily: 'Fortune'}}>Janka Score</div>

				<div className="absolute w-full left-0 right-0 m-auto flex justify-center gap-8">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="links">Linktree</Link>
				</div>

				<div className="w-fit">
					<WalletButtons />
				</div>
			</div>
		</div>
	)
}

export default Nav