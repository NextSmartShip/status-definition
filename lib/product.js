'use strict'

// TODO Add comments

const status = {
  New: 0,
  Normal: 1
}

const statusLabels = [
  { id: status.New, label: 'New' },
  { id: status.Normal, label: 'Normal' },
]

module.exports = {
  status,
  statusLabels
}
