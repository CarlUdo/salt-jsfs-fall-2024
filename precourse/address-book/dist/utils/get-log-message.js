"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogMessage = void 0;
const date_functions_1 = require("./date-functions");
const type_guards_1 = require("./type-guards");
const divider = `\n-------------------------------------------------------------------------------------\n`;
const getLogMessage = (logObj) => {
    const date = (0, date_functions_1.getLocaleDateObj)().dateFull;
    let messageText = '';
    if ((0, type_guards_1.isErrorInfo)(logObj)) {
        messageText = `${logObj.name}(${logObj.status}): ${logObj.message} | ${logObj.type}\n${logObj.stack}`;
    }
    else {
        messageText = `Couldn't generate an error message`;
    }
    return `Date: ${date}\n${messageText}${divider}`;
};
exports.getLogMessage = getLogMessage;
//# sourceMappingURL=get-log-message.js.map