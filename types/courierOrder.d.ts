export type CourierOrderStatus = 'NEW' | 'READY' | 'FAILED' 

export interface CourierOrder {
  status: Record<CourierOrderStatus, number>;
}
