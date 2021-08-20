export type ProductStatus =
| 'New'
| 'Normal'

export interface Product {
  status: Record<ProductStatus, number>;
}
