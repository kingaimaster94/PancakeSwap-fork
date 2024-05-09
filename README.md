# PancakeSwap V2 fork
This is composed of governance token contract, factory contract, router contract.
You can test frontend using 'frontend' or 'frontend-web3'.
This is build, deploy, verify by using Hardhat.

# Build
cd contract
npx hardhat deploy ./scripts/deploy.ts --network bsctestnetwork
npx hardhat verify

# Frontend
This use ethers and Javescript.
cd frontend
npm run

# Frontend-web3
This use web3.js and Typescript.
cd frontend-web3
npm run
