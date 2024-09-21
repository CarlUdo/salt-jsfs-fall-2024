"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_functions_1 = require("../utils/utility-functions");
const various_errors_1 = require("../classes/various-errors");
const general_error_1 = require("../classes/general-error");
const REQUEST_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB
const checkReqSize = (req, res, next) => {
    const contentLength = req.headers['content-length'] ? parseInt(req.headers['content-length']) : null; // Headers are case-insensitive
    if (!contentLength) {
        const errorMessage = `Header "Content-length" must be set`;
        throw new general_error_1.GeneralError(errorMessage);
    }
    if (contentLength > REQUEST_SIZE_LIMIT) {
        const errorMessage = `The content you are trying to send is ${(0, utility_functions_1.convertBytesToMB)(contentLength, 2)} MB.` +
            `Max limit is ${REQUEST_SIZE_LIMIT}`;
        throw new various_errors_1.PayloadTooLarge(errorMessage);
    }
    next();
};
exports.default = checkReqSize;
//# sourceMappingURL=check-req-size.js.map