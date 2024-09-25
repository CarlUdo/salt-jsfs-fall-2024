import { db } from "../database/people-database.js";
import { isPerson, isPersonProperties } from "./type-guards.js";
import type { CompletePerson, Person } from "../types/types.js";
import { faker } from "@faker-js/faker";

export const findPersonInDb = (id: string) => db.find(user => user.userId === id);

export const createPersonInDb = (person: Person) => {
  if (!isPerson(person)) return { error: `The person you're trying to create is of invalid format: ${person}` };

  const createdPerson = { userId: faker.string.uuid(), ...person };

  db.push(createdPerson);

  return createdPerson; 
};

export const updatePersonPartitialInDb = (id: string, person: Partial<CompletePerson>) => {
  if (!isPersonProperties(person)) return { error: `One or several properties are wrong: ${person}` };

  for (let i = 0; i < db.length; i++) {
    if (id === db[i].userId) {
      return db[i] = { ...db[i], ...person };
    }
  }

  return { error: `Person with id ${id} couldn't be found` };
};

export const updatePersonInDb = (id: string, person: Person) => {
 if (!isPerson(person)) return { error: `Person is of wrong type: ${person}` };

  for (let i = 0; i < db.length; i++) {
    if (id === db[i].userId) {
      return db[i] = { ...db[i], ...person };
    }
  }

  return { error: `Person with id ${id} couldn't be found` };
};

export const deletePersonInDb = (id: string) => {
  for (let i = 0; i < db.length; i++) {
    if (id === db[i].userId) {
      db.splice(i, 1);
      return { deleted: true };
    }    
  }

  return { error: `Person with id ${id} couldn't be found` };
};
