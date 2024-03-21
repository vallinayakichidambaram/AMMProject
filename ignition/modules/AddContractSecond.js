const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AddContractSecondDeploy", (m) => {

  const AddContractSecond = m.contract("AddContractSecond", []);

  return { AddContractSecond };
});