"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInMemoryDatabase = void 0;
const generate_people_1 = require("./generate-people");
const fs_1 = require("fs");
const project_config_1 = require("../config/project-config");
const { rootPath } = project_config_1.PROJECT_CONFIG;
const generateInMemoryDatabase = (numberOfPersons) => {
    const db = (0, generate_people_1.generatePeople)(numberOfPersons);
    const dbJsonString = `export const db = ${JSON.stringify(db, null, 2)};\n`;
    try {
        (0, fs_1.writeFileSync)(`${rootPath}/src/database/people-database.ts`, dbJsonString, 'utf8');
    }
    catch (err) {
        console.log(`An error occured while trying to write "database" to file: ${err}`);
    }
};
exports.generateInMemoryDatabase = generateInMemoryDatabase;
//# sourceMappingURL=generate-in-memory-database.js.map