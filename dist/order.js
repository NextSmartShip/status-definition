"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    New: 1,
    Ready: 10,
    RequestCourierLabel: 30,
    WaitingCourierLabelGenerated: 31,
    WaitingForUnShelving: 32,
    UnShelving: 33,
    UnShelved: 34,
    Packaging: 35,
    Fulfilled: 38,
    Shipped: 50,
    Delivered: 60,
};
const cancelStatus = {
    Normal: 0,
    Requested: 1,
    Intercepted: 2,
    Cancelled: 3,
};
const paymentStatus = {
    WaitingConfirm: 1,
    Confirmed: 5,
    Deducted: 10,
};
const statusLabels = [
    { id: status.New, label: 'New' },
    { id: status.Ready, label: 'Ready' },
    { id: status.RequestCourierLabel, label: 'Request Courier Label' },
    { id: status.WaitingCourierLabelGenerated, label: 'Waiting Courier Label Generated' },
    { id: status.WaitingForUnShelving, label: 'waiting for unshelving' },
    { id: status.UnShelving, label: 'UnShelving' },
    { id: status.UnShelved, label: 'UnShelved' },
    { id: status.Packaging, label: 'Packaging' },
    { id: status.Fulfilled, label: 'Fulfilled' },
    { id: status.Shipped, label: 'Shipped' },
    { id: status.Delivered, label: 'Delivered' },
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
    paymentStatus,
    statusLabels,
    cancelStatusLabels,
};
exports.default = order;
