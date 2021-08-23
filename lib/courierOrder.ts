import type { CourierOrder, CourierOrderStatus } from "../types/courierOrder";

const status: Record<CourierOrderStatus, string> = {
  NEW: 'N',
  READY: 'R',
  FAILED: 'F',
  SUCCESS: 'S',
  COMPLETED: 'C',
  CANCELED: 'CL',
};

const courierOrder: CourierOrder = {
  status
};

export default courierOrder;

