// Configures project to talk to blockchain
require('babel-register');
require('babel-polyfill');

module.exports = {
// Connection to our Ganache personal etherium blockchain
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  // Placed in a separate directory so they can be exposed to react.js
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
