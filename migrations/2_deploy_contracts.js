// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");

var Creator = artifacts.require("./CreatorContract.sol");
var StudentInfo = artifacts.require("./StudentInfoContract.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  deployer.deploy(Creator, StudentInfo);
};
