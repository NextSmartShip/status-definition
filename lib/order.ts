import type { LabelDataType } from "../types/common";
import type { Order, OrderCancelStatus, OrderStatus } from "../types/order";

// TODO Add comments

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
  Delivered: 60,
};

const cancelStatus: Record<OrderCancelStatus, number> = {
  Normal: 0, // Normal
  Requested: 1, // Cancellation requesting
  Intercepted: 2, // Intercepted order
  Cancelled: 3,
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
  statusLabels,
  cancelStatusLabels
};

export default order
