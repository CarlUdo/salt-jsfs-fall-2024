"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const get_error_information_1 = require("../utils/get-error-information");
const write_to_log_file_1 = require("../utils/write-to-log-file");
// Note! Even though next function isn't used it must come as a parameter or strange behaviour will occur
const errorHandler = (err, req, res, next) => {
    try {
        const errorInformation = (0, get_error_information_1.getErrorInformation)(err);
        res.status(errorInformation.status).json({ message: errorInformation.message });
        (0, write_to_log_file_1.writeToLogFile)(errorInformation);
    }
    catch (err) {
        console.log('Error within errorHandler: ', err);
        const errorInformation = (0, get_error_information_1.getErrorInformation)(err);
        (0, write_to_log_file_1.writeToLogFile)(errorInformation);
        res.status(errorInformation.status).json({ message: errorInformation.message });
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map