import React, { useState } from "react"

interface HiddenButtonProps {
	setFakeAddress: (address: string) => void
}

const HiddenButton: React.FC<HiddenButtonProps> = ({setFakeAddress}) => {
	const [fakeAddress, setFakeAddress2] = useState<string>()


	const handleEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setFakeAddress2(e.target.value);
		setFakeAddress(e.target.value);
	}

	return (
		<>
			<div className="absolute bottom-0 right-0 text-right">
				<div className="font-mono font-bold text-red-600">{fakeAddress || ''}</div>
				<input className="opacity-0 hover:opacity-100" onBlur={(e) => handleEvent(e)} placeholder="0x1234..."></input>
			</div>
		</>
	)
}

export default HiddenButton