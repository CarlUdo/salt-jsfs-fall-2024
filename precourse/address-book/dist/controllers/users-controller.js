"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const people_database_1 = require("../database/people-database");
exports.getAllUsers = ((req, res) => res.json(people_database_1.db));
//# sourceMappingURL=users-controller.js.map