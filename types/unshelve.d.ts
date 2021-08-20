import { LabelDataType } from "./common";

export type UnshelveStatus =
| 'New'
| 'Unshelving'
| "PartialFinish"
| "Finish"

export interface Unshelve {
  status: Record<UnshelveStatus, number>;
  statusLabels: LabelDataType[]
}
