"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const product_1 = __importDefault(require("./product"));
const inbound_1 = __importDefault(require("./inbound"));
const unshelve_1 = __importDefault(require("./unshelve"));
const channel_1 = __importDefault(require("./channel"));
const courierOrder_1 = __importDefault(require("./courierOrder"));
const pickingOrder_1 = __importDefault(require("./pickingOrder"));
const shelve_1 = __importDefault(require("./shelve"));
const cycleCount_1 = __importDefault(require("./cycleCount"));
const countryCode_1 = __importDefault(require("./countryCode"));
const statusDefinition = {
    order: order_1.default,
    product: product_1.default,
    inbound: inbound_1.default,
    unshelve: unshelve_1.default,
    channel: channel_1.default,
    courierOrder: courierOrder_1.default,
    pickingOrder: pickingOrder_1.default,
    shelve: shelve_1.default,
    cycleCount: cycleCount_1.default,
    countryCode: countryCode_1.default,
};
exports.default = statusDefinition;
