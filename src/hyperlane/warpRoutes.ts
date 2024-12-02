import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

/**
 * Warp routes deployed by the Tangle Network.
 */
export const HyperlaneWarpRouteConfig: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: '0xa468A8013A16351D16951e04736ebcab663B5F6c',
      chainName: 'holesky',
      collateralAddressOrDenom: '0x94373a4919B3240D86eA41593D5eBa789FEF3848',
      connections: [
        {
          token:
            'ethereum|tangletestnet|0x407AE90DBa08C816B62033221b422e95AA248f63'
        }
      ],
      decimals: 18,
      name: 'Wrapped Ether',
      standard: TokenStandard.EvmHypCollateral,
      symbol: 'WETH'
    },
    {
      addressOrDenom: '0x407AE90DBa08C816B62033221b422e95AA248f63',
      chainName: 'tangletestnet',
      connections: [
        {
          token: 'ethereum|holesky|0xa468A8013A16351D16951e04736ebcab663B5F6c'
        }
      ],
      decimals: 18,
      name: 'Wrapped Ether',
      standard: TokenStandard.EvmHypSynthetic,
      symbol: 'WETH'
    }
  ]
};

/**
 * List of warp route IDs supported by the Tangle Network dApp.
 *
 * Warp route IDs follow the format `SYMBOL/chainname1-chainname2...`, where chains are ordered alphabetically.
 */
export const HyperlaneWarpRouteWhitelist = [
  'WETH/holesky-tangletestnet'
] as const;
