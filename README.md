# @tangle-network/evm-contract-metadata

This package contains the EVM contract addresses, bridge contracts, and configs, along with token addresses.

## Installation

To install this package, run:

```bash
yarn add @tangle-network/evm-contract-metadata
```

## Usage

You can import the following addresses, types, and configs from this package:

```typescript
import {
  HyperlaneAddresses,
  HyperlaneAddressesType,
  HyperlaneChains,
  HyperlaneChainEnum,
  HyperlaneWarpRouteConfig,
  HyperlaneWarpRouteWhitelist,
  EVMTokens,
  EVMTokenEnum,
  EVMChainEnum
} from '@tangle-network/evm-contract-metadata';
```

- `HyperlaneAddresses` - Hyperlane contract addresses deployed by the Tangle Network. Contains core Hyperlane addresses like mailbox, IGP, router contracts, etc.
- `HyperlaneChains` - List of chains on which the Tangle Network has deployed Hyperlane contracts.
- `HyperlaneWarpRouteConfig` - Warp routes deployed by the Tangle Network used by the Tangle bridge dApp.
- `HyperlaneWarpRouteWhitelist` - List of warp route IDs whitelisted for use by the Tangle bridge dApp.
- `EVMTokens` - Object that maps EVM chains to the object containing different token addresses.

## Development

To run this package locally:

1. Clone the repository:

```bash
git clone https://github.com/tangle-network/evm-contract-metadata.git
```

2. Install dependencies:

```bash
yarn install
```

3. Build the package:

```bash
yarn build
```

4. Run tests:

```bash
yarn test
```

## Follow Tangle Network

- [Website](https://www.tangle.tools/)
- [X (Twitter)](https://x.com/tangle_network)
- [Telegram](https://t.me/tanglenet)
- [Discord](https://discord.gg/cv8EfJu3Tn)
