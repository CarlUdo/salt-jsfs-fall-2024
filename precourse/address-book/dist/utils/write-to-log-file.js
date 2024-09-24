"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToLogFile = void 0;
const project_config_1 = require("../config/project-config");
const date_functions_1 = require("./date-functions");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const get_log_message_1 = require("./get-log-message");
const { rootPath } = project_config_1.PROJECT_CONFIG;
// Will change to a asynchronously logging going forward
const writeToLogFile = (logObj) => {
    const fileName = `error-log-${(0, date_functions_1.getLocaleDateObj)().dateMedium}.txt`; // Makes a new log file every day 
    const filePath = path_1.default.join(rootPath, 'logs', 'error', fileName);
    const logMessage = (0, get_log_message_1.getLogMessage)(logObj);
    (0, fs_1.appendFileSync)(filePath, logMessage);
};
exports.writeToLogFile = writeToLogFile;
//# sourceMappingURL=write-to-log-file.js.map