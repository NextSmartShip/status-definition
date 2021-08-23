import { LabelDataType } from './common';

export type CycleCountStatus = 'New' | 'SendFailed' | 'SendSuccess' | 'ConfirmFailed' | 'Confirm';

export type CycleCount = {
  status: Record<CycleCountStatus, number>;
  statusLabels: LabelDataType[];
};
