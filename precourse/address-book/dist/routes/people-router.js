"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.peopleRouter = void 0;
const express_1 = __importDefault(require("express"));
const people_controller_1 = require("../controllers/people-controller");
exports.peopleRouter = express_1.default.Router();
exports.peopleRouter.get('/', people_controller_1.getPeople);
exports.peopleRouter.get('/:id', people_controller_1.getPerson);
exports.peopleRouter.post('/', people_controller_1.createPerson);
exports.peopleRouter.patch('/:id', people_controller_1.updatePersonPartial);
exports.peopleRouter.put('/:id', people_controller_1.updatePerson);
exports.peopleRouter.delete('/:id', people_controller_1.deletePerson);
//# sourceMappingURL=people-router.js.map