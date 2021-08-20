import { LabelDataType } from "./common";

export type ChannelStatus = 'Operating' | 'Suspended'

export interface Channel {
  status: Record<ChannelStatus, number>
  statusLabels: LabelDataType[]
}