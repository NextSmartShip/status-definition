'use strict'

// TODO Add comments

const status = {
  Canceled: -1,
  Draft: 0,
  New: 1,
  InTransit: 2,
  StartReceived: 10,
  CloseReceived: 15,
  PartialReceived: 18,
  CompleteReceived: 20,
  WaitingConfirm: 23,
  WaitingShelve: 25,
  StartShelved: 30,
  CloseShelved: 35,
  PartialShelved: 38,
  CompleteShelved: 40,
  Complete: 99,
}

const statusLabels = [
  { id: status.Canceled, label: 'Canceled' },
  { id: status.Draft, label: 'Draft' },
  { id: status.New, label: 'New' },
  { id: status.InTransit, label: 'In Transit' },
  { id: status.StartReceived, label: 'Start Received' },
  { id: status.CloseReceived, label: 'Close Received' },
  { id: status.PartialReceived, label: 'Partial Received' },
  { id: status.CompleteReceived, label: 'Complete Received' },
  { id: status.StartShelved, label: 'Start Shelved' },
  { id: status.PartialShelved, label: 'Partial Shelved' },
  { id: status.CompleteShelved, label: 'Complete Received' },
  { id: status.Complete, label: 'Complete' },
];

module.exports = {
  status,
  statusLabels
}
