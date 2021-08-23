import { LabelDataType } from "../types/common";
import type { Unshelve, UnshelveStatus } from "../types/unshelve";

// TODO Add comments
const status: Record<UnshelveStatus, number> = {
  New: 1,
  Unshelving: 2,
  PartialFinish: 5,
  Finish: 10,
};

const statusLabels: LabelDataType[] = [
  { id: status.New, label: 'New' },
  { id: status.PartialFinish, label: 'Partial Shipped' },
  { id: status.Finish, label: 'Finish' },
];

const unshelve: Unshelve = {
  status,
  statusLabels
};

export default unshelve;
