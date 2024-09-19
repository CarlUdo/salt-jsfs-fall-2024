import { generatePeople } from "./generate-people"

export const generateInMemoryDatabase = (numberOfPersons: number) => {
  const db = generatePeople(numberOfPersons);

  // write database to file
  
};
