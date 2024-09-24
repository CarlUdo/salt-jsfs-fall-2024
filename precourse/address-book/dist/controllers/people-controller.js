"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.updatePerson = exports.updatePersonPartial = exports.createPerson = exports.getPerson = exports.getPeople = void 0;
const people_database_1 = require("../database/people-database");
const db_helpers_1 = require("../utils/db-helpers");
const type_guards_1 = require("../utils/type-guards");
exports.getPeople = ((req, res, next) => {
    try {
        res.json(people_database_1.db);
    }
    catch (err) {
        next(err);
    }
});
exports.getPerson = ((req, res, next) => {
    try {
        const { id } = req.params;
        const person = (0, db_helpers_1.findPersonInDb)(id);
        const statusCode = person ? 200 : 404;
        const response = person ?? { error: `No person with id ${id} exists in database.` };
        res.status(statusCode).json(response);
    }
    catch (err) {
        next(err);
    }
});
exports.createPerson = ((req, res, next) => {
    try {
        const createdPerson = (0, db_helpers_1.createPersonInDb)(req.body);
        if ((0, type_guards_1.isCreatedPerson)(createdPerson))
            return res.status(201).set('Location', `/api/developers/${createdPerson.userId}`).json(createdPerson);
        res.status(400).json({ error: createdPerson.error });
    }
    catch (err) {
        next(err);
    }
});
exports.updatePersonPartial = ((req, res, next) => {
    try {
        const { id } = req.params;
        const updatedPerson = (0, db_helpers_1.updatePersonPartitialInDb)(id, req.body);
        if ((0, type_guards_1.isCreatedPerson)(updatedPerson))
            return res.status(200).json(updatedPerson);
        res.status(400).json({ error: updatedPerson.error });
    }
    catch (err) {
        next(err);
    }
});
exports.updatePerson = ((req, res, next) => {
    try {
        const { id } = req.params;
        const updatedPerson = (0, db_helpers_1.updatePersonInDb)(id, req.body);
        if ((0, type_guards_1.isCreatedPerson)(updatedPerson))
            return res.status(200).json(updatedPerson);
        res.status(400).json({ error: updatedPerson.error });
    }
    catch (err) {
        next(err);
    }
});
exports.deletePerson = ((req, res, next) => {
    try {
        const { id } = req.params;
        const isPersonDeleted = (0, db_helpers_1.deletePersonInDb)(id);
        if (!isPersonDeleted.error)
            return res.status(204).send();
        res.status(404).send({ error: isPersonDeleted.error });
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=people-controller.js.map