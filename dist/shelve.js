"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = {
    New: 1,
    SentFailed: 19,
    Sent: 20,
    Pending: 30,
    PartialShelve: 38,
    Finish: 40,
};
const shelve = {
    status,
};
exports.default = shelve;
