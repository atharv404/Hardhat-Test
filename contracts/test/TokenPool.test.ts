import { expect } from "chai";
import { ethers } from "hardhat";
import { setupTest, toWei, CHAIN_IDS } from "./helpers";

describe("TokenPool", function() {
  describe("1. Deployment & Setup", function() {
    it("Should deploy with correct initial state", async function() {
      const { tokenPool, feeManager, owner } = await setupTest();
      
      expect(await tokenPool.feeManager()).to.equal(feeManager.address);
      expect(await tokenPool.hasRole(await tokenPool.ADMIN_ROLE(), owner.address)).to.be.true;
    });
  });

  describe("2. Token Management", function() {
    it("Should add supported token", async function() {
      const { tokenPool, usdc, owner } = await setupTest();
      
      await tokenPool.addSupportedToken(usdc.address);
      expect(await tokenPool.isTokenSupported(usdc.address)).to.be.true;
    });

    it("Should fail if non-admin tries to add token", async function() {
      const { tokenPool, usdc, user1 } = await setupTest();
      
      await expect(
        tokenPool.connect(user1).addSupportedToken(usdc.address)
      ).to.be.reverted;
    });
  });

  describe("3. Liquidity Management", function() {
    it("Should add liquidity correctly", async function() {
      const { tokenPool, usdc, owner } = await setupTest();
      const amount = toWei(1000);

      await tokenPool.addSupportedToken(usdc.address);
      await usdc.approve(tokenPool.address, amount);
      await tokenPool.addLiquidity(usdc.address, amount);

      expect(await tokenPool.getPoolBalance(usdc.address)).to.equal(amount);
    });

    it("Should remove liquidity correctly", async function() {
      const { tokenPool, usdc, owner } = await setupTest();
      const amount = toWei(1000);

      await tokenPool.addSupportedToken(usdc.address);
      await usdc.approve(tokenPool.address, amount);
      await tokenPool.addLiquidity(usdc.address, amount);
      await tokenPool.removeLiquidity(usdc.address, amount);

      expect(await tokenPool.getPoolBalance(usdc.address)).to.equal(0);
    });
  });

  describe("4. Fee Management", function() {
    it("Should calculate fees correctly", async function() {
      const { tokenPool, feeManager, user1 } = await setupTest();
      const amount = toWei(1000);

      const fee = await feeManager.calculateFee(user1.address, amount);
      expect(fee).to.equal(amount.mul(100).div(10000)); // 1% fee
    });
  });

  describe("5. Cross-Chain Swaps", function() {
    it("Should initiate swap correctly", async function() {
      const { tokenPool, usdc, user1 } = await setupTest();
      const amount = toWei(100);

      // Setup
      await tokenPool.addSupportedToken(usdc.address);
      await usdc.transfer(user1.address, amount);
      await usdc.connect(user1).approve(tokenPool.address, amount);

      // Initiate swap
      await expect(
        tokenPool.connect(user1).initiateSwap(
          usdc.address,
          amount,
          CHAIN_IDS.BSC,
          user1.address
        )
      ).to.emit(tokenPool, "SwapInitiated");
    });
  });

  describe("6. Transaction Limits", function() {
    it("Should enforce maximum transaction amount", async function() {
      const { tokenPool, usdc, user1 } = await setupTest();
      const amount = toWei(2000000); // Above default max

      await tokenPool.addSupportedToken(usdc.address);
      await usdc.transfer(user1.address, amount);
      await usdc.connect(user1).approve(tokenPool.address, amount);

      await expect(
        tokenPool.connect(user1).initiateSwap(
          usdc.address,
          amount,
          CHAIN_IDS.BSC,
          user1.address
        )
      ).to.be.revertedWithCustomError(tokenPool, "InvalidAmount");
    });
  });

  describe("7. Emergency Controls", function() {
    it("Should pause and unpause correctly", async function() {
      const { tokenPool, owner } = await setupTest();

      await tokenPool.togglePause();
      expect(await tokenPool.paused()).to.be.true;

      await tokenPool.togglePause();
      expect(await tokenPool.paused()).to.be.false;
    });
  });
});