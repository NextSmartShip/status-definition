'use strict'

// TODO Add comments

const status = {
  New: 1,
  Unshelving: 2,
  PartialFinish: 5,
  Finish: 10,
}

const statusLabels = [
  { id: status.New, label: 'New' },
  { id: status.PartialFinish, label: 'Partial Shipped' },
  { id: status.Finish, label: 'Finish' },
]

module.exports = {
  status,
  statusLabels
}