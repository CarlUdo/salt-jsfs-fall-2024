"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorInformation = void 0;
const getErrorInformation = (err) => {
    return {
        status: err.statusCode || err.status || 500,
        name: err.name ?? 'Unknown error name',
        message: err.message ?? 'Unknown error message',
        type: err.type ?? 'Unknown error type',
        stack: err.stack ?? ''
    };
};
exports.getErrorInformation = getErrorInformation;
//# sourceMappingURL=get-error-information.js.map