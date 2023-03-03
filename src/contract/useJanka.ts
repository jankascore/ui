import { BigNumber, ethers ,} from "ethers";
import { useAccount } from "wagmi";
import { useJankaAttest, useJankaAttestations, useJankaWithdrawStake, usePrepareJankaAttest, usePrepareJankaWithdrawStake } from "./generated";
import { ScoreSet } from "../scoring-alg/getScoringAlgorithm";

export interface Attestation {
	score: number;
	isStakeClaimed: boolean
	algorithmCID: string;
	finalizationTime: typeof BigNumber
}

export const useJanka = (score?: ScoreSet) => {
	const {address} = useAccount();
	const {data: attestation, refetch: refetchAttestation} = useJankaAttestations({args: address ? [address] : undefined })

	const {config: attestConfig} = usePrepareJankaAttest({
		args: score ? [score?.score, score?.cid, BigNumber.from(score?.timestamp)] : undefined,
		overrides: {gasLimit: BigNumber.from(175000), value: ethers.utils.parseEther('0.01')}
	})
	const {writeAsync: attest} = useJankaAttest(attestConfig);

	const {config: reclaimConfig} = usePrepareJankaWithdrawStake();
	const {writeAsync: reclaim} = useJankaWithdrawStake(reclaimConfig);

	return {attestation, attest, reclaim, refetchAttestation}
}