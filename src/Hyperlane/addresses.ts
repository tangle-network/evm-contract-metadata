import { HyperlaneAddressesType, HyperlaneChainEnum } from './types';

const HoleskyAddresses: Partial<HyperlaneAddressesType> = {
  staticMerkleRootMultisigIsmFactory:
    '0xf56991Fb4829cE3Da2Dd4050292823D3056A2a84',
  staticMessageIdMultisigIsmFactory:
    '0x23160191baf37EB3d92CeC1A4F11cffe74CC2814',
  staticAggregationIsmFactory: '0xeC6E0302B1d191a4958859234D31dE97E9692Eb4',
  staticAggregationHookFactory: '0xCA6719E2f4a3b8405536bD7d8d719379e7721B7f',
  domainRoutingIsmFactory: '0xb545E1BD3a7E8d7463CD30Ce64D470BC901dAbf8',
  staticMerkleRootWeightedMultisigIsmFactory:
    '0xC5F161354EBB6E6F89536A2d9e49FECD654c7ef0',
  staticMessageIdWeightedMultisigIsmFactory:
    '0xdf28b577913B3cA63cc954cc8D2d593c1a975d87',
  proxyAdmin: '0x7FF8c50bdFC41eedba12f81FF6f49ae4F84c96C2',
  mailbox: '0x57529d3663bb44e8ab3335743dd42d2e1E3b46BA',
  interchainAccountRouter: '0x9d80DfCA188C5a3327f927b4c8f5B5D3bb006Bca',
  interchainAccountIsm: '0x665D8B4818e5674639852585D9Fd4889Ca009eFC',
  validatorAnnounce: '0xb07Af962F2046185DF848DAD5061D32eF04EbC38',
  testRecipient: '0x54484aC0eB76C22F038e1EF92c585fF3A377231c',
  protocolFee: '0x5a3Fe91ea1b337baF23aca05606A6c1D05D270E8',
  merkleTreeHook: '0x87b863A6A0d841F2949f03016c306f4b9d346feD',
  interchainGasPaymaster: '0x5CBf4e70448Ed46c2616b04e9ebc72D29FF0cfA9'
} as const;

const TangleTestnetAddresses: Partial<HyperlaneAddressesType> = {
  domainRoutingIsmFactory: '0x8822Df6071d8db08e62cf2BfEbb4ec698a6118A0',
  interchainAccountIsm: '0x46BdA7969f78c23802b80Fb10DaF50B1949B76fD',
  interchainAccountRouter: '0x996AF1d2888f24B2c6b9304E71a02A75efc25E9C',
  mailbox: '0x0FDc2400B5a50637880dbEfB25d631c957620De8',
  proxyAdmin: '0x526c2fC4cCC194570ED160bC6B1e1211c577A76c',
  staticAggregationHookFactory: '0x56E0d8D26144b5E97Fbfd0462B8DCb0F1E3a0628',
  staticAggregationIsmFactory: '0x4eb63FfcA8467e8779e3075D61E8261C982F7943',
  staticMerkleRootMultisigIsmFactory:
    '0x541A17B1a99b5CC5C5f8A988B31339Ff2F228690',
  staticMerkleRootWeightedMultisigIsmFactory:
    '0xDbCad8F8648AE9A2977E97d8821E0e813Bf2Df6B',
  staticMessageIdMultisigIsmFactory:
    '0x62c7b864f1751052004a69Cd8dff6a246DbFA627',
  staticMessageIdWeightedMultisigIsmFactory:
    '0x1b2FA712be75D74E0D2758506221Ba8750e6AbDC',
  testRecipient: '0x18f8DD0825e002a3e2224de41c558d3A819Cdc76',
  validatorAnnounce: '0x9FBC5ED24d7a3dea193cE9Ddd44e56236c8e5D86',
  protocolFee: '0xff38FeF8b08e11E778C8dB1400Ecf33E80d2FDAc',
  merkleTreeHook: '0x7aF2ABc39d93150c91bb414da72443e2Fe7A9127',
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
 */
export const HyperlaneAddresses = {
  [HyperlaneChainEnum.Holesky]: HoleskyAddresses,
  [HyperlaneChainEnum.TangleTestnet]: TangleTestnetAddresses,
  [HyperlaneChainEnum.TangleMainnet]: TangleMainnetAddresses
} as const satisfies Record<
  HyperlaneChainEnum,
  Partial<HyperlaneAddressesType>
>;
