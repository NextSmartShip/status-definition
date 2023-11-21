"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderStatus = exports.ENUM_NEW_ORDERS_STATUS = void 0;
var ENUM_NEW_ORDERS_STATUS;
(function (ENUM_NEW_ORDERS_STATUS) {
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_WAITING_FOR_PICKING"] = 32] = "ORDER_STATUS_WAITING_FOR_PICKING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_PICKING"] = 33] = "ORDER_STATUS_PICKING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_PICKED"] = 34] = "ORDER_STATUS_PICKED";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_FULFILLING"] = 35] = "ORDER_STATUS_FULFILLING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_TO_RECHECK"] = 36] = "ORDER_STATUS_TO_RECHECK";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_RECHECKING"] = 37] = "ORDER_STATUS_RECHECKING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_TO_SIGN_OFF"] = 38] = "ORDER_STATUS_TO_SIGN_OFF";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_SHIPPED"] = 50] = "ORDER_STATUS_SHIPPED";
})(ENUM_NEW_ORDERS_STATUS = exports.ENUM_NEW_ORDERS_STATUS || (exports.ENUM_NEW_ORDERS_STATUS = {}));
const getOrderStatus = (keyOrValue) => {
    if (Array.isArray(keyOrValue)) {
        return keyOrValue.map((item) => ENUM_NEW_ORDERS_STATUS[item]);
    }
    return ENUM_NEW_ORDERS_STATUS[keyOrValue];
};
exports.getOrderStatus = getOrderStatus;
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
    Delivered: 80,
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
