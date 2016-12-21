let provider;
if (typeof web3 !== 'undefined') {
  provider = web3.currentProvider;
} else {
  const web3 = require('web3');
  provider = web3.providers.HttpProvider('http://localhost:8545');
}

export default provider;
