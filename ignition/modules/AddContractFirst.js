const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AddContractFirstDeploy", (m) => {

  const AddContractFirst = m.contract("AddContractFirst", []);

  return { AddContractFirst };
});