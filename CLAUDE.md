# Portfolio Site — Claude Code Context

## Commands

```bash
yarn dev              # Start dev server (localhost:3000)
yarn build            # Production build (also runs tsc)
yarn test             # Run Jest tests
yarn lint             # Biome lint + format check (zero errors required, warnings OK)
yarn lint:fix         # Auto-fix lint and format issues
yarn format           # Format all files with Biome
npx tsc --noEmit      # Type-check only (strict mode enabled)
```

## Tech Stack

- **Framework:** Next.js 14.2 (Pages Router, NOT App Router)
- **Language:** TypeScript 5.x (strict mode)
- **Styling:** styled-components 5.3 (CSS-in-JS)
- **UI Library:** Grommet 2.33 (used for tool pages)
- **React:** 18.2
- **Package Manager:** Yarn 3.6.1 (zero-installs, .yarn/cache is committed)
- **Linting/Formatting:** Biome (single tool, replaces ESLint + Prettier)
- **Testing:** Jest + Testing Library
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel
- **Node:** >= 20 (see .nvmrc)

## Coding Guidelines

- Use styled-components for all styling (match existing pattern)
- Reference CSS variables: `var(--white)`, `var(--dark)`, `var(--highlight)`, `var(--darkgrey)`
- Responsive breakpoints: `max-width: 600px` (mobile), `min-width: 992px` (desktop)
- Pages Router only (not App Router)
- TypeScript strict mode — no implicit any, no unchecked index access
- No emojis in code
- Use Viem types where applicable (`Address`, `Hex`, `Hash`)
- Handle loading/error states explicitly
- Use BigInt for all token amounts (never Number)
- Keep Roboto Mono font and dark theme consistent

## Project Overview

Personal portfolio and developer toolkit for Luis Filipe Goncalves. Hosted on Vercel at https://lgo.vercel.app.

Currently has: bio, experience timeline (Anchorage Digital, Farfetch, TAIKAI, Euronext, Edigma, VicomTech), social links, and developer tools (URL encoder/decoder, Base64 encoder/decoder, Prettier formatter).

## Design System

- **Theme:** Dark mode only
- **Background:** `#0d0d0d` (`--dark`)
- **Text:** `#e0e0e0` (`--white`)
- **Accent/Highlight:** `#0000ff` (`--highlight`)
- **Secondary text:** `#707070` (`--darkgrey`)
- **Font:** "Roboto Mono" monospace, 1rem, line-height 1.75rem
- **Links:** White text with bottom border, blue underline on hover, 0.2s transition
- **Layout:** Responsive grid (single column mobile, `1fr 3fr` desktop with sidebar)
- **Sections:** Separated by `margin-top: 6rem`

## Project Structure

```
lgo/
├── pages/
│   ├── _app.tsx              # ThemeProvider + GlobalStyle + Vercel Analytics
│   ├── _document.tsx         # SSR styled-components setup
│   ├── index.tsx             # Homepage (ProfileSection + IntroSection + TrustedBy + Tools + Experience)
│   ├── urldecoder.tsx        # URL decode tool
│   ├── urlencoder.tsx        # URL encode tool
│   ├── base64decoder.tsx     # Base64 decode tool
│   ├── base64encoder.tsx     # Base64 encode tool
│   └── prettier/[[...params]].tsx  # Prettier formatter (JSON, YAML, CSS, HTML, TS, GraphQL)
├── components/
│   ├── globalstyles.tsx      # CSS variables, base styles, link hover effects
│   ├── common/
│   │   ├── site-head.tsx     # <Head> meta tags
│   │   ├── header.tsx        # Section title (h1, blue highlight)
│   │   ├── sections.tsx      # Reusable section wrapper
│   │   ├── svg-icon.tsx      # Icon renderer
│   │   └── grommet-container.tsx  # Grommet theme wrapper for tool pages
│   ├── profile-section/      # Name, role, social icons (sidebar)
│   ├── intro-section/        # Bio paragraph
│   ├── trusted-section/      # Company logos grid
│   ├── experience-section/   # Work experience timeline
│   ├── tools-section/        # Developer tools list
│   ├── url-tools/            # Shared form for URL encoder/decoder
│   └── prettier/             # Parser select dropdown
├── utils/prettier/           # Prettier formatting logic + base64 utils
├── __mocks__/                # Jest mocks for CSS and static assets
├── public/organizations/     # Company logos
├── biome.json                # Biome config (lint + format)
├── next.config.js            # env vars, styledComponents: true
├── jest.config.js            # Jest config
└── tsconfig.json             # TypeScript strict config
```

