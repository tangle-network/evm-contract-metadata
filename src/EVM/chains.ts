import { EvmChain, EvmChainInfo, EVMChainId } from './types';
import { holesky } from 'viem/chains';
import { defineChain } from 'viem';

export const EvmChains: Record<EvmChain, EvmChainInfo> = {
  [EvmChain.HOLESKY]: {
    ...holesky,
    isTestnet: true
  },
  [EvmChain.TANGLE_TESTNET]: {
    ...defineChain({
      id: EVMChainId.TANGLE_TESTNET,
      name: 'Tangle Testnet EVM',
      nativeCurrency: {
        name: 'Test Tangle Network Token',
        symbol: 'tTNT',
        decimals: 18
      },
      blockExplorers: {
        default: {
          name: 'Tangle Testnet EVM Explorer',
          url: 'https://testnet-explorer.tangle.tools'
        }
      },
      rpcUrls: {
        default: {
          http: ['https://testnet-rpc.tangle.tools']
        }
      },
      isTestnet: true
    }),
    isTestnet: true
  }
} as const;
