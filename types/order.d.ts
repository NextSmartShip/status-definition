import { LabelDataType } from './common';

export type OrderStatus =
  | 'New'
  | 'Ready'
  | 'RequestCourierLabel'
  | 'WaitingCourierLabelGenerated'
  | 'WaitingForUnShelving'
  | 'UnShelving'
  | 'UnShelved'
  | 'Packaging'
  | 'Fulfilled'
  | 'Shipped'
  | 'Delivered';

export type OrderCancelStatus = 'Normal' | 'Requested' | 'Intercepted' | 'Cancelled';

export type Order = {
  status: Record<OrderStatus, number>;
  cancelStatus: Record<OrderCancelStatus, number>;
  statusLabels: LabelDataType[];
  cancelStatusLabels: LabelDataType[];
};
