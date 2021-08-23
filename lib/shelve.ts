import type { Shelve, ShelveStatus } from "../types/shelve";

const status: Record<ShelveStatus, number> = {
  NEW: 1, // 初始
  SENT_FAILED: 19, // 发送WES 失败
  SENT: 20, // 已发送至快仓WES
  PENDING: 30, // 上架中
  FINISH: 40, // 上架完成
};


const shelve: Shelve = {
  status
};

export default shelve;
