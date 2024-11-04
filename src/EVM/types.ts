import type { Chain } from 'viem/chains';

export enum EvmToken {
  WETH = 'WETH'
}

export type EvmTokenInfo = {
  address: string;
  symbol: string;
};

export enum EvmChain {
  HOLESKY = 'holesky',
  TANGLE_TESTNET = 'tangletestnet'
}

export type EvmChainInfo = Chain & {
  isTestnet: boolean;
};

export enum EVMChainId {
  HOLESKY = 17000,
  TANGLE_TESTNET = 3799,
}
