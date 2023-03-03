// Generated by @wagmi/cli@0.1.11 on 3/2/2023 at 8:11:45 PM
import {
  useContract,
  UseContractConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Janka
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export const jankaABI = [
  { type: 'error', inputs: [], name: 'AttestationOustanding' },
  { type: 'error', inputs: [], name: 'ChallengeDenied' },
  {
    type: 'error',
    inputs: [
      { name: 'amountExpected', internalType: 'uint256', type: 'uint256' },
      { name: 'amountProvided', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'IncorrectStakeAmount',
  },
  { type: 'error', inputs: [], name: 'InvalidAlgorithm' },
  { type: 'error', inputs: [], name: 'InvalidAttestationChallenge' },
  {
    type: 'error',
    inputs: [
      { name: 'min', internalType: 'uint8', type: 'uint8' },
      { name: 'max', internalType: 'uint8', type: 'uint8' },
      { name: 'provided', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'InvalidScore',
  },
  { type: 'error', inputs: [], name: 'InvalidWithdraw' },
  { type: 'error', inputs: [], name: 'PermissionDenied' },
  {
    type: 'error',
    inputs: [
      { name: 'timeRemaining', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'WithdrawNotReady',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'score', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'algorithmCID',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ScoreAttested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'challenger',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'scoreClaimed',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'scoreActual',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'algorithmCID',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ScoreChallenged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeWithdrawn',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'CHALLENGE_WINDOW',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'REQUIRED_ATTESTATION_STAKE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_algorithmCID', internalType: 'string', type: 'string' }],
    name: 'allowAlgorithmCID',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_verifier', internalType: 'address', type: 'address' }],
    name: 'allowVerifier',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'allowlistedVerifiers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_score', internalType: 'uint8', type: 'uint8' },
      { name: '_algorithmCID', internalType: 'string', type: 'string' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'attest',
    outputs: [
      { name: '_finalizationTime', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'attestations',
    outputs: [
      { name: 'score', internalType: 'uint8', type: 'uint8' },
      { name: 'isStakeClaimed', internalType: 'bool', type: 'bool' },
      { name: 'algorithmCID', internalType: 'string', type: 'string' },
      { name: 'finalizationTime', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_attester', internalType: 'address', type: 'address' },
      { name: '_score', internalType: 'uint8', type: 'uint8' },
      { name: '_algorithmCID', internalType: 'string', type: 'string' },
      { name: '_rewardRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'challenge',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'supportedAlgorithms',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'withdrawStake',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export const jankaAddress = {
  5: '0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F',
} as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export const jankaConfig = { address: jankaAddress, abi: jankaABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link jankaABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJanka(
  config: Omit<UseContractConfig, 'abi' | 'address'> & {
    chainId?: keyof typeof jankaAddress
  } = {} as any,
) {
  return useContract({ abi: jankaABI, address: jankaAddress[5], ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof jankaABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof jankaABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    ...config,
  } as UseContractReadConfig<typeof jankaABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"CHALLENGE_WINDOW"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaChallengeWindow<
  TSelectData = ReadContractResult<typeof jankaABI, 'CHALLENGE_WINDOW'>,
>(
  config: Omit<
    UseContractReadConfig<typeof jankaABI, 'CHALLENGE_WINDOW', TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'CHALLENGE_WINDOW',
    ...config,
  } as UseContractReadConfig<typeof jankaABI, 'CHALLENGE_WINDOW', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"REQUIRED_ATTESTATION_STAKE"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaRequiredAttestationStake<
  TSelectData = ReadContractResult<
    typeof jankaABI,
    'REQUIRED_ATTESTATION_STAKE'
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof jankaABI,
      'REQUIRED_ATTESTATION_STAKE',
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'REQUIRED_ATTESTATION_STAKE',
    ...config,
  } as UseContractReadConfig<
    typeof jankaABI,
    'REQUIRED_ATTESTATION_STAKE',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"allowlistedVerifiers"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaAllowlistedVerifiers<
  TSelectData = ReadContractResult<typeof jankaABI, 'allowlistedVerifiers'>,
>(
  config: Omit<
    UseContractReadConfig<typeof jankaABI, 'allowlistedVerifiers', TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'allowlistedVerifiers',
    ...config,
  } as UseContractReadConfig<
    typeof jankaABI,
    'allowlistedVerifiers',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"attestations"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaAttestations<
  TSelectData = ReadContractResult<typeof jankaABI, 'attestations'>,
>(
  config: Omit<
    UseContractReadConfig<typeof jankaABI, 'attestations', TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'attestations',
    ...config,
  } as UseContractReadConfig<typeof jankaABI, 'attestations', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"owner"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaOwner<
  TSelectData = ReadContractResult<typeof jankaABI, 'owner'>,
>(
  config: Omit<
    UseContractReadConfig<typeof jankaABI, 'owner', TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof jankaABI, 'owner', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"supportedAlgorithms"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaSupportedAlgorithms<
  TSelectData = ReadContractResult<typeof jankaABI, 'supportedAlgorithms'>,
>(
  config: Omit<
    UseContractReadConfig<typeof jankaABI, 'supportedAlgorithms', TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractRead({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'supportedAlgorithms',
    ...config,
  } as UseContractReadConfig<
    typeof jankaABI,
    'supportedAlgorithms',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaWrite<
  TMode extends WriteContractMode,
  TFunctionName extends string,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, string>['abi'],
        TFunctionName
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<TMode, typeof jankaABI, TFunctionName> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, TFunctionName>({
    abi: jankaABI,
    address: jankaAddress[5],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"allowAlgorithmCID"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaAllowAlgorithmCid<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'allowAlgorithmCID'>['abi'],
        'allowAlgorithmCID'
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'allowAlgorithmCID'
      }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'allowAlgorithmCID'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'allowAlgorithmCID'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'allowAlgorithmCID'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'allowAlgorithmCID',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"allowVerifier"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaAllowVerifier<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'allowVerifier'>['abi'],
        'allowVerifier'
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'allowVerifier'
      }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'allowVerifier'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'allowVerifier'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'allowVerifier'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'allowVerifier',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"attest"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaAttest<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'attest'>['abi'],
        'attest'
      > & { address?: Address; chainId?: TChainId; functionName?: 'attest' }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'attest'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'attest'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'attest'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'attest',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"challenge"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaChallenge<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'challenge'>['abi'],
        'challenge'
      > & { address?: Address; chainId?: TChainId; functionName?: 'challenge' }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'challenge'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'challenge'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'challenge'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'challenge',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaRenounceOwnership<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'renounceOwnership'>['abi'],
        'renounceOwnership'
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'renounceOwnership'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'renounceOwnership'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaTransferOwnership<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'transferOwnership'>['abi'],
        'transferOwnership'
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'transferOwnership'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'transferOwnership'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"withdrawStake"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaWithdrawStake<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof jankaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof jankaABI, 'withdrawStake'>['abi'],
        'withdrawStake'
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'withdrawStake'
      }
    : UseContractWriteConfig<TMode, typeof jankaABI, 'withdrawStake'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'withdrawStake'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof jankaABI, 'withdrawStake'>({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'withdrawStake',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"allowAlgorithmCID"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaAllowAlgorithmCid(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'allowAlgorithmCID'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'allowAlgorithmCID',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'allowAlgorithmCID'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"allowVerifier"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaAllowVerifier(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'allowVerifier'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'allowVerifier',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'allowVerifier'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"attest"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaAttest(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'attest'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'attest',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'attest'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"challenge"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaChallenge(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'challenge'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'challenge',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'challenge'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link jankaABI}__ and `functionName` set to `"withdrawStake"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function usePrepareJankaWithdrawStake(
  config: Omit<
    UsePrepareContractWriteConfig<typeof jankaABI, 'withdrawStake'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: jankaABI,
    address: jankaAddress[5],
    functionName: 'withdrawStake',
    ...config,
  } as UsePrepareContractWriteConfig<typeof jankaABI, 'withdrawStake'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link jankaABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof jankaABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractEvent({
    abi: jankaABI,
    address: jankaAddress[5],
    ...config,
  } as UseContractEventConfig<typeof jankaABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link jankaABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof jankaABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractEvent({
    abi: jankaABI,
    address: jankaAddress[5],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof jankaABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link jankaABI}__ and `eventName` set to `"ScoreAttested"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaScoreAttestedEvent(
  config: Omit<
    UseContractEventConfig<typeof jankaABI, 'ScoreAttested'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractEvent({
    abi: jankaABI,
    address: jankaAddress[5],
    eventName: 'ScoreAttested',
    ...config,
  } as UseContractEventConfig<typeof jankaABI, 'ScoreAttested'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link jankaABI}__ and `eventName` set to `"ScoreChallenged"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaScoreChallengedEvent(
  config: Omit<
    UseContractEventConfig<typeof jankaABI, 'ScoreChallenged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractEvent({
    abi: jankaABI,
    address: jankaAddress[5],
    eventName: 'ScoreChallenged',
    ...config,
  } as UseContractEventConfig<typeof jankaABI, 'ScoreChallenged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link jankaABI}__ and `eventName` set to `"StakeWithdrawn"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F)
 */
export function useJankaStakeWithdrawnEvent(
  config: Omit<
    UseContractEventConfig<typeof jankaABI, 'StakeWithdrawn'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof jankaAddress } = {} as any,
) {
  return useContractEvent({
    abi: jankaABI,
    address: jankaAddress[5],
    eventName: 'StakeWithdrawn',
    ...config,
  } as UseContractEventConfig<typeof jankaABI, 'StakeWithdrawn'>)
}