import { defineConfig } from '@wagmi/cli'
import {react} from '@wagmi/cli/plugins'
import {abi} from '../contracts/artifacts/contracts/JankaProtocol.sol/JankaProtocol.json'

/** @type {import('@wagmi/cli').Config} */
export default defineConfig({
  out: 'src/contract/generated.ts',
  contracts: [{
    abi: abi as any,
    name: "Janka",
    address: {
      84531: '0x586981dEB8995848C003Bca567207052A3314a14',
      5: '0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F'
    }
  }],
  plugins: [
    react({usePrepareContractFunctionWrite: true})
  ],
})
