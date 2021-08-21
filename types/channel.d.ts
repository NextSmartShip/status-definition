import { LabelDataType } from "./common";

export type ChannelStatus = 'Operating' | 'Suspended'

export type Channel = {
  status: Record<ChannelStatus, number>
  statusLabels: LabelDataType[]
}