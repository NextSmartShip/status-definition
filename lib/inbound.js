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

module.exports = {
  status
}