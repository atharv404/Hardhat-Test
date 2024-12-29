import { expect } from "chai";
import { ethers } from "hardhat";
import { TestToken } from "../typechain-types";

describe("TestToken", function () {
  let testToken: TestToken;

  beforeEach(async function () {
    const TestToken = await ethers.getContractFactory("TestToken");
    testToken = await TestToken.deploy("Test Token", "TTK", 18);
    await testToken.deployed();
  });

  describe("Initialization", function () {
    it("Should set correct initial values", async function () {
      expect(await testToken.name()).to.equal("Test Token");
      expect(await testToken.symbol()).to.equal("TTK");
      expect(await testToken.decimals()).to.equal(18);
    });
  });

  describe("Minting", function () {
    it("Should mint tokens correctly", async function () {
      const [owner, user] = await ethers.getSigners();
      const amount = ethers.utils.parseUnits("1000", 18);
      await testToken.mint(user.address, amount);
      expect(await testToken.balanceOf(user.address)).to.equal(amount);
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens correctly", async function () {
      const [owner, user] = await ethers.getSigners();
      const amount = ethers.utils.parseUnits("1000", 18);
      await testToken.mint(owner.address, amount);
      await testToken.transfer(user.address, amount);
      expect(await testToken.balanceOf(user.address)).to.equal(amount);
      expect(await testToken.balanceOf(owner.address)).to.equal(0);
    });

    it("Should approve and transfer tokens correctly", async function () {
      const [owner, user] = await ethers.getSigners();
      const amount = ethers.utils.parseUnits("1000", 18);
      await testToken.mint(owner.address, amount);
      await testToken.approve(user.address, amount);
      await testToken.connect(user).transferFrom(owner.address, user.address, amount);
      expect(await testToken.balanceOf(user.address)).to.equal(amount);
      expect(await testToken.balanceOf(owner.address)).to.equal(0);
    });
  });
});