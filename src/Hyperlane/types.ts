/**
 * Enum for Hyperlane Chain Types.
 *
 * example:
 *
 * ```ts
 * import { HyperlaneChainEnum } from '@tangle-network/hyperlane-contract-metadata';
 *
 * const chainType = HyperlaneChainEnum.TangleMainnet;
 * ```
 */
export enum HyperlaneChainEnum {
  Holesky = 'holesky',
  TangleTestnet = 'tangletestnet',
  TangleMainnet = 'tangle'
}

/**
 * Hyperlane Addresses.
 *
 * example:
 *
 * ```ts
 * import { HyperlaneAddressesType, HyperlaneChainEnum } from '@tangle-network/hyperlane-contract-metadata';
 *
 * const holeskyMailboxAddress = HyperlaneAddresses[HyperlaneChainEnum.Holesky].mailbox;
 * const tangleMainnetMailboxAddress = HyperlaneAddresses[HyperlaneChainEnum.TangleMainnet].mailbox;
 * ```
 */
export type HyperlaneAddressesType = {
  aggregationHook: string;
  domainRoutingIsm: string;
  domainRoutingIsmFactory: string;
  fallbackRoutingHook: string;
  interchainAccountIsm: string;
  interchainAccountRouter: string;
  interchainGasPaymaster: string;
  interchainSecurityModule: string;
  mailbox: string;
  merkleTreeHook: string;
  pausableHook: string;
  pausableIsm: string;
  protocolFee: string;
  proxyAdmin: string;
  staticAggregationHookFactory: string;
  staticAggregationIsm: string;
  staticAggregationIsmFactory: string;
  staticMerkleRootMultisigIsmFactory: string;
  staticMerkleRootWeightedMultisigIsmFactory: string;
  staticMessageIdMultisigIsmFactory: string;
  staticMessageIdWeightedMultisigIsmFactory: string;
  storageGasOracle: string;
  testRecipient: string;
  timelockController: string;
  validatorAnnounce: string;
};
