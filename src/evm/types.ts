/**
 * Enum for EVM Token Types.
 *
 * example:
 *
 * ```ts
 * import { EVMTokenEnum } from '@webb-tools/evm-contract-metadata';
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
 * import { EVMChainEnum } from '@webb-tools/evm-contract-metadata';
 *
 * const TangleMainnet = EVMChainEnum.TangleMainnet;
 * ```
 */
export enum EVMChainEnum {
  Holesky = 'holesky',
  TangleTestnet = 'tangletestnet',
  TangleMainnet = 'tangle'
}

/**
 * Enum for EVM Token Bridge Types.
 *
 * There can be multiple instances of the same token (e.g., WETH) on the same chain, each bridged through different bridges (e.g., Hyperlane, Router).
 * For example, a WETH on Holesky is not bridged, so its bridge type is `None`. In contrast, a WETH on TangleMainnet is bridged through Router or Hyperlane, so its bridge type is `Router` or `Hyperlane`.
 *
 * example:
 *
 * ```ts
 * import { EVMTokenBridgeEnum } from '@webb-tools/evm-contract-metadata';
 *
 * const Hyperlane = EVMTokenBridgeEnum.Hyperlane;
 * ```
 */
export enum EVMTokenBridgeEnum {
  Hyperlane = 'hyperlane',
  Router = 'router',
  ERC20 = 'erc20',
  Native = 'native'
}

export type EVMTokenData = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  abi: Array<Record<string, unknown>>;
};
