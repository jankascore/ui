export interface ScoreSet {
	score: number;
	bounds: [number, number]
	timestamp: number;
	cid: string;
}

export type ScoreTuple = [number, [number, number]]

export const getScoring = async (cid: string) => {
  const source = await fetch(`https://janka.mckamyk.io/ipfs/${cid}`).then(r => r.text());
  Function(source)();
  //@ts-ignore
	const func = window.calc.calculateScore as (address: string, timestamp: number) => Promise<ScoreTuple>
  //@ts-ignore
	window.calc = undefined;
  return func
}

export const getCurrentCid = async () => {
	// replace with contract call
	return 'QmRNYZMjkZmwh2fYYLWHCM4AwaMqsFCYSGeokXtxcEnSWJ'
}

export const computeScore = async (address: string, timestamp: number): Promise<ScoreSet> => {
	const cid = await getCurrentCid();
	const alg = await getScoring(cid);

	const [score, bounds] = await alg(address, timestamp)

	return {
		score,
		bounds,
		cid,
		timestamp
	}
}