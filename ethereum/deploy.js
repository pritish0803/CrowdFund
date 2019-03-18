const HDwalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const ganache=require('ganache-cli');
//const{interface,bytecode}=require('./compile');
require('events').EventEmitter.prototype._maxListeners = 100;
const compiledFactory=require('./build/CampaignFactory.json');

const provider=new HDwalletProvider('you inject hospital hidden feel notable bright raven news hand cactus pizza','https://rinkeby.infura.io/v3/63d16be9a94542b78bedc067955a0554',0,10);
const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const deploy=async()=>{

  const accounts=await web3.eth.getAccounts();
  console.log('Attempting to deploy from account',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data : compiledFactory.bytecode}) .send ({gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to ',result.options.address);

};
deploy();
