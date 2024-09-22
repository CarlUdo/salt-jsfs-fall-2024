import { db } from "../database/people-database";
import type { Person } from "./types";
import { faker } from "@faker-js/faker";

export const findPersonInDb = (id: string) => db.find(user => user.userId === id);

export const createPersonInDb = (person: Person) => {
  if (!person.fullName) return { error: `Property "fullName" is missing` };
  if (!person.email) return { error: `Property "email" is missing` };
  if (!person.address) return { error: `Property "address" is missing` };

  const createdPerson = { userId: faker.string.uuid(), ...person };

  db.push(createdPerson);

  return createdPerson; 
};
