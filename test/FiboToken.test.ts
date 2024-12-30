import { ethers } from "hardhat";
import { expect } from "chai";

describe("FiboToken", function () {
  let fiboToken: any;

  beforeEach(async () => {
    const FiboToken = await ethers.getContractFactory("FiboToken");
    fiboToken = await FiboToken.deploy(); // Deploy the contract
    await fiboToken.deployed(); // Ensure deployment completes
  });

  it("Should have a correct initial supply", async () => {
    const totalSupply = await fiboToken.totalSupply();
    expect(totalSupply).to.equal(ethers.utils.parseEther("1000000")); // Replace with the expected value
  });
});
