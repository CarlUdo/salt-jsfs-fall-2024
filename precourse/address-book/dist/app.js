"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const people_router_1 = require("./routes/people-router");
const error_handler_1 = require("./middlewares/error-handler");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const wrong_route_1 = require("./middlewares/wrong-route");
const project_config_1 = require("./config/project-config");
// --- Uncomment below to generate a database for development purposes --- //
// import { generateInMemoryDatabase } from './utils/generate-in-memory-database';
// generateInMemoryDatabase(100);  
const rootPath = project_config_1.PROJECT_CONFIG.rootPath;
(async () => {
    const rfs = await import('rotating-file-stream');
    const logStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path_1.default.join(rootPath, 'logs', 'common')
    });
    const app = (0, express_1.default)();
    const host = '0.0.0.0';
    const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;
    app.use((0, morgan_1.default)('combined', { stream: logStream }));
    app.use(express_1.default.json({ limit: '5mb' }));
    app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
    app.use('/api/people', people_router_1.peopleRouter);
    app.use(wrong_route_1.wrongRoute);
    app.use(error_handler_1.errorHandler);
    app.listen(PORT, host, () => console.log(`Server is listening to http://${host}/${PORT}`));
})();
//# sourceMappingURL=app.js.map