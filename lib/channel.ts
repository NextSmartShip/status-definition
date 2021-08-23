import type { Channel, ChannelStatus } from '../types/channel';
import type { LabelDataType } from '../types/common';

const status: Record<ChannelStatus, number> = {
  Operating: 1,
  Suspended: 0,
};

const statusLabels: LabelDataType[] = [
  { id: status.Operating, label: 'Operating' },
  { id: status.Suspended, label: 'Suspended' },
];

const channel: Channel = {
  status,
  statusLabels,
};

export default channel;
