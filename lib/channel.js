'use strict'

const status = {
  Operating: 1,
  Suspended: 0,
}

const statusLabels = [
  { id: status.Operating, label: 'Operating' },
  { id: status.Suspended, label: 'Suspended' },
];

module.exports = {
  status,
  statusLabels
}