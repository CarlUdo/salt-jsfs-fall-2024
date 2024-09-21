"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralError = void 0;
class GeneralError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        Object.setPrototypeOf(this, GeneralError.prototype);
    }
    // Method to get only the error message
    getErrorMessage() {
        return this.message;
    }
    // Method to get the cause of the error
    getErrorCause() {
        return this.cause;
    }
}
exports.GeneralError = GeneralError;
// Example usage
const causeError = new Error("Underlying issue");
const error = new GeneralError("Something went wrong", causeError);
console.log(error.getErrorMessage()); // Output: Something went wrong
console.log(error.getErrorCause()?.message); // Output: Underlying issue
// export class GeneralError extends Error {
//   constructor(message : string, cause: any) {
//     super(cause);
//     this.message = message;
//   }
//   get name() {
//     return this.constructor.name;
//   }
//   get statusCode() {
//     if (this instanceof LengthRequired) 411;
//     if (this instanceof PayloadTooLarge) 413;
//     return 500;
//   }
//   get generalMessage() {
//     return 'hej\n\n\n';
//   }
// }
//# sourceMappingURL=general-error.js.map