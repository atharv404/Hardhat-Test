import { expect } from "chai";
import { setupTest, toWei } from "./helpers";

describe("FeeManager", function() {
    describe("1. Initialization", function() {
        it("Should set correct initial values", async function() {
            const { feeManager, fiboToken, orioToken } = await setupTest();
            
            expect(await feeManager.baseFee()).to.equal(100); // 1%
            expect(await feeManager.discountedFee()).to.equal(50); // 0.5%
            expect(await feeManager.FIBO_TOKEN()).to.equal(fiboToken.address);
            expect(await feeManager.ORIO_TOKEN()).to.equal(orioToken.address);
        });
    });

    describe("2. Fee Calculations", function() {
        it("Should calculate standard fee correctly", async function() {
            const { feeManager, user1 } = await setupTest();
            const amount = toWei(1000);
            
            const fee = await feeManager.calculateFee(user1.address, amount);
            expect(fee).to.equal(amount.mul(100).div(10000)); // 1%
        });

        it("Should apply FIBO discount correctly", async function() {
            const { feeManager, fiboToken, user1 } = await setupTest();
            const amount = toWei(1000);
            
            // Give user enough FIBO tokens
            await fiboToken.mint(user1.address, toWei(100000, 18));
            
            const fee = await feeManager.calculateFee(user1.address, amount);
            expect(fee).to.equal(amount.mul(50).div(10000)); // 0.5%
        });

        it("Should apply ORIO discount correctly", async function() {
            const { feeManager, orioToken, user1 } = await setupTest();
            const amount = toWei(1000);
            
            // Give user enough ORIO tokens
            await orioToken.mint(user1.address, toWei(10000000, 18));
            
            const fee = await feeManager.calculateFee(user1.address, amount);
            expect(fee).to.equal(amount.mul(50).div(10000)); // 0.5%
        });
    });

    describe("3. Admin Functions", function() {
        it("Should update fees correctly", async function() {
            const { feeManager } = await setupTest();
            
            await feeManager.setFees(150, 75); // 1.5% and 0.75%
            
            expect(await feeManager.baseFee()).to.equal(150);
            expect(await feeManager.discountedFee()).to.equal(75);
        });

        it("Should fail when non-admin tries to update fees", async function() {
            const { feeManager, user1 } = await setupTest();
            
            await expect(
                feeManager.connect(user1).setFees(150, 75)
            ).to.be.reverted;
        });

        it("Should update discount token thresholds", async function() {
            const { feeManager, fiboToken } = await setupTest();
            const newThreshold = toWei(200000, 18);
            
            await feeManager.updateDiscountTokenThreshold(fiboToken.address, newThreshold);
            
            const discountToken = await feeManager.discountTokens(fiboToken.address);
            expect(discountToken.minimumBalance).to.equal(newThreshold);
        });
    });

    describe("4. Emergency Controls", function() {
        it("Should pause and unpause correctly", async function() {
            const { feeManager } = await setupTest();
            
            await feeManager.togglePause();
            expect(await feeManager.paused()).to.be.true;
            
            await feeManager.togglePause();
            expect(await feeManager.paused()).to.be.false;
        });

        it("Should not allow fee updates when paused", async function() {
            const { feeManager } = await setupTest();
            
            await feeManager.togglePause();
            
            await expect(
                feeManager.setFees(150, 75)
            ).to.be.revertedWith("Pausable: paused");
        });
    });
});