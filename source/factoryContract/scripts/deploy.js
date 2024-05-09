// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  const accountAddr = await deployer.getAddress();
  console.log(
    "Deploying the contracts with the account:",
    accountAddr
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const WBNB = await ethers.getContractFactory("WBNB");
  const wbnb = await WBNB.deploy();
  await wbnb.deployed();
  console.log("wbnb address:", wbnb.address);

  const LPToken = await ethers.getContractFactory("PancakeERC20");
  const lpToken = await LPToken.deploy();
  await lpToken.deployed();
  console.log("lpToken address:", lpToken.address);

  const PancakeFactory = await ethers.getContractFactory("PancakeFactory");
  const pancakeFactory = await PancakeFactory.deploy(accountAddr);
  await pancakeFactory.deployed();
  console.log("pancakeFactory address:", pancakeFactory.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendAddressFiles(wbnb, lpToken, pancakeFactory);
  saveFrontendABIFiles();
}

function saveFrontendAddressFiles(wbnb, lpToken, pancakeFactory) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ WBNB: wbnb.address, PrinceLP: lpToken.address, PancakeFactory: pancakeFactory.address}, undefined, 2)
  );
}

function saveFrontendABIFiles() {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  const wbnbArtifact = artifacts.readArtifactSync("WBNB");
  fs.writeFileSync(
    path.join(contractsDir, "WBNB.json"),
    JSON.stringify(wbnbArtifact, null, 2)
  );

  const pancakeERC20Artifact = artifacts.readArtifactSync("PancakeERC20");
  fs.writeFileSync(
    path.join(contractsDir, "PancakeERC20.json"),
    JSON.stringify(pancakeERC20Artifact, null, 2)
  );

  const pancakeFactoryArtifact = artifacts.readArtifactSync("PancakeFactory");
  fs.writeFileSync(
    path.join(contractsDir, "PancakeFactory.json"),
    JSON.stringify(pancakeFactoryArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
