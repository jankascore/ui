'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface NavLinkProps {
	href: string;
	children: ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
	const pathName = usePathname()
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		const root = pathName.split("/")[1]
		const hRoot = href.split("/")[1]

		if (root === hRoot) setActive(true)
		else setActive(false)
	}, [setActive, pathName, href])


	return (
		<div className={
			`${isActive && "from-sky-700 to-teal-700 bg-gradient-to-tr"} ` + 
			"px-2 py-1 rounded-lg transition-colors w-24 text-center font-bold"
		}>
			<Link href={href}>{children}</Link>
		</div>
	)
}

export default NavLink