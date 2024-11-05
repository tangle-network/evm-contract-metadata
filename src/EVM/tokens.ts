import { EVMChainType, EVMTokenType } from './types';

/**
 * EVM Tokens and their contract addresses.
 */
export const EVMTokens = {
  [EVMChainType.Holesky]: {
    [EVMTokenType.WETH]: '0x94373a4919B3240D86eA41593D5eBa789FEF3848'
  },
  [EVMChainType.TangleTestnet]: {
    [EVMTokenType.WETH]: '0x200DE548e393c38ee80482e9c5c186CBA7096ad4'
  },
  [EVMChainType.TangleMainnet]: {
    [EVMTokenType.USDT]: '0xb6dc6c8b71e88642cead3be1025565a9ee74d1c6',
    [EVMTokenType.USDC]: '0x97eec1c29f745dc7c267f90292aa663d997a601d',
    [EVMTokenType.WETH]: '0x01b4ce0d48ce91eb6bcaf5db33870c65d641b894',
    [EVMTokenType.AVAIL]: '0xb8a09939F27908505C4241C3c251f3DA33a207A9'
  }
} as const satisfies Record<
  EVMChainType,
  Partial<Record<EVMTokenType, string>>
>;
