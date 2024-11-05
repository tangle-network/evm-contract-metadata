export enum HyperlaneChainEnum {
  Holesky = 'holesky',
  TangleTestnet = 'tangletestnet',
  TangleMainnet = 'tangle'
}

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