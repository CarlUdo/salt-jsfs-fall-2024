"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrongRoute = void 0;
const path_1 = __importDefault(require("path"));
const project_config_1 = require("../config/project-config");
exports.wrongRoute = ((req, res) => {
    const { rootPath } = project_config_1.PROJECT_CONFIG;
    res.status(404).sendFile(path_1.default.join(rootPath, 'src', 'static', '404.html'));
});
//# sourceMappingURL=wrong-route.js.map