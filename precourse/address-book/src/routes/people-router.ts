import express from 'express';
import { getPeople, getPerson, createPerson, updatePersonPartial, updatePerson, deletePerson } from '../controllers/people-controller';

export const peopleRouter = express.Router();

peopleRouter.get('/', getPeople);
peopleRouter.get('/:id', getPerson);
peopleRouter.post('/', createPerson);
peopleRouter.patch('/:id', updatePersonPartial);
peopleRouter.put('/:id', updatePerson);
peopleRouter.delete('/:id', deletePerson);