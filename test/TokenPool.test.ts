import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TokenPool, FeeManager } from "../typechain-types";
import { Contract } from "ethers";

describe("TokenPool", function () {
  let tokenPool: TokenPool;
  let feeManager: FeeManager;
  let usdc: Contract;
  let usdt: Contract;
  let owner: SignerWithAddress;
  let user: SignerWithAddress;
  let admin: SignerWithAddress;
  let lzEndpoint: SignerWithAddress;

  beforeEach(async function () {
    [owner, user, admin, lzEndpoint] = await ethers.getSigners();

    // Deploy test tokens
    const TestToken = await ethers.getContractFactory("TestToken");
    usdc = await TestToken.deploy("USDC", "USDC", 6);
    await usdc.deployed();
    usdt = await TestToken.deploy("USDT", "USDT", 6);
    await usdt.deployed();

    // Deploy FeeManager
    const FeeManager = await ethers.getContractFactory("FeeManager");
    feeManager = await FeeManager.deploy(owner.address, owner.address);
    await feeManager.deployed();

    // Deploy TokenPool
    const TokenPool = await ethers.getContractFactory("TokenPool");
    tokenPool = await TokenPool.deploy(feeManager.address, lzEndpoint.address, usdc.address, usdt.address);
    await tokenPool.deployed();

    // Grant admin role
    const ADMIN_ROLE = await tokenPool.ADMIN_ROLE();
    await tokenPool.grantRole(ADMIN_ROLE, admin.address);

    // Mint tokens for testing
    await usdc.mint(owner.address, ethers.utils.parseUnits("1000000", 6));
    await usdt.mint(owner.address, ethers.utils.parseUnits("1000000", 6));
    await usdc.mint(user.address, ethers.utils.parseUnits("10000", 6));
    await usdt.mint(user.address, ethers.utils.parseUnits("10000", 6));

    // Approve tokens
    await usdc.approve(tokenPool.address, ethers.constants.MaxUint256);
    await usdt.approve(tokenPool.address, ethers.constants.MaxUint256);
    await usdc.connect(user).approve(tokenPool.address, ethers.constants.MaxUint256);
    await usdt.connect(user).approve(tokenPool.address, ethers.constants.MaxUint256);
  });

  describe("Initialization", function () {
    it("Should set correct initial values", async function () {
      expect(await tokenPool.SUPPORTED_TOKEN_1()).to.equal(usdc.address);
      expect(await tokenPool.SUPPORTED_TOKEN_2()).to.equal(usdt.address);
      expect(await tokenPool.feeManager()).to.equal(feeManager.address);
    });
  });

  describe("Liquidity Management", function () {
    it("Should allow admin to add liquidity", async function () {
      const amount = ethers.utils.parseUnits("1000", 6);
      await tokenPool.connect(admin).addLiquidity(usdc.address, amount);
      expect(await tokenPool.getPoolBalance(usdc.address)).to.equal(amount);
    });

    it("Should allow admin to remove liquidity", async function () {
      const amount = ethers.utils.parseUnits("1000", 6);
      await tokenPool.connect(admin).addLiquidity(usdc.address, amount);
      await tokenPool.connect(admin).removeLiquidity(usdc.address, amount);
      expect(await tokenPool.getPoolBalance(usdc.address)).to.equal(0);
    });
  });

  describe("Swap Functions", function () {
    it("Should initiate swap correctly", async function () {
      const amount = ethers.utils.parseUnits("100", 6);
      
      await expect(
        tokenPool.connect(user).initiateSwap(
          usdc.address,
          amount,
          2, // Mock destination chain
          user.address,
          { value: ethers.utils.parseEther("0.1") } // Mock LZ fee
        )
      ).to.emit(tokenPool, "SwapInitiated");
    });
  });

  describe("Admin Functions", function () {
    it("Should allow admin to set max transaction amount", async function () {
      const maxAmount = ethers.utils.parseUnits("5000", 6);
      await tokenPool.connect(admin).setMaxTransactionAmount(usdc.address, maxAmount);
      expect(await tokenPool.maxTransactionAmount(usdc.address)).to.equal(maxAmount);
    });

    it("Should allow admin to set trusted remote", async function () {
      const remoteChainId = 1;
      const remoteAddress = ethers.constants.AddressZero;
      await tokenPool.connect(admin).setTrustedRemote(remoteChainId, remoteAddress, true);
      expect(await tokenPool.trustedRemoteAddresses(remoteChainId, remoteAddress)).to.be.true;
    });

    it("Should toggle pause state", async function () {
      await tokenPool.connect(admin).togglePause();
      expect(await tokenPool.paused()).to.be.true;
      await tokenPool.connect(admin).togglePause();
      expect(await tokenPool.paused()).to.be.false;
    });
  });
});