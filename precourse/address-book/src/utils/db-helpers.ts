import { db } from "../database/people-database";

export const findPersonInDb = (id: string) => db.find(user => user.userId === id);
