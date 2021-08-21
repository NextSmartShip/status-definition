import type { Channel } from './types/channel';
import type { CountryCode } from './types/countryCode';
import type { CourierOrder } from './types/courierOrder';
import type { CycleCount } from './types/cycleCount';
import type { Inbound } from './types/inbound';
import type { Order } from './types/order';
import type { PickingOrder } from './types/pickingOrder';
import type { Product } from './types/product';
import type { Shelve } from './types/shelve';
import type { Unshelve } from './types/unshelve';

export const order: Order;

export const inbound: Inbound;

export const product: Product;

export const unshelve: Unshelve;

export const channel: Channel;

export const courierOrder: CourierOrder;

export const pickingOrder: PickingOrder;

export const shelve: Shelve;

export const cycleCount: CycleCount;

export const countryCode: CountryCode
