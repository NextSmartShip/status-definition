export type CourierOrderStatus = 'NEW' | 'READY' | 'FAILED' | 'SUCCESS' | 'COMPLETED' | 'CANCELED'

export interface CourierOrder {
  status: Record<CourierOrderStatus, number>;
}
