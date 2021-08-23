export type CourierOrderStatus = 'NEW' | 'READY' | 'FAILED' | 'SUCCESS' | 'COMPLETED' | 'CANCELED';

export type CourierOrder = {
  status: Record<CourierOrderStatus, string>;
};
