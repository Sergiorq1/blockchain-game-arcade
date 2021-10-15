// Migration files are numbered so truffle knows what order to run them in 
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
