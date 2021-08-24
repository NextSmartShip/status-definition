"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    Operating: 1,
    Suspended: 0,
};
const statusLabels = [
    { id: status.Operating, label: 'Operating' },
    { id: status.Suspended, label: 'Suspended' },
];
const countryCode = {
    status,
    statusLabels
};
exports.default = countryCode;
