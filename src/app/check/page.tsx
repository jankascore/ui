'use client'
import { Card } from "@/components"
import Input from "@/components/input"
import { useEffect, useState } from "react"
import { isAddress } from "viem"
import {computeScore, ScoreSet} from '../../scoring-alg/getScoringAlgorithm'

const Simulate = () => {
	const [score, setScore] = useState<ScoreSet | undefined>()
	const [address, setAddress] = useState<string>();

	useEffect(() => {
		const getScore = async () => {
			if (address && isAddress(address)) {
				const scr = await computeScore(address, Math.floor(new Date().getTime()/1000))
				setScore(scr)
			}

			if (!address || !isAddress(address)) {
				setScore(undefined)
			}
		}
		getScore()
	}, [address, setScore])

	const handleAddress = (address: string) => {
		setScore(undefined)
		setAddress(address);
	}


	return (
		<div className="absolute h-screen w-screen top-0 left-0 flex items-center justify-center">
			<Card className="max-w-3xl w-full">
				<h2 className="text-center text-lg font-bold mb-20">Simulate a Credit Score</h2>

				<div className="flex justify-center mb-20">
					<div className="" style={{width: '26rem'}}>
						<div className="font-bold text-slate-300 ml-2">Address:</div>
						<Input onChange={e => handleAddress(e.target.value)} placeholder="0x000000000000000000000000000000000000dEaD"></Input>
					</div>
				</div>

				{score ?
					<div className="relative rounded-md overflow-hidden">
						<span className="absolute bottom-1 leading-none p-0 left-0 right-0 m-auto text-center font-bold z-10 shadow-sm">{score.score}</span>
						<div className="bg-slate-900 h-6" />
						<div className="absolute bg-gradient-to-r from-sky-500 to-teal-500 h-6 top-0 left-0" style={{width: `${score.score}%`}} />
						<div className="absolute h-2 top-0 border-l-red-700 border-r-yellow-500 border-x-2" style={{left: `${score.bounds[0]}%`, width: `${score.bounds[1] - score.bounds[0]}%`, marginTop: '0.5rem'}}>
							<div className="w-full h-px bg-gradient-to-r from-red-700 to-yellow-500 mt-1"  />
						</div>
					</div>
					:
					<div className="bg-slate-900 h-6 rounded-md" />
				}
			</Card>
		</div>
	)
}

export default Simulate