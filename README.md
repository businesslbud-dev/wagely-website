# Wagely ready-to-run prototype

## Start it
1. Install Node.js 20.9+ (Node 22/24 is fine).
2. Extract this folder somewhere convenient, e.g. Desktop\Wagely-Ready.
3. Open that extracted folder in VS Code.
4. In a Command Prompt terminal in that folder, run `npm install` and then `npm run dev`.
5. Open http://localhost:3000.

## Local blockchain
- Start the existing Hardhat node in your original Wagely/blockchain folder with `npx hardhat node`.
- Deploy the existing WageEscrow contract to localhost using your existing deployment script.
- If the contract address differs, update `lib/contract.ts`.
- Add MetaMask network: RPC `http://127.0.0.1:8545`, chain ID `31337`, currency ETH.
- Import a Hardhat development account into MetaMask for testing only. Never use Hardhat demo private keys on a real network.

## Prototype limitations
- Job listings and applications are saved to this browser's localStorage; this is not a production backend.
- Existing sample listings are illustrative and are not automatically present on-chain.
- The contract stores wage values in wei. The UI displays INR and uses a tiny demo conversion for transaction testing; this is not real INR settlement.
- Worker reviews are sample UI only because the supplied contract does not yet implement review functions.
- Disputes can be raised but remain frozen because the supplied contract has no dispute-resolution function.
- Auto-release can only succeed after the contract's 60-second timeout has passed.
