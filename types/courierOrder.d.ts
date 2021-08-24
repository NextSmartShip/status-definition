export type CourierOrderStatus = 'New' | 'Ready' | 'Failed' | 'Success' | 'Completed' | 'Canceled';

export type CourierOrder = {
  status: Record<CourierOrderStatus, string>;
};
