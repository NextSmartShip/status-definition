import type { LabelDataType } from "../types/common";
import type { CycleCount, CycleCountStatus } from "../types/cycleCount";

const status: Record<CycleCountStatus, number> = {
  New: 1,
  SendFailed: 8,
  SendSuccess: 10,
  ConfirmFailed: 14,
  Confirm: 15,
};

const statusLabels: LabelDataType[] = [
  { id: status.New, label: 'New' },
  { id: status.SendFailed, label: 'Send WES Failed' },
  { id: status.SendSuccess, label: 'In WES' },
  { id: status.ConfirmFailed, label: 'WES Confirm Failed' },
  { id: status.Confirm, label: 'WES Confirmed' },
];

const cycleCount: CycleCount = {
  status,
  statusLabels
};

export default cycleCount;
