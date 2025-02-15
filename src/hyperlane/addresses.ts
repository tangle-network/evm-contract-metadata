import { HyperlaneAddressesType, HyperlaneChainEnum } from './types';

const HoleskyAddresses: Partial<HyperlaneAddressesType> = {
  staticMerkleRootMultisigIsmFactory:
    '0x8822Df6071d8db08e62cf2BfEbb4ec698a6118A0',
  staticMessageIdMultisigIsmFactory:
    '0xDbCad8F8648AE9A2977E97d8821E0e813Bf2Df6B',
  staticAggregationIsmFactory: '0x1b2FA712be75D74E0D2758506221Ba8750e6AbDC',
  staticAggregationHookFactory: '0x526c2fC4cCC194570ED160bC6B1e1211c577A76c',
  domainRoutingIsmFactory: '0x92A87C7C6a391bf244DaD3D04779F82425f79072',
  staticMerkleRootWeightedMultisigIsmFactory:
    '0x0FDc2400B5a50637880dbEfB25d631c957620De8',
  staticMessageIdWeightedMultisigIsmFactory:
    '0x3AE007Ee7885A22bDC011e763a06885785d2fa60',
  proxyAdmin: '0x7aF2ABc39d93150c91bb414da72443e2Fe7A9127',
  mailbox: '0xf8743721F38856cd6Cb800082503E80FBd055620',
  interchainAccountRouter: '0xF8164740CaC2EAc81A759C491c54F9288992E2d2',
  interchainAccountIsm: '0x996AF1d2888f24B2c6b9304E71a02A75efc25E9C',
  validatorAnnounce: '0x199fCd3d081Efa95394EE69CACF6a42326CBA3Ef',
  testRecipient: '0x060f6806F90330533fC355Ea00BE77B333F928Db',
  protocolFee: '0x5a3Fe91ea1b337baF23aca05606A6c1D05D270E8',
  merkleTreeHook: '0x80F2616C4ac76Bf6196716E46a3A3fc1DC39cD74',
  interchainGasPaymaster: '0x5CBf4e70448Ed46c2616b04e9ebc72D29FF0cfA9'
} as const;

const TangleTestnetAddresses: Partial<HyperlaneAddressesType> = {
  domainRoutingIsmFactory: '0x0Bc052F32d5A547b4927E150c838cDDf727754e9',
  interchainAccountIsm: '0x2ED1e5B81476a38b7589196e3f79F030B6a7AAd5',
  interchainAccountRouter: '0x3B63421cc0C1b73679b29692d99719bFd01eAF2f',
  mailbox: '0x4FB98bF4E45Fd5e25343cAb6fF6d86667F7c4F68',
  proxyAdmin: '0x4d86b648599D2eDb489b01202B358270adA9Cd7C',
  staticAggregationHookFactory: '0x9C859d277fB3EAe7A968e2f51bffFc47A617d760',
  staticAggregationIsmFactory: '0x0730bc432ae28CEa48BB110E7574668CCd52eafE',
  staticMerkleRootMultisigIsmFactory:
    '0x5ee940e1EbF35Bf27FE8Bef060025317AF716A06',
  staticMerkleRootWeightedMultisigIsmFactory:
    '0x1b6404b8FeEB3B1d2730A44Fb07ca9EA222aD4fB',
  staticMessageIdMultisigIsmFactory:
    '0x2723aF1bfAC15B470F800622A64Cb57e19e3337c',
  staticMessageIdWeightedMultisigIsmFactory:
    '0xA2161da1Ed96B6e1381ce2148415Fcd9bAcA2de4',
  testRecipient: '0x3d148422858636e60D7195E1a9D5a1773b561b28',
  validatorAnnounce: '0xA3671516779b0c16196F8599335614190b31633f',
  protocolFee: '0xff38FeF8b08e11E778C8dB1400Ecf33E80d2FDAc',
  merkleTreeHook: '0x915e9cFB4E78B05747159a4181b3E14bF6C0Db08',
  interchainGasPaymaster: '0x0000000000000000000000000000000000000000'
} as const;

const TangleMainnetAddresses: Partial<HyperlaneAddressesType> = {
  aggregationHook: '0xDC995884ec53b6Bc809ed614f5E92084600002ed',
  domainRoutingIsm: '0xaDc0cB48E8DB81855A930C0C1165ea3dCe4Ba5C7',
  domainRoutingIsmFactory: '0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908',
  fallbackRoutingHook: '0xd21192429df453021e896f2897Dc8B1167DD61E5',
  interchainAccountIsm: '0x45285463352c53a481e882cD5E2AF2E25BBdAd0D',
  interchainAccountRouter: '0x67F36550b73B731e5b2FC44E4F8f250d89c87bD6',
  interchainGasPaymaster: '0x9844aFFaBE17c37F791ff99ABa58B0FbB75e22AF',
  interchainSecurityModule: '0x70e8beCE806914959c1B5D8F75d2217058D31437',
  mailbox: '0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7',
  merkleTreeHook: '0xF5da68b2577EF5C0A0D98aA2a58483a68C2f232a',
  pausableHook: '0x61594D2cA900C44ab51d07776465397FefC643C6',
  pausableIsm: '0x5d69BC38eF3eDb491c0b7186BEc4eC45c4013f93',
  protocolFee: '0x4E55aDA3ef1942049EA43E904EB01F4A0a9c39bd',
  proxyAdmin: '0x0761b0827849abbf7b0cC09CE14e1C93D87f5004',
  staticAggregationHookFactory: '0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6',
  staticAggregationIsm: '0xB0525d808721426c56377469B92db16857384deF',
  staticAggregationIsmFactory: '0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A',
  staticMerkleRootMultisigIsmFactory:
    '0x2C1FAbEcd7bFBdEBF27CcdB67baADB38b6Df90fC',
  staticMerkleRootWeightedMultisigIsmFactory:
    '0x148CF67B8A242c1360bb2C93fCe203EC4d4f9B56',
  staticMessageIdMultisigIsmFactory:
    '0x8b83fefd896fAa52057798f6426E9f0B080FCCcE',
  staticMessageIdWeightedMultisigIsmFactory:
    '0xcd849e612Aaa138f03698C3Edb42a34117BFF631',
  storageGasOracle: '0x7b2e996742fA42d223652A344252B725D1bC428C',
  testRecipient: '0x2c61Cda929e4e2174cb10cd8e2724A9ceaD62E67',
  timelockController: '0x0000000000000000000000000000000000000000',
  validatorAnnounce: '0x062200d92dF6bB7bA89Ce4D6800110450f94784e'
} as const;

/**
 * Hyperlane contract addresses deployed by the Tangle Network.
 *
 * Contains core Hyperlane addresses like mailboxes, IGP, routers etc.
 *
 * example:
 *
 * ```ts
 * import { HyperlaneAddresses, HyperlaneChainEnum } from '@tangle-network/hyperlane-contract-metadata';
 *
 * const holeskyMailboxAddress = HyperlaneAddresses[HyperlaneChainEnum.Holesky].mailbox;
 * const tangleMainnetMailboxAddress = HyperlaneAddresses[HyperlaneChainEnum.TangleMainnet].mailbox;
 * ```
 */
export const HyperlaneAddresses = {
  [HyperlaneChainEnum.Holesky]: HoleskyAddresses,
  [HyperlaneChainEnum.TangleTestnet]: TangleTestnetAddresses,
  [HyperlaneChainEnum.TangleMainnet]: TangleMainnetAddresses
} as const satisfies Record<
  HyperlaneChainEnum,
  Partial<HyperlaneAddressesType>
>;
