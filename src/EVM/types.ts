/**
 * Enum for EVM Token Types.
 *
 * example:
 *
 * ```ts
 * import { EVMTokenEnum } from '@tangle-network/evm-contract-metadata';
 *
 * const WETH = EVMTokenEnum.WETH;
 * ```
 */
export enum EVMTokenEnum {
  WETH = 'WETH',
  USDT = 'USDT',
  USDC = 'USDC',
  AVAIL = 'AVAIL'
}

/**
 * Enum for EVM Chain Types.
 *
 * example:
 *
 * ```ts
 * import { EVMChainEnum } from '@tangle-network/evm-contract-metadata';
 *
 * const TangleMainnet = EVMChainEnum.TangleMainnet;
 * ```
 */
export enum EVMChainEnum {
  Holesky = 'holesky',
  TangleTestnet = 'tangletestnet',
  TangleMainnet = 'tangle'
}
