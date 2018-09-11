// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var HDWalletProvider = require('truffle-hdwallet-provider');

var infura_apikey = "kym7IX9yOfGIjymPEK1G";
var mnemonic = "room shrug bounce witness drill next jar census domain divert mind movie";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 22000,
            network_id: "*", // Match any network id
            gasPrice: 0,
            gas: 4500000
        },


        rpc: {
            host: "115.127.24.181",
            port: 8545
        },

        azureNetwork: {
            host: "leadk5-dns-reg1.eastus.cloudapp.azure.com",
            network_id: 10101010,
            port: 8545
        },

        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
            network_id: 3,
            gas: 3000000
        }





    }
};