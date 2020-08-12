

// ============ Contracts ============

// Governance
// deployed third
const SaviorGov = artifacts.require("GovernorAlpha");
const Timelock = artifacts.require("Timelock");



// ============ Main Migration ============

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    deploySaveGovernance(deployer, network),
  ]);
};

module.exports = migration;


async function deploySaveGovernance(deployer, network) {
  await deployer.deploy(SaviorGov);
}