## Patterns

### Adding a new tool page
1. Add entry to the `tools` array in `components/tools-section/tool-list.tsx`
2. Create page in `pages/[toolname].tsx`
3. Wrap with `GrommetContainer` for input/output tools, or use raw styled-components
4. Follow existing pattern: `useState` for input, computed output, two textareas

### Environment variables (in next.config.js)
- `fullName`: "Luis Filipe Goncalves"
- `role`: "Software Engineer"
- `twitterProfile`, `githubProfile`, `linkedinProfile`

---

## Current Task: Wallet Playground (`/wallet`)

See `wallet-playground-plan.md` for the full detailed plan.

### What it is
An interactive `/wallet` page where visitors can connect their browser wallet (MetaMask, Phantom, Trust Wallet, Coinbase), view multichain balances, sign messages, verify signatures, and see wallet API calls in real-time.

### Why
Luis is preparing for a **Senior Frontend Engineer role at Mesh** (crypto payments company). The role requires mastery of: self-custody wallet APIs, Wagmi, WalletConnect, Ethers.js, and Viem. This project demonstrates all of these skills on a live portfolio site.

### New dependencies needed
```
wagmi                          -- React hooks for wallet connection, balances, signing
viem                           -- Chain interactions, signature verification
@tanstack/react-query          -- Async state (required by Wagmi)
@reown/appkit                  -- WalletConnect for mobile wallet fallback
@solana/web3.js                -- Solana balance reads (stretch goal)
@solana/wallet-adapter-react   -- Solana wallet connection (stretch goal)
```

### Implementation order
1. Wagmi + Reown setup (providers scoped to /wallet only, don't break existing pages)
2. Wallet detection (EIP-6963) & connection
3. Multichain balances (ETH across Ethereum, Base, Arbitrum, Polygon, Optimism + ERC20 tokens)
4. Message signing & verification (personal_sign + Viem verifyMessage)
5. EIP-712 typed data signing
6. Chain switching
7. Test transactions (testnet only)
8. RPC Inspector (live feed of wallet calls)
9. Solana support (stretch)

### Key constraint
The wallet page uses Wagmi/React Query providers, but these must be scoped to the `/wallet` route only. The existing pages (homepage, URL tools, Prettier) must remain untouched and not load any crypto dependencies.

---

## Background Context

### Crypto Mastery Plan
Luis created a 7-phase learning plan (see `../substream/crypto-mastery-plan.md`):

| Phase | Topic | Status |
|-------|-------|--------|
| 1 | Viem (CLI explorer) | Done |
| 2 | Ethers.js (side-by-side comparison) | Done |
| 3 | WalletConnect (raw Sign Client) | Replaced by Wallet Playground |
| 4 | Wagmi (DeFi dashboard) | Replaced by Wallet Playground |
| 5 | Self-custody wallet APIs | Replaced by Wallet Playground |
| 6 | Multichain transfers | Partially covered by Wallet Playground |
| 7 | Mesh Pay Lite (capstone) | Not started |

### Key learnings from POCs
- **Viem vs Ethers:** Viem is technically superior (type safety from ABIs, tree-shakeable, 3x smaller bundle, better errors). Ethers still exists in legacy codebases and Hardhat.
- **Viem uses bigint everywhere** (block numbers, timestamps, balances). Ethers uses number for block numbers/timestamps.
- **Viem has built-in ABIs** (`erc20Abi`). Ethers requires you to define your own.

### Mesh Role Context
Mesh is a crypto payments company. Their product connects to 300+ wallets and exchanges. The Senior Frontend Engineer role requires:
- Self-custody wallet API expertise (EIP-1193, EIP-6963)
- Wagmi and WalletConnect integration
- Viem and Ethers.js fluency
- Multichain support (EVM + Solana + more)
- Understanding of wallet signing methods (personal_sign, eth_signTypedData_v4)
