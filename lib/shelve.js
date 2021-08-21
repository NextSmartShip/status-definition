'use strict'

const status = {
  NEW: 1, // 初始
  SENT_FAILED: 19, // 发送WES 失败
  SENT: 20, // 已发送至快仓WES
  PENDING: 30, // 上架中
  FINISH: 40, // 上架完成
}


module.exports = {
  status
}
