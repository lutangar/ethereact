import Web3 from 'web3';

export default typeof web3 !== 'undefined' ? web3.currentProvider :
  new Web3.providers.HttpProvider('http://localhost:8545')
;
