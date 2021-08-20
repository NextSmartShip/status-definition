import { LabelDataType } from "./common";

export type ProductStatus =
| 'New'
| 'Normal'

export interface Product {
  status: Record<ProductStatus, number>;
  statusLabel: LabelDataType[]
}
