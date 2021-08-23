import { LabelDataType } from './common';

export type UnshelveStatus = 'New' | 'Unshelving' | 'PartialFinish' | 'Finish';

export type Unshelve = {
  status: Record<UnshelveStatus, number>;
  statusLabels: LabelDataType[];
};
