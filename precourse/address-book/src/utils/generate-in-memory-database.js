"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInMemoryDatabase = void 0;
var generate_people_1 = require("./generate-people");
var fs_1 = require("fs");
var project_config_1 = require("../config/project-config");
var rootPath = project_config_1.PROJECT_CONFIG.rootPath;
console.log('Hej hej hej');
var generateInMemoryDatabase = function (numberOfPersons) {
    try {
        var db = (0, generate_people_1.generatePeople)(numberOfPersons);
        var importExportString = 'import type { CreatedPerson } from "../utils/types";\n\n' +
            'export const db: CreatedPerson[] = ';
        var dbJsonString = "".concat(importExportString).concat(JSON.stringify(db, null, 2), ";\n");
        (0, fs_1.writeFileSync)("".concat(rootPath, "/src/database/people-database.ts"), dbJsonString, 'utf8');
    }
    catch (err) {
        console.log("An error occured while trying to write \"database\" to file: ".concat(err));
    }
};
exports.generateInMemoryDatabase = generateInMemoryDatabase;
(0, exports.generateInMemoryDatabase)(100);
