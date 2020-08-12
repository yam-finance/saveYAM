

// ============ Contracts ============

// Governance
// deployed third
const SaviorGov = artifacts.require("GovernorAlpha");



// ============ Main Migration ============

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    deploySaveGovernance(deployer, network),
  ]);
};

module.exports = migration;


async function deploySaveGovernance(deployer, network) {
  await deployer.deploy(SaviorGov, "0xae99ff8fe2236af5083ea979ecf1dbaa0efd07e3", "0x0e2298e3b3390e3b945a5456fbf59ecc3f55da16");
}
