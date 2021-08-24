"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
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
    InTransit: 55,
    Delivered: 60,
    Intercepted: 90,
    Cancelled: 99,
    Closed: 100,
};
const cancelStatus = {
    Normal: 0,
    Requested: 1,
    Intercepted: 2,
    Cancelled: 3,
};
const statusLabels = [
    { id: status.Draft, label: 'Draft' },
    { id: status.New, label: 'New' },
    { id: status.ReadToShip, label: 'Ready To Ship' },
    { id: status.RequestCourierLabel, label: 'Request Courier Label' },
    { id: status.WaitingCourierLabelGenerated, label: 'Waiting Courier Label Generated' },
    { id: status.WaitingForUnShelving, label: 'waiting for unshelving' },
    { id: status.UnShelving, label: 'UnShelving' },
    { id: status.UnShelved, label: 'UnShelved' },
    { id: status.Packaging, label: 'Packaging' },
    { id: status.Fulfilled, label: 'Fulfilled' },
    { id: status.Shipped, label: 'Shipped' },
    { id: status.InTransit, label: 'InTransit' },
    { id: status.Delivered, label: 'Delivered' },
    { id: status.Intercepted, label: 'Intercepted' },
    { id: status.Cancelled, label: 'Cancelled' },
];
const cancelStatusLabels = [
    { id: cancelStatus.Normal, label: 'Normal' },
    { id: cancelStatus.Requested, label: 'Cancellation Requested' },
    { id: cancelStatus.Intercepted, label: 'Cancellation(Intercepted)' },
    { id: cancelStatus.Cancelled, label: 'Cancelled' },
];
const order = {
    status,
    cancelStatus,
    statusLabels,
    cancelStatusLabels
};
exports.default = order;
