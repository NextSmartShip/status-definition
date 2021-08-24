"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    New: 1,
    SendFailed: 8,
    SendSuccess: 10,
    ConfirmFailed: 14,
    Confirm: 15,
};
const statusLabels = [
    { id: status.New, label: 'New' },
    { id: status.SendFailed, label: 'Send WES Failed' },
    { id: status.SendSuccess, label: 'In WES' },
    { id: status.ConfirmFailed, label: 'WES Confirm Failed' },
    { id: status.Confirm, label: 'WES Confirmed' },
];
const cycleCount = {
    status,
    statusLabels
};
exports.default = cycleCount;
