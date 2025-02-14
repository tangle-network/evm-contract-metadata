import HyperlaneERC20ABI from './abis/HyperlaneERC20.json';
import RouterERC20ABI from './abis/RouterERC20.json';
import WETH9ABI from './abis/WETH9.json';
import {
  EVMChainEnum,
  EVMTokenBridgeEnum,
  EVMTokenData,
  EVMTokenEnum
} from './types';

/**
 * EVM tokens and their contract addresses.
 *
 * example:
 *
 * ```ts
 * import { EVMChainEnum, EVMTokens } from '@tangle-network/evm-contract-metadata';
 *
 * const WETHAddressOnHolesky = EVMTokens.Holesky.None.WETH.address;
 * const USDTAddressOnTangleMainnet = EVMTokens.TangleMainnet.Router.USDT.address;
 * const USDTABIOnTangleMainnet = EVMTokens.TangleMainnet.Router.USDT.abi;
 * ```
 */
export const EVMTokens = {
  [EVMChainEnum.Holesky]: {
    [EVMTokenBridgeEnum.None]: {
      [EVMTokenEnum.WETH]: {
        address: '0x94373a4919B3240D86eA41593D5eBa789FEF3848',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
        abi: WETH9ABI
      }
    },
    [EVMTokenBridgeEnum.Hyperlane]: {
      [EVMTokenEnum.WETH]: {
        address: '0xa468A8013A16351D16951e04736ebcab663B5F6c',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
        abi: HyperlaneERC20ABI
      }
    }
  },
  [EVMChainEnum.TangleTestnet]: {
    [EVMTokenBridgeEnum.Hyperlane]: {
      [EVMTokenEnum.WETH]: {
        address: '0x407AE90DBa08C816B62033221b422e95AA248f63',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
        abi: HyperlaneERC20ABI
      }
    }
  },
  [EVMChainEnum.Tangle]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.USDT]: {
        address: '0xb6dc6c8b71e88642cead3be1025565a9ee74d1c6',
        name: 'Tether USD',
        symbol: 'USDT',
        decimals: 6,
        abi: RouterERC20ABI
      },
      [EVMTokenEnum.USDC]: {
        address: '0x97eec1c29f745dc7c267f90292aa663d997a601d',
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        abi: RouterERC20ABI
      },
      [EVMTokenEnum.WETH]: {
        address: '0x01b4ce0d48ce91eb6bcaf5db33870c65d641b894',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
        abi: RouterERC20ABI
      },
      [EVMTokenEnum.AVAIL]: {
        address: '0xb8a09939F27908505C4241C3c251f3DA33a207A9',
        name: 'AVAIL',
        symbol: 'AVAIL',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Ethereum]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0x3741AA7288b2bfbBaE69C96824d746765351FDad',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Polygon]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0x1C6d7dE17450502F3E1C2C8747EE47d05E0796f4',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Arbitrum]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0xEB2182eB7839F5684CEC5036aA83dBd0a797a3ed',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Optimism]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0xd2F78Ef4E2b063D2678f8D591634dFD96018AF19',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Linea]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0x15DE138aBE7eFEB4F64dC27FbCCeDAA58fa2ff26',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Base]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0x792Ad03aD2e18A9853E67157e24c0B75fa02c336',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  },
  [EVMChainEnum.Bsc]: {
    [EVMTokenBridgeEnum.Router]: {
      [EVMTokenEnum.TNT]: {
        address: '0xaAD4DB59954BAB96151b08EdA64C9cF6daDA5cac',
        name: 'Tangle Network Token',
        symbol: 'TNT',
        decimals: 18,
        abi: RouterERC20ABI
      }
    }
  }
} as const satisfies Record<
  EVMChainEnum,
  Partial<
    Record<EVMTokenBridgeEnum, Partial<Record<EVMTokenEnum, EVMTokenData>>>
  >
>;
