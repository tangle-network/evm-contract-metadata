import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

/**
 * Hyperlane chains deployed by the Tangle Network.
 *
 * @see {@link ChainMap}
 * @see {@link ChainMetadata}
 * @type {ChainMap<ChainMetadata>}
 */
export const HyperlaneChains: ChainMap<ChainMetadata> = {
  holesky: {
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
    rpcUrls: [
      {
        http: 'https://ethereum-holesky-rpc.publicnode.com'
      }
    ]
  },
  tangletestnet: {
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
  }
};
