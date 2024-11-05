import {
  ChainMetadata,
  ChainTechnicalStack,
  ExplorerFamily
} from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

import { HyperlaneChainEnum } from './types';

const HoleskyChainMetadata: ChainMetadata = {
  blockExplorers: [
    {
      apiUrl: 'https://api-holesky.etherscan.io/api',
      family: ExplorerFamily.Etherscan,
      name: 'Etherscan',
      url: 'https://holesky.etherscan.io'
    }
  ],
  blocks: {
    confirmations: 1,
    estimateBlockTime: 13,
    reorgPeriod: 2
  },
  chainId: 17000,
  displayName: 'Holesky',
  domainId: 17000,
  isTestnet: true,
  name: 'holesky',
  nativeToken: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH'
  },
  protocol: ProtocolType.Ethereum,
  rpcUrls: [{ http: 'https://ethereum-holesky-rpc.publicnode.com' }]
} as const;

const TangleTestnetChainMetadata: ChainMetadata = {
  blockExplorers: [
    {
      apiUrl: 'https://testnet-explorer.tangle.tools/api',
      family: ExplorerFamily.Blockscout,
      name: 'Tangle Testnet Explorer',
      url: 'https://testnet-explorer.tangle.tools'
    }
  ],
  blocks: {
    confirmations: 4,
    estimateBlockTime: 6,
    reorgPeriod: 4
  },
  chainId: 3799,
  displayName: 'Tangle Testnet',
  domainId: 3799,
  isTestnet: true,
  name: 'tangletestnet',
  nativeToken: {
    decimals: 18,
    name: 'Tangle Testnet Token',
    symbol: 'tTNT'
  },
  protocol: ProtocolType.Ethereum,
  rpcUrls: [
    {
      http: 'https://testnet-rpc.tangle.tools'
    }
  ]
} as const;

const TangleMainnetChainMetadata: ChainMetadata = {
  blockExplorers: [
    {
      apiUrl: 'https://explorer.tangle.tools/api',
      family: ExplorerFamily.Blockscout,
      name: 'Tangle EVM Explorer',
      url: 'https://explorer.tangle.tools'
    }
  ],
  blocks: {
    confirmations: 1,
    estimateBlockTime: 6,
    reorgPeriod: 'finalized'
  },
  chainId: 5845,
  deployer: {
    name: 'Abacus Works',
    url: 'https://www.hyperlane.xyz'
  },
  displayName: 'Tangle',
  domainId: 5845,
  gasCurrencyCoinGeckoId: 'tangle-network',
  isTestnet: false,
  name: 'tangle',
  nativeToken: {
    decimals: 18,
    name: 'Tangle Network Token',
    symbol: 'TNT'
  },
  protocol: ProtocolType.Ethereum,
  rpcUrls: [
    {
      http: 'https://rpc.tangle.tools'
    }
  ],
  technicalStack: ChainTechnicalStack.PolkadotSubstrate
} as const;

/**
 * List of chains on which the Tangle Network has deployed Hyperlane contracts.
 */
export const HyperlaneChains = {
  [HyperlaneChainEnum.Holesky]: HoleskyChainMetadata,
  [HyperlaneChainEnum.TangleTestnet]: TangleTestnetChainMetadata,
  [HyperlaneChainEnum.TangleMainnet]: TangleMainnetChainMetadata
} as const satisfies Record<HyperlaneChainEnum, ChainMetadata>;
