import { ethers, deployments } from "hardhat";
import { expect } from "chai";

describe("FeeManager", function () {
  let feeManager: any;
  let deployer: any;

  beforeEach(async () => {
    await deployments.fixture(); // Deploy all contracts
    feeManager = await ethers.getContract("FeeManager");
    [deployer] = await ethers.getSigners();
  });

  it("Should set correct initial fee percentage", async () => {
    const baseFee = await feeManager.baseFee();
    const discountedFee = await feeManager.discountedFee();

    expect(baseFee).to.equal(20); // 0.2%
    expect(discountedFee).to.equal(10); // 0.1%
  });
});
