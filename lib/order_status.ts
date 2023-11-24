import { ValueOf } from '..';
// 新版-订单状态：
export enum ENUM_NEW_ORDERS_STATUS {
  // 新建
  ORDER_STATUS_NEW = 1,
  // 准备发货
  ORDER_STATUS_READY = 10,
  // 请求渠道面单
  ORDER_STATUS_REQUEST_COURIER_LABEL = 30,
  // 等待生成面单
  ORDER_STATUS_WAITING_COURIER_LABEL_GENERATED = 31,
  // 待下架
  ORDER_STATUS_WAITING_FOR_PICKING = 32,
  // 下架中
  ORDER_STATUS_PICKING = 33,
  // 下架完成
  ORDER_STATUS_PICKED = 34,
  // 配货中
  ORDER_STATUS_FULFILLING = 35,
  // 待复核(配货完成)
  ORDER_STATUS_TO_RECHECK = 36,
  // 复核中
  ORDER_STATUS_RECHECKING = 37,
  // 待签出(复核完成)
  ORDER_STATUS_TO_SIGN_OFF = 38,
  // 已发货.
  ORDER_STATUS_SHIPPED = 50,
}
type KeyOrderStatusType = keyof typeof ENUM_NEW_ORDERS_STATUS;
type ValuesOrderStatusType = ValueOf<typeof ENUM_NEW_ORDERS_STATUS>;

type OrderStatusValue<T extends KeyOrderStatusType> = T extends KeyOrderStatusType
  ? (typeof ENUM_NEW_ORDERS_STATUS)[T]
  : never;

type OrderStatusReturnType<T> = T extends KeyOrderStatusType
  ? OrderStatusValue<T>
  : T extends KeyOrderStatusType[]
  ? OrderStatusValue<T[number]>[]
  : T extends ValuesOrderStatusType
  ? ValuesOrderStatusType
  : T extends ValuesOrderStatusType[]
  ? ValuesOrderStatusType[]
  : never;

export function getOrderStatus<
  T extends KeyOrderStatusType | KeyOrderStatusType[] | ValuesOrderStatusType | ValuesOrderStatusType[]
>(status: T): OrderStatusReturnType<T> {
  if (Array.isArray(status)) return status.map((s) => ENUM_NEW_ORDERS_STATUS[s]) as OrderStatusReturnType<T>;
  if (typeof status === 'number') return ENUM_NEW_ORDERS_STATUS[status] as OrderStatusReturnType<T>;
  return ENUM_NEW_ORDERS_STATUS[status as KeyOrderStatusType] as OrderStatusReturnType<T>;
}
export default {
  ENUM_NEW_ORDERS_STATUS,
  getOrderStatus,
};
