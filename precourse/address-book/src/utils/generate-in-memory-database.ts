import { generatePeople } from "./generate-people.js";
import { writeFileSync } from 'fs';
import { PROJECT_CONFIG } from "../config/project-config.js";

const { rootPath } = PROJECT_CONFIG;

// Note! Every time you generate a new database - tests in ~/tests/app.spec.ts must be updated accordingly
export const generateInMemoryDatabase = (numberOfPersons: number) => {
  try {
    const db = generatePeople(numberOfPersons);

    const importExportString = 'import type { CreatedPerson } from "../types/types.js";\n\n' +
      'export const db: CreatedPerson[] = ';

    const dbJsonString = `${importExportString}${JSON.stringify(db, null, 2)};\n`; 
  
    writeFileSync(`${rootPath}/src/database/people-database.ts`, dbJsonString, 'utf8');
  } catch (err) {
    console.log(`An error occured while trying to write "database" to file: ${err}`);
  }  
};

generateInMemoryDatabase(100);
