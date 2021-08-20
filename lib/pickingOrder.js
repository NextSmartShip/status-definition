'use strict'

const status = {
  New: 1,
  InQueue: 5,
  SendFailed: 8,
  SendSuccess: 10,
  PartialConfirm: 14,
  Confirm: 15,
  ConfirmError: 16,
}

module.exports = {
  status
}