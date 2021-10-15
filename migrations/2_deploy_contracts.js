// Tells truffle how to move contract onto the blockchain
const MemoryToken = artifacts.require("MemoryToken");

module.exports = function(deployer) {
  deployer.deploy(MemoryToken);
};
