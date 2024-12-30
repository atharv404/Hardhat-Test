let tokenPool, usdc;

beforeEach(async () => {
  const USDC = await ethers.getContractFactory("USDC");
  const TokenPool = await ethers.getContractFactory("TokenPool");

  usdc = await USDC.deploy();
  await usdc.deployed(); // Ensure deployment is awaited

  tokenPool = await TokenPool.deploy(usdc.address); // Pass USDC address as argument
  await tokenPool.deployed();
});

it("Should set correct initial values", async () => {
  const poolToken = await tokenPool.usdcToken();
  expect(poolToken).to.equal(usdc.address);
});
