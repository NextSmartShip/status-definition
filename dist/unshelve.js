"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    New: 1,
    Unshelving: 2,
    PartialFinish: 5,
    Finish: 10,
};
const statusLabels = [
    { id: status.New, label: 'New' },
    { id: status.Unshelving, label: 'Unshelving' },
    { id: status.PartialFinish, label: 'Partial Shipped' },
    { id: status.Finish, label: 'Finish' },
];
const unshelve = {
    status,
    statusLabels,
};
exports.default = unshelve;
