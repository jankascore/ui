import Link from "next/link"
import NavLink from './NavLink'
import WalletButtons from "../WalletButtons"

const Nav = () => {
	return (
		<div className="w-full fixed p-4 z-20 ">
			<div className="w-full relative box-border h-16 bg-gradient-to-tr shadow-slate-900 from-slate-800 to-slate-700 shadow-sm z-20 flex items-center justify-between rounded-lg drop-shadow-lg px-4">
				<div className="text-2xl select-none cursor-default" style={{fontFamily: 'Fortune'}}>Janka Score</div>

				<div className="absolute w-full left-0 right-0 m-auto flex justify-center gap-8">
					<NavLink href="/">Attest</NavLink>
					<NavLink href="/check">Check</NavLink>
				</div>

				<div className="w-fit">
					<WalletButtons />
				</div>
			</div>
		</div>
	)
}

export default Nav