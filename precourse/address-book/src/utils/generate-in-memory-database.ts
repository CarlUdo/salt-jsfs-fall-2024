import { generatePeople } from "./generate-people";
import { writeFileSync } from 'fs'
import { PROJECT_CONFIG } from "../config/project-config";

const { rootPath } = PROJECT_CONFIG;

export const generateInMemoryDatabase = (numberOfPersons: number) => {
  const db = generatePeople(numberOfPersons);

  const dbJsonString = JSON.stringify(db, null, 2);

  try {
    writeFileSync(`${rootPath}/src/database/people-database.ts`, dbJsonString, 'utf8');
  } catch (err) {
    console.log(`An error occured while trying to write "database" to file: ${err}`);
  }  
};
