import type { Channel } from "./channel";
import type { CountryCode } from "./countryCode";
import type { CourierOrder } from "./courierOrder";
import type { CycleCount } from "./cycleCount";
import type { Inbound } from "./inbound";
import type { Order } from "./order";
import type { PickingOrder } from "./pickingOrder";
import type { Product } from "./product";
import type { Shelve } from "./shelve";
import type { Unshelve } from "./unshelve";

export type StatusDefinition = {
  order: Order;
  inbound: Inbound;
  product: Product;
  unshelve: Unshelve;
  channel: Channel;
  courierOrder: CourierOrder;
  pickingOrder: PickingOrder;
  shelve: Shelve;
  cycleCount: CycleCount;
  countryCode: CountryCode;
};
