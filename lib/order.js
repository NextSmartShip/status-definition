'use strict'

// TODO Add comments

var status = {
  Draft: 0,
  New: 1,
  ReadToShip: 10,
  RequestCourierLabel: 30,
  WaitingCourierLabelGenerated: 31,
  WaitingForUnShelving: 32,
  UnShelving: 33,
  UnShelved: 34,
  Packaging: 35,
  Fulfilled: 38,
  Shipped: 50,
  Delivered: 60,
  Intercepted: 90,
  Cancelled: 99,
  Closed: 100,
};

var cancelStatus = {
  Normal: 0, // Normal
  Requested: 1, // Cancellation requesting
  Intercepted: 2, // Intercepted order
  Cancelled: 3, 
}

module.exports = {
  status,
  cancelStatus
}
