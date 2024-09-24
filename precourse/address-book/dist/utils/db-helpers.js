"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonInDb = exports.updatePersonInDb = exports.updatePersonPartitialInDb = exports.createPersonInDb = exports.findPersonInDb = void 0;
const people_database_1 = require("../database/people-database");
const type_guards_1 = require("./type-guards");
const faker_1 = require("@faker-js/faker");
const findPersonInDb = (id) => people_database_1.db.find(user => user.userId === id);
exports.findPersonInDb = findPersonInDb;
const createPersonInDb = (person) => {
    if (!(0, type_guards_1.isPerson)(person))
        return { error: `The person you're trying to create is of invalid format: ${person}` };
    const createdPerson = { userId: faker_1.faker.string.uuid(), ...person };
    people_database_1.db.push(createdPerson);
    return createdPerson;
};
exports.createPersonInDb = createPersonInDb;
const updatePersonPartitialInDb = (id, person) => {
    if (!(0, type_guards_1.isPersonProperties)(person))
        return { error: `One or several properties are wrong: ${person}` };
    for (let i = 0; i < people_database_1.db.length; i++) {
        if (id === people_database_1.db[i].userId) {
            return people_database_1.db[i] = { ...people_database_1.db[i], ...person };
        }
    }
    return { error: `Person with id ${id} couldn't be found` };
};
exports.updatePersonPartitialInDb = updatePersonPartitialInDb;
const updatePersonInDb = (id, person) => {
    if (!(0, type_guards_1.isPerson)(person))
        return { error: `Person is of wrong type: ${person}` };
    for (let i = 0; i < people_database_1.db.length; i++) {
        if (id === people_database_1.db[i].userId) {
            return people_database_1.db[i] = { ...people_database_1.db[i], ...person };
        }
    }
    return { error: `Person with id ${id} couldn't be found` };
};
exports.updatePersonInDb = updatePersonInDb;
const deletePersonInDb = (id) => {
    for (let i = 0; i < people_database_1.db.length; i++) {
        if (id === people_database_1.db[i].userId) {
            people_database_1.db.splice(i, 1);
            return { deleted: true };
        }
    }
    return { error: `Person with id ${id} couldn't be found` };
};
exports.deletePersonInDb = deletePersonInDb;
//# sourceMappingURL=db-helpers.js.map