/// RENAME to 3_save.js when ready to propose!



// ============ Contracts ============

// Governance
// deployed third
const SaviorGov = artifacts.require("GovernorAlpha");
const Timelock = artifacts.require("Timelock");



// ============ Main Migration ============

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    saveYAM(deployer, network),
  ]);
};

module.exports = migration;


async function saveYAM(deployer, network) {
  let curr_gov = "0x6abA376e3331E3090456495e8292ecdFA1ab4920"
  let gov = new web3.eth.Contract(SaviorGov.abi, curr_gov);
  gov.methods.propose(
      [
        "0xaE99fF8fe2236AF5083Ea979Ecf1DbAA0EFD07E3", "0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16"
      ],
      [0, 0],
      ["4dd18bf5", "fa8f3455"], // bytes4(keccak256(setPendingAdmin(address))), bytes4(keccak256(_setRebaser(address))),
      [
          SaviorGov.address,
          "0x0000000000000000000000000000000000000000"
      ],
      "Save YAM. Decrease quorum & threshold to static amounts, Remove rebasing."
  ).send({from: "0x683A78bA1f6b25E29fbBC9Cd1BFA29A51520De84", gas: 1000000});
}
