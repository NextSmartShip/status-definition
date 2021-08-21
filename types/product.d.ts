import { LabelDataType } from "./common";

export type ProductStatus =
| 'New'
| 'Normal'

export type Product = {
  status: Record<ProductStatus, number>;
  statusLabels: LabelDataType[]
}
