import order from './order';
import product from './product';
import inbound from './inbound';
import unshelve from './unshelve';
import channel from './channel';
import courierOrder from './courierOrder';
import pickingOrder from './pickingOrder';
import shelve from './shelve';
import cycleCount from './cycleCount';
import countryCode from './countryCode';
import { StatusDefinition } from '../types';

const statusDefinition: StatusDefinition = {
  order,
  product,
  inbound,
  unshelve,
  channel,
  courierOrder,
  pickingOrder,
  shelve,
  cycleCount,
  countryCode,
};

export default statusDefinition
