"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_CONFIG = void 0;
var path = require("path");
var configPath = path.resolve(__dirname);
exports.PROJECT_CONFIG = {
    rootPath: path.dirname(path.dirname(configPath)), // Move up two levels in the directory structure
};
