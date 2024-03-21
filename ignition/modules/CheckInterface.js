const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CheckInterfaceDeploy", (m) => {

  const CheckInterface = m.contract("CheckInterface", []);

  return { CheckInterface };
});