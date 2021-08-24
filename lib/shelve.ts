import type { Shelve, ShelveStatus } from "../types/shelve";

const status: Record<ShelveStatus, number> = {
  New: 1, // 初始
  SentFailed: 19, // 发送WES 失败
  Sent: 20, // 已发送至快仓WES
  Pending: 30, // 上架中
  PartialShelve: 38,
  Finish: 40, // 上架完成
};


const shelve: Shelve = {
  status
};

export default shelve;
