import { LabelDataType } from "./common"

export type CountryCodeStatus = "Operating" | "Suspended"

export type CountryCode = {
  status: Record<CountryCodeStatus, number>
  statusLabels: LabelDataType[]
}