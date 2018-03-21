module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "192.168.0.129",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
