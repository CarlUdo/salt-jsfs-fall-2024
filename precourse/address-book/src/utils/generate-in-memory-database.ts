import { generatePeople } from "./generate-people";
import { writeFileSync } from 'fs';
import { PROJECT_CONFIG } from "../config/project-config";

const { rootPath } = PROJECT_CONFIG;

export const generateInMemoryDatabase = (numberOfPersons: number) => {
  try {
    const db = generatePeople(numberOfPersons);

    const importExportString = 'import type { CreatedPerson } from "../utils/types";\n\n' +
      'export const db: CreatedPerson[] = ';

    const dbJsonString = `${importExportString}${JSON.stringify(db, null, 2)};\n`; 
  
    writeFileSync(`${rootPath}/src/database/people-database.ts`, dbJsonString, 'utf8');
  } catch (err) {
    console.log(`An error occured while trying to write "database" to file: ${err}`);
  }  
};

generateInMemoryDatabase(100);
