import { ENUM_NEW_ORDERS_STATUS, getOrderStatus } from '../lib/order';
import { LabelDataType } from './common';

export type OrderStatus =
  | 'Ready'
  | 'RequestCourierLabel'
  | 'WaitingCourierLabelGenerated'
  | 'WaitingForUnShelving'
  | 'UnShelving'
  | 'UnShelved'
  | 'ToRecheck'
  | 'Rechecking'
  | 'Packaging'
  | 'Fulfilled'
  | 'Shipped'
  | 'Delivered';

export type OrderCancelStatus = 'Normal' | 'Requested' | 'Intercepted' | 'Cancelled';

export type OrderPaymentStatus = 'WaitingConfirm' | 'Confirmed' | 'Deducted';

export type Order = {
  status: Record<OrderStatus, number>;
  cancelStatus: Record<OrderCancelStatus, number>;
  paymentStatus: Record<OrderPaymentStatus, number>;
  statusLabels: LabelDataType[];
  cancelStatusLabels: LabelDataType[];
  ENUM_NEW_ORDERS_STATUS?: ENUM_NEW_ORDERS_STATUS;
  getOrderStatus?: typeof getOrderStatus;
};
