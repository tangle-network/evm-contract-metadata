import { EVMChainEnum, EVMTokenEnum } from './types';

/**
 * EVM tokens and their contract addresses.
 *
 * example:
 *
 * ```ts
 * import { EVMChainEnum, EVMTokens } from '@tangle-network/evm-contract-metadata';
 *
 * const WETHAddressOnHolesky = EVMTokens[EVMChainEnum.Holesky].WETH;
 * const USDTAddressOnTangleMainnet = EVMTokens[EVMChainEnum.TangleMainnet].USDT;
 * ```
 */
export const EVMTokens = {
  [EVMChainEnum.Holesky]: {
    [EVMTokenEnum.WETH]: '0x94373a4919B3240D86eA41593D5eBa789FEF3848'
  },
  [EVMChainEnum.TangleTestnet]: {
    [EVMTokenEnum.WETH]: '0x200DE548e393c38ee80482e9c5c186CBA7096ad4'
  },
  [EVMChainEnum.TangleMainnet]: {
    [EVMTokenEnum.USDT]: '0xb6dc6c8b71e88642cead3be1025565a9ee74d1c6',
    [EVMTokenEnum.USDC]: '0x97eec1c29f745dc7c267f90292aa663d997a601d',
    [EVMTokenEnum.WETH]: '0x01b4ce0d48ce91eb6bcaf5db33870c65d641b894',
    [EVMTokenEnum.AVAIL]: '0xb8a09939F27908505C4241C3c251f3DA33a207A9'
  }
} as const satisfies Record<
  EVMChainEnum,
  Partial<Record<EVMTokenEnum, string>>
>;
