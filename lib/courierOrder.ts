import type { CourierOrder, CourierOrderStatus } from "../types/courierOrder";

const status: Record<CourierOrderStatus, string> = {
  New: 'N',
  Ready: 'R',
  Failed: 'F',
  Success: 'S',
  Completed: 'C',
  Canceled: 'CL',
};

const courierOrder: CourierOrder = {
  status
};

export default courierOrder;
