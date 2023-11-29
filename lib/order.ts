import type { LabelDataType } from '../types/common';
import type { Order, OrderCancelStatus, OrderPaymentStatus, OrderStatus as KeyOrderStatusType } from '../types/order';

import NewOrderStatus from './order_status';
// TODO Add comments

const status: Record<KeyOrderStatusType, number> = {
  New: 1,
  Ready: 10,
  RequestCourierLabel: 30,
  WaitingCourierLabelGenerated: 31,
  WaitingForUnShelving: 32,
  UnShelving: 33,
  UnShelved: 34,
  Packaging: 35,
  ToRecheck: 36,
  Rechecking: 37,
  Fulfilled: 38,
  Shipped: 50,
  Delivered: 80,
};

const cancelStatus: Record<OrderCancelStatus, number> = {
  Normal: 0, // Normal
  Requested: 1, // Cancellation requesting
  Intercepted: 2, // Intercepted order
  Cancelled: 3,
};

const paymentStatus: Record<OrderPaymentStatus, number> = {
  WaitingConfirm: 1,
  Confirmed: 5,
  Deducted: 10,
};

const statusLabels: LabelDataType[] = [
  { id: status.New, label: 'New' },
  { id: status.Ready, label: 'Ready' },
  { id: status.RequestCourierLabel, label: 'Request Courier Label' },
  { id: status.WaitingCourierLabelGenerated, label: 'Waiting Courier Label Generated' },
  { id: status.WaitingForUnShelving, label: 'waiting for unshelving' },
  { id: status.UnShelving, label: 'UnShelving' },
  { id: status.UnShelved, label: 'UnShelved' },
  { id: status.Packaging, label: 'Packaging' },
  { id: status.ToRecheck, label: 'ToRecheck'},
  { id: status.Rechecking, label: 'Rechecking'},
  { id: status.Fulfilled, label: 'Fulfilled' },
  { id: status.Shipped, label: 'Shipped' },
  { id: status.Delivered, label: 'Delivered' },
];

const cancelStatusLabels: LabelDataType[] = [
  { id: cancelStatus.Normal, label: 'Normal' },
  { id: cancelStatus.Requested, label: 'Cancellation Requested' },
  { id: cancelStatus.Intercepted, label: 'Cancellation(Intercepted)' },
  { id: cancelStatus.Cancelled, label: 'Cancelled' },
];

const order: Order = {
  status,
  cancelStatus,
  paymentStatus,
  statusLabels,
  cancelStatusLabels,
  ...NewOrderStatus,
};

export default order;
