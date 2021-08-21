import { LabelDataType } from "./common";

export type PickingOrderStatus =
  | 'NEW'
  | 'InQueue'
  | 'SendFailed'
  | 'SendSuccess'
  | 'PartialConfirm'
  | 'Confirm'
  | 'ConfirmError';

export type PickingOrder = {
  status: Record<PickingOrderStatus, number>;
  statusLabels: LabelDataType[]
}
