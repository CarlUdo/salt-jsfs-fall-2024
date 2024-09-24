"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadTooLarge = exports.LengthRequired = exports.CustomError = void 0;
class CustomError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        if (cause) {
            this.cause = cause;
        }
        this.name = this.constructor.name;
    }
    get statusCode() {
        const errorName = this.name;
        if (errorName === 'LengthRequired')
            return 411;
        if (errorName === 'PayloadTooLarge')
            return 413;
        return 500;
    }
}
exports.CustomError = CustomError;
class LengthRequired extends CustomError {
    constructor(message, cause) {
        super(message, cause);
    }
}
exports.LengthRequired = LengthRequired;
;
class PayloadTooLarge extends CustomError {
    constructor(message, cause) {
        super(message, cause);
    }
}
exports.PayloadTooLarge = PayloadTooLarge;
;
//# sourceMappingURL=Errors.js.map