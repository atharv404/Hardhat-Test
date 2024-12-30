module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
    await deploy("Usdc", {
      from: deployer,
      log: true,
    });
  };
  