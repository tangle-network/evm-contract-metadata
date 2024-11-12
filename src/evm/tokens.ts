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
 * import { EVMChainEnum, EVMTokens } from '@webb-tools/evm-contract-metadata';
 *
 * const WETHAddressOnHolesky = EVMTokens.Holesky.None.WETH.address;
 * const USDTAddressOnTangleMainnet = EVMTokens.TangleMainnet.Router.USDT.address;
 * const USDTABIOnTangleMainnet = EVMTokens.TangleMainnet.Router.USDT.abi;
 * ```
 */
export const EVMTokens = {
  [EVMChainEnum.Holesky]: {
    [EVMTokenBridgeEnum.ERC20]: {
      [EVMTokenEnum.WETH]: {
        address: '0x94373a4919B3240D86eA41593D5eBa789FEF3848',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
        abi: WETH9ABI
      }
    }
  },
  [EVMChainEnum.TangleTestnet]: {
    [EVMTokenBridgeEnum.Hyperlane]: {
      [EVMTokenEnum.WETH]: {
        address: '0x200DE548e393c38ee80482e9c5c186CBA7096ad4',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18,
        abi: HyperlaneERC20ABI
      }
    }
  },
  [EVMChainEnum.TangleMainnet]: {
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
  }
} as const satisfies Record<
  EVMChainEnum,
  Partial<
    Record<EVMTokenBridgeEnum, Partial<Record<EVMTokenEnum, EVMTokenData>>>
  >
>;
