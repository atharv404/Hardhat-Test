import { ethers } from "hardhat";
import * as hre from "hardhat";

// LayerZero Endpoints
const LZ_ENDPOINTS = {
  ethereum: {
    mainnet: "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675",
    testnet: "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA", // Goerli
  },
  bsc: {
    mainnet: "0x3c2269811836af69497E5F486A85D7316753cf62",
    testnet: "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1",
  },
  polygon: {
    mainnet: "0x3c2269811836af69497E5F486A85D7316753cf62",
    testnet: "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
  }
};

// Token addresses per network
const TOKENS = {
  ethereum: {
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    FIBO: "", // Add your token address
    ORIO: "", // Add your token address
  },
  bsc: {
    USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    USDT: "0x55d398326f99059fF775485246999027B3197955",
    FIBO: "", // Add your token address
    ORIO: "", // Add your token address
  },
  polygon: {
    USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    USDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    FIBO: "", // Add your token address
    ORIO: "", // Add your token address
  }
};

async function main() {
  const network = process.env.HARDHAT_NETWORK || "ethereum";
  const isTestnet = process.env.TESTNET === "true";

  console.log(`Deploying to ${network} ${isTestnet ? 'testnet' : 'mainnet'}...`);

  // Get LayerZero endpoint
  const lzEndpoint = isTestnet 
    ? LZ_ENDPOINTS[network as keyof typeof LZ_ENDPOINTS].testnet 
    : LZ_ENDPOINTS[network as keyof typeof LZ_ENDPOINTS].mainnet;

  // Deploy FeeManager
  const FeeManager = await ethers.getContractFactory("FeeManager");
  const feeManager = await FeeManager.deploy(
    TOKENS[network as keyof typeof TOKENS].FIBO,
    TOKENS[network as keyof typeof TOKENS].ORIO
  );
  await feeManager.deployed();
  console.log(`FeeManager deployed to: ${feeManager.address}`);

  // Deploy TokenPool
  const TokenPool = await ethers.getContractFactory("TokenPool");
  const tokenPool = await TokenPool.deploy(
    feeManager.address,
    lzEndpoint,
    TOKENS[network as keyof typeof TOKENS].USDC,
    TOKENS[network as keyof typeof TOKENS].USDT
  );
  await tokenPool.deployed();
  console.log(`TokenPool deployed to: ${tokenPool.address}`);

  // Verify contracts
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying contracts...");
    await hre.run("verify:verify", {
      address: feeManager.address,
      constructorArguments: [
        TOKENS[network as keyof typeof TOKENS].FIBO,
        TOKENS[network as keyof typeof TOKENS].ORIO
      ],
    });

    await hre.run("verify:verify", {
      address: tokenPool.address,
      constructorArguments: [
        feeManager.address,
        lzEndpoint,
        TOKENS[network as keyof typeof TOKENS].USDC,
        TOKENS[network as keyof typeof TOKENS].USDT
      ],
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});