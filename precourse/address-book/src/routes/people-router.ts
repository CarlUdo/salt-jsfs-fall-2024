import express from 'express';
import { getPeople, getPerson, createPerson, updatePerson } from '../controllers/people-controller';

export const peopleRouter = express.Router();

peopleRouter.get('/', getPeople);
peopleRouter.get('/:id', getPerson);
peopleRouter.post('/', createPerson);
peopleRouter.patch('/:id', updatePerson);
