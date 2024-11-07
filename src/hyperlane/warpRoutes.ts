import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

/**
 * Warp routes deployed by the Tangle Network.
 */
export const HyperlaneWarpRouteConfig: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: '0xdFe0fbA0F8C62278DF4A9fDc787F9cFF28522FD3',
      chainName: 'holesky',
      collateralAddressOrDenom: '0x94373a4919B3240D86eA41593D5eBa789FEF3848',
      connections: [
        {
          token:
            'ethereum|tangletestnet|0x200DE548e393c38ee80482e9c5c186CBA7096ad4'
        }
      ],
      decimals: 18,
      name: 'Wrapped Ether',
      standard: TokenStandard.EvmHypCollateral,
      symbol: 'WETH'
    },
    {
      addressOrDenom: '0x200DE548e393c38ee80482e9c5c186CBA7096ad4',
      chainName: 'tangletestnet',
      connections: [
        {
          token: 'ethereum|holesky|0xdFe0fbA0F8C62278DF4A9fDc787F9cFF28522FD3'
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
