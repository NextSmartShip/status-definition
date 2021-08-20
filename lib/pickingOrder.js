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

const statusLabels = [
  { id: status.NEW, name: 'New' },
  { id: status.InQueue, name: 'In Queue' },
  { id: status.SendFailed, name: 'Send WES Failed' },
  { id: status.SendSuccess, name: 'In WES' },
  { id: status.PartialConfirm, name: 'WES Partial Confirm' },
  { id: status.Confirm, name: 'WES Confirmed' },
  { id: status.ConfirmError, name: 'WES Confirmed Error' },
];


module.exports = {
  status,
  statusLabels
}