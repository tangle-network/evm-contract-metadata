import { describe, expect, it } from 'vitest';

import {
  HyperlaneAddresses,
  HyperlaneChainEnum,
  HyperlaneChains,
  HyperlaneWarpRouteWhitelist
} from '../src';

describe('Hyperlane Configuration', () => {
  it('Should have correct configuration for all supported chains', () => {
    const expectedConfig = {
      tangletestnet: {
        mailbox: '0x0FDc2400B5a50637880dbEfB25d631c957620De8',
        domainId: 3799
      },
      holesky: {
        mailbox: '0x57529d3663bb44e8ab3335743dd42d2e1E3b46BA',
        domainId: 17000
      }
    };

    Object.entries(expectedConfig).forEach(([chain, config]) => {
      expect(HyperlaneAddresses[chain as HyperlaneChainEnum].mailbox).toBe(
        config.mailbox
      );
      expect(HyperlaneChains[chain as HyperlaneChainEnum].domainId).toBe(
        config.domainId
      );
    });
  });

  it('Should have all required warp routes whitelisted', () => {
    const requiredRoutes = ['WETH/holesky-tangletestnet'];
    requiredRoutes.forEach((route) => {
      expect(HyperlaneWarpRouteWhitelist).toContain(route);
    });
  });
});
