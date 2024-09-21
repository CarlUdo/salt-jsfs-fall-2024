"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const general_error_1 = require("../classes/general-error");
const errorHandler = (err, req, res) => {
    const message = err instanceof general_error_1.GeneralError ? err.getErrorMessage : err.message;
    //console.log(message, err instanceof GeneralError)
    //console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
    res.status(500).json({ message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map