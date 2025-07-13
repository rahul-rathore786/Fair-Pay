const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // get account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);
  // get balance
  console.log("Account balance:", (await deployer.getBalance()).toString());
  // Deploy USDT contract
  const USDT = await ethers.getContractFactory("USDT");
  const usdt = await USDT.deploy();
  await usdt.deployed();

  // Deploy DappWorks contract
  const DappWorks = await ethers.getContractFactory("DappWorks");
  const dappworks = await DappWorks.deploy(usdt.address);
  await dappworks.deployed();

  const addresses = JSON.stringify(
    { DappWorks: dappworks.address, USDT: usdt.address },
    null,
    4
  );

  fs.writeFile("./src/abis/contractAddress.json", addresses, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Deployed contract addresses", addresses);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
