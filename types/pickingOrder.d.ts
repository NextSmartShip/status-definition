export type PickingOrderStatus =
  | 'NEW'
  | 'InQueue'
  | 'SendFailed'
  | 'SendSuccess'
  | 'PartialConfirm'
  | 'Confirm'
  | 'ConfirmError';

export interface PickingOrder {
  status: Record<PickingOrderStatus, number>;
}
