export const getScoring = async (cid: string) => {
  const source = await fetch(`https://janka.mckamyk.io/ipfs/${cid}`).then(r => r.text());
  Function(source)();
  //@ts-ignore
	const func = window.calc.default as (a: number, b: number) => number
  //@ts-ignore
	window.calc = undefined;
  return () => func(12, 54)
}

export const getCurrentCid = async () => {
	// replace with contract call
	return 'QmUVGkjR7neroxpU9fwzx65km16SEpz8tj6fVdkEzHzPXN'
}

export const computeScore = async (a: number, b: number): Promise<number> => {
	const alg = await getScoring(await getCurrentCid());

	return alg();
}