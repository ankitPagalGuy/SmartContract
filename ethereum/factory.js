import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xcf894c5A06B53324d33123C1494BCd4648EE3A41'
);

export default instance;
