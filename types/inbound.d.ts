import { LabelDataType } from "./common";

export type InboundStatus =
| 'Canceled'
| 'Draft'
| 'New'
| 'InTransit'
| 'StartReceived'
| 'CloseReceived'
| 'PartialReceived'
| 'CompleteReceived'
| 'WaitingConfirm'
| 'WaitingShelve'
| 'StartShelved'
| 'CloseShelved'
| 'PartialShelved'
| 'CompleteShelved'
| 'Complete';

export type Inbound = {
  status: Record<InboundStatus, number>;
  statusLabels: LabelDataType[]
}
