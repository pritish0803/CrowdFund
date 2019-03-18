import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance=new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x49178bae9a5ac66407a8A5e98A247cE5ad8385fA');

export default instance;
