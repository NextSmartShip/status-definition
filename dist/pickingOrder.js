"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    New: 1,
    InQueue: 5,
    SendFailed: 8,
    SendSuccess: 10,
    PartialConfirm: 14,
    Confirm: 15,
    ConfirmError: 16,
};
const statusLabels = [
    { id: status.New, label: 'New' },
    { id: status.InQueue, label: 'In Queue' },
    { id: status.SendFailed, label: 'Send WES Failed' },
    { id: status.SendSuccess, label: 'In WES' },
    { id: status.PartialConfirm, label: 'WES Partial Confirm' },
    { id: status.Confirm, label: 'WES Confirmed' },
    { id: status.ConfirmError, label: 'WES Confirmed Error' },
];
const pickingOrder = {
    status,
    statusLabels,
};
exports.default = pickingOrder;
