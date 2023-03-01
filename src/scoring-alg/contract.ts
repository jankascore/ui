import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import {JankaProtocol, JankaProtocol__factory} from '../../../contracts/typechain-types'

export const contractAddress = '0x6833A38f5E2fF3E2e23Da5337Bb696d5b738495F';

export const getJanka = (provider: Signer | Provider): JankaProtocol => {
	return JankaProtocol__factory.connect(contractAddress, provider);
}