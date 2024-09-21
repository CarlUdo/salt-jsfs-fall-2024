"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./routes/users");
const check_req_size_1 = __importDefault(require("./middlewares/check-req-size"));
const error_handler_1 = require("./middlewares/error-handler");
// Uncomment below to generate a database for development purposes
/* import { generateInMemoryDatabase } from './utils/generate-in-memory-database';
generateInMemoryDatabase(100);  */
const app = (0, express_1.default)();
const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;
app.use(check_req_size_1.default);
app.use('/users', users_1.usersRouter);
app.use(error_handler_1.errorHandler);
app.listen(PORT, host, () => console.log(`Server is listening to http://${host}/${PORT}`));
//# sourceMappingURL=app.js.map