import { describe, expect, it } from 'vitest';

import { EVMChainEnum, EVMTokenEnum, EVMTokens } from '../src';

describe('EVM Token Tests', () => {
  const expectedTokens = {
    [EVMChainEnum.Holesky]: {
      WETH: '0x94373a4919B3240D86eA41593D5eBa789FEF3848'
    },
    tangletestnet: {
      WETH: '0x200DE548e393c38ee80482e9c5c186CBA7096ad4'
    },
    tangle: {
      USDT: '0xb6dc6c8b71e88642cead3be1025565a9ee74d1c6'
    }
  };

  it('Should have correct token addresses for all chains', () => {
    Object.entries(expectedTokens).forEach(([chain, tokens]) => {
      Object.entries(tokens).forEach(([token, address]) => {
        const chainTokens = EVMTokens[chain as EVMChainEnum] as Partial<
          Record<EVMTokenEnum, string>
        >;
        expect(chainTokens[token as EVMTokenEnum]).toBe(address);
      });
    });
  });
});
