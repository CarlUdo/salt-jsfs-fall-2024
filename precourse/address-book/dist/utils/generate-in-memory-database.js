"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInMemoryDatabase = void 0;
const generate_people_1 = require("./generate-people");
const fs_1 = require("fs");
const project_config_1 = require("../config/project-config");
const { rootPath } = project_config_1.PROJECT_CONFIG;
console.log('Hej hej hej');
const generateInMemoryDatabase = (numberOfPersons) => {
    try {
        const db = (0, generate_people_1.generatePeople)(numberOfPersons);
        const importExportString = 'import type { CreatedPerson } from "../utils/types";\n\n' +
            'export const db: CreatedPerson[] = ';
        const dbJsonString = `${importExportString}${JSON.stringify(db, null, 2)};\n`;
        (0, fs_1.writeFileSync)(`${rootPath}/src/database/people-database.ts`, dbJsonString, 'utf8');
    }
    catch (err) {
        console.log(`An error occured while trying to write "database" to file: ${err}`);
    }
};
exports.generateInMemoryDatabase = generateInMemoryDatabase;
(0, exports.generateInMemoryDatabase)(100);
//# sourceMappingURL=generate-in-memory-database.js.map