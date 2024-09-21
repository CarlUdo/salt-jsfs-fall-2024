"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMBToBytes = exports.convertBytesToMB = void 0;
const convertBytesToMB = (bytes, decimals) => Number((bytes * 0.000001).toFixed(decimals));
exports.convertBytesToMB = convertBytesToMB;
const convertMBToBytes = (mbs) => Math.floor((mbs / 0.000001));
exports.convertMBToBytes = convertMBToBytes;
//# sourceMappingURL=utility-functions.js.map