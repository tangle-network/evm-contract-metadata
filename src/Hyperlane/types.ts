/**
 * Hyperlane contract addresses type
 */
export interface HyperlaneChainAddresses {
  domainRoutingIsmFactory: string;
  interchainAccountIsm: string;
  interchainAccountRouter: string;
  mailbox: string;
  proxyAdmin: string;
  staticAggregationHookFactory: string;
  staticAggregationIsmFactory: string;
  staticMerkleRootMultisigIsmFactory: string;
  staticMerkleRootWeightedMultisigIsmFactory: string;
  staticMessageIdMultisigIsmFactory: string;
  staticMessageIdWeightedMultisigIsmFactory: string;
  testRecipient: string;
  validatorAnnounce: string;
  protocolFee: string;
  merkleTreeHook: string;
  interchainGasPaymaster: string;
}

/**
 * Hyperlane chains
 */
export enum HyperlaneChain {
  HOLESKY = 'holesky',
  TANGLE_TESTNET = 'tangletestnet'
}
