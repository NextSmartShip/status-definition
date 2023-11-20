import type { LabelDataType } from '../types/common';
import type { Order, OrderCancelStatus, OrderPaymentStatus, OrderStatus } from '../types/order';

// TODO Add comments
// 新版-订单状态：
export enum ENUM_NEW_ORDERS_STATUS {
  // 待下架
  ORDER_STATUS_WAITING_FOR_PICKING = 32,
  // 下架中
  ORDER_STATUS_PICKING = 33,
  // 下架完成
  ORDER_STATUS_PICKED = 34,
  // 配货中
  ORDER_STATUS_FULFILLING = 35,
  // 待复核(配货完成)
  ORDER_STATUS_TO_RECHECK = 36,
  // 复核中
  ORDER_STATUS_RECHECKING = 37,
  // 待签出(复核完成)
  ORDER_STATUS_TO_SIGN_OFF = 38,
  // 已发货.
  ORDER_STATUS_SHIPPED = 50,
}

const status: Record<OrderStatus, number> = {
  New: 1,
  Ready: 10,
  RequestCourierLabel: 30,
  WaitingCourierLabelGenerated: 31,
  WaitingForUnShelving: 32,
  UnShelving: 33,
  UnShelved: 34,
  Packaging: 35,
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
};

export default order;
