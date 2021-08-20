export type OrderStatus =
  | "Draft"
  | "New"
  | "ReadToShip"
  | "RequestCourierLabel"
  | "WaitingCourierLabelGenerated"
  | "WaitingForUnShelving"
  | "UnShelving"
  | "UnShelved"
  | "Packaging"
  | "Fulfilled"
  | "Shipped"
  | "Delivered"
  | "Intercepted"
  | "Cancelled"
  | "Closed";

export type OrderCancelStatus =
  | "Normal"
  | "Requested"
  | "Intercepted"
  | "Cancelled";

export interface Order {
  status: Record<OrderStatus, number>;
  cancelStatus: Record<OrderCancelStatus, number>;
}
