import { LabelDataType } from "../types/common"
import type { Product, ProductStatus } from "../types/product"

// TODO Add comments

const status: Record<ProductStatus, number> = {
  New: 1,
  Normal: 10
};

const statusLabels: LabelDataType[] = [
  { id: status.New, label: 'New' },
  { id: status.Normal, label: 'Normal' },
];

const product: Product = {
  status,
  statusLabels
};

export default product;