import { EvmToken, EvmTokenInfo, EvmChain } from './types';

/**
 * EVM Chain to token map
 * 
 * @constant
 * @type {Record<EvmChain, Record<EvmToken, EvmTokenInfo>>}
 */
export const EvmTokens: Record<EvmChain, Record<EvmToken, EvmTokenInfo>> = {
  [EvmChain.HOLESKY]: {
    [EvmToken.WETH]: {
      address: '0x94373a4919B3240D86eA41593D5eBa789FEF3848',
      symbol: 'WETH'
    }
  },
  [EvmChain.TANGLE_TESTNET]: {
    [EvmToken.WETH]: {
      address: '0x200DE548e393c38ee80482e9c5c186CBA7096ad4',
      symbol: 'WETH'
    }
  }
} as const;
    