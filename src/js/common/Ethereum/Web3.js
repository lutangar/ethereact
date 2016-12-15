import Web3 from 'web3';

export default new Web3(new Web3.providers.HttpProvider('http://localhost:8545')).eth;
