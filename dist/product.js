"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    New: 1,
    Normal: 10,
};
const statusLabels = [
    { id: status.New, label: 'New' },
    { id: status.Normal, label: 'Normal' },
];
const product = {
    status,
    statusLabels,
};
exports.default = product;
