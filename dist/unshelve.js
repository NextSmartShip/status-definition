"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnshelveStatusEnum = void 0;
var UnshelveStatusEnum;
(function (UnshelveStatusEnum) {
    UnshelveStatusEnum["NEW"] = "NEW";
    UnshelveStatusEnum["PICKING"] = "PICKING";
    UnshelveStatusEnum["PARTIAL_FINISHED"] = "PARTIAL_FINISHED";
    UnshelveStatusEnum["FINISHED"] = "FINISHED";
})(UnshelveStatusEnum = exports.UnshelveStatusEnum || (exports.UnshelveStatusEnum = {}));
const unshelve = {
    statusEnum: UnshelveStatusEnum,
};
exports.default = unshelve;
