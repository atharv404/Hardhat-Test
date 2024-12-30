import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris"
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;