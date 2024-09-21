"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadTooLarge = exports.LengthRequired = void 0;
const general_error_1 = require("./general-error");
class LengthRequired extends general_error_1.GeneralError {
}
exports.LengthRequired = LengthRequired;
;
class PayloadTooLarge extends general_error_1.GeneralError {
}
exports.PayloadTooLarge = PayloadTooLarge;
;
//# sourceMappingURL=various-errors.js.map