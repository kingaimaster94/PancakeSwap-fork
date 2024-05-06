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
  const wbnb = json.WBNB;
  const pancakeFactory = json.PancakeFactory;
  const pancakeRouter = json.PancakeRouter;
  console.log(wbnb, pancakeFactory, pancakeRouter);
  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  const accountAddr = await deployer.getAddress();

  await run(`verify:verify`, {
    address: pancakeRouter,
    constructorArguments: [pancakeFactory, wbnb],
  });
  console.log("pancakeRouter verify:");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
