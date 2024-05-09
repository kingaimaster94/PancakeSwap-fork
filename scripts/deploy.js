// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");
const fs = require("fs").promises;

async function readFrontendAddressFiles() {
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");
  const jsonFile = path.join(contractsDir, "contract-address.json");
  console.log("jsonFile: ", jsonFile);
  
  try {
    const data = await fs.readFile(jsonFile, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    return null;
  }
}

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    );
  }

  const json = await readFrontendAddressFiles();
  console.log("json: ", json);

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  const accountAddr = await deployer.getAddress();
  console.log(
    "Deploying the contracts with the account:",
    accountAddr
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  const pancakeRouter = await PancakeRouter.deploy(json.PancakeFactory, json.WBNB);
  await pancakeRouter.deployed();
  console.log("pancakeRouter address:", pancakeRouter.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendAddressFiles(json, pancakeRouter);
  saveFrontendABIFiles();
}

function saveFrontendAddressFiles(json, pancakeRouter) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ WBNB: json.WBNB, PancakeFactory: json.PancakeFactory, PrinceLP: json.PrinceLP, PancakeRouter: pancakeRouter.address}, undefined, 2)
  );
}

function saveFrontendABIFiles() {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  const pancakeRouterArtifact = artifacts.readArtifactSync("PancakeRouter");
  fs.writeFileSync(
    path.join(contractsDir, "PancakeRouter.json"),
    JSON.stringify(pancakeRouterArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
