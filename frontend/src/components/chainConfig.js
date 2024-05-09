import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'

export const [metaMask, hooks] = initializeConnector((actions) => new MetaMask({ actions }))

export const bnbChainId = 97; // Replace with the chain ID of the custom Ethereum chain
export const BNBTestChainParams = {
  chainId: `0x${bnbChainId.toString(16)}`,
  chainName: 'BNB Chain Test', // Replace with the name of the custom Ethereum chain
  nativeCurrency: {
    name: 'tBNB',
    symbol: 'tBNB',
    decimals: 18,
  },
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'], // Replace with the RPC URL of the custom Ethereum chain
  // blockExplorerUrls: ['https://custom-explorer-url.com'], // Replace with the block explorer URL of the custom Ethereum chain
};