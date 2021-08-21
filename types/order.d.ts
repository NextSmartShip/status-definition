import { LabelDataType } from "./common";

export type OrderStatus =
| 'Draft'
| 'New'
| 'ReadToShip'
| 'RequestCourierLabel'
| 'WaitingCourierLabelGenerated'
| 'WaitingForUnShelving'
| 'UnShelving'
| 'UnShelved'
| 'Packaging'
| 'Fulfilled'
| 'Shipped'
| 'Delivered'
| 'Intercepted'
| 'Cancelled'
| 'Closed';

export type OrderCancelStatus = 'Normal' | 'Requested' | 'Intercepted' | 'Cancelled';

export type Order = {
  status: Record<OrderStatus, number>;
  cancelStatus: Record<OrderCancelStatus, number>;
  statusLabels: LabelDataType[];
  cancelStatusLabels: LabelDataType[]
}
