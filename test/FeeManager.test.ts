import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { FeeManager, TestToken } from "../typechain-types";
import { Contract } from "ethers";

describe("FeeManager", function () {
  let feeManager: FeeManager;
  let fiboToken: Contract;
  let orioToken: Contract;
  let owner: SignerWithAddress;
  let user: SignerWithAddress;
  let admin: SignerWithAddress;

  beforeEach(async function () {
    [owner, user, admin] = await ethers.getSigners();

    // Deploy test tokens
    const TestToken = await ethers.getContractFactory("TestToken");
    fiboToken = await TestToken.deploy("FIBO", "FIBO", 18);
    await fiboToken.deployed();
    orioToken = await TestToken.deploy("ORIO", "ORIO", 18);
    await orioToken.deployed();

    // Deploy FeeManager
    const FeeManager = await ethers.getContractFactory("FeeManager");
    feeManager = await FeeManager.deploy(fiboToken.address, orioToken.address);
    await feeManager.deployed();

    // Grant admin role
    const ADMIN_ROLE = await feeManager.ADMIN_ROLE();
    await feeManager.grantRole(ADMIN_ROLE, admin.address);
  });

  describe("Initialization", function () {
    it("Should set correct initial values", async function () {
      expect(await feeManager.FIBO_TOKEN()).to.equal(fiboToken.address);
      expect(await feeManager.ORIO_TOKEN()).to.equal(orioToken.address);
      expect(await feeManager.baseFee()).to.equal(100);
      expect(await feeManager.discountedFee()).to.equal(50);
    });
  });

  describe("Fee Calculation", function () {
    it("Should calculate standard fee correctly", async function () {
      const amount = ethers.utils.parseUnits("1000", 6);
      const fee = await feeManager.calculateFee(user.address, amount);
      expect(fee).to.equal(amount.mul(100).div(10000)); // 1%
    });

    it("Should calculate discounted fee for FIBO holders", async function () {
      const amount = ethers.utils.parseUnits("1000", 6);
      await fiboToken.mint(user.address, ethers.utils.parseEther("100000")); // 100k FIBO
      const fee = await feeManager.calculateFee(user.address, amount);
      expect(fee).to.equal(amount.mul(50).div(10000)); // 0.5%
    });
  });

  describe("Fee Management", function () {
    it("Should process fees correctly", async function () {
      const amount = ethers.utils.parseUnits("10", 6);
      await feeManager.processFee(fiboToken.address, amount);
      expect(await feeManager.collectedFees(fiboToken.address)).to.equal(amount);
    });

    it("Should allow admin to withdraw fees", async function () {
      const amount = ethers.utils.parseUnits("10", 6);
      await feeManager.processFee(fiboToken.address, amount);
      await fiboToken.mint(feeManager.address, amount);

      await expect(
        feeManager.connect(admin).withdrawFees(fiboToken.address, admin.address, amount)
      ).to.not.be.reverted;
    });
  });

  describe("Admin Functions", function () {
    it("Should allow admin to update fees", async function () {
      await feeManager.connect(admin).setFees(200, 100);
      expect(await feeManager.baseFee()).to.equal(200);
      expect(await feeManager.discountedFee()).to.equal(100);
    });

    it("Should allow admin to update discount thresholds", async function () {
      const newThreshold = ethers.utils.parseEther("200000");
      await feeManager.connect(admin).updateDiscountTokenThreshold(fiboToken.address, newThreshold);
      const discountToken = await feeManager.discountTokens(fiboToken.address);
      expect(discountToken.minimumBalance).to.equal(newThreshold);
    });

    it("Should toggle pause state", async function () {
      await feeManager.connect(admin).togglePause();
      expect(await feeManager.paused()).to.be.true;
      await feeManager.connect(admin).togglePause();
      expect(await feeManager.paused()).to.be.false;
    });
  });
});