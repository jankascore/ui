import {hooks, metaMask} from './metamask';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { WalletConnect } from '@web3-react/walletconnect';
import { Network } from '@web3-react/network';
import { MetaMask } from '@web3-react/metamask';
import { Web3ReactHooks } from '@web3-react/core';

export const connectors: [MetaMask | CoinbaseWallet | WalletConnect | Network, Web3ReactHooks][] = [
	[metaMask, hooks]
]