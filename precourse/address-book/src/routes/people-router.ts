import express from 'express';
import { getPeople, getPerson } from '../controllers/people-controller';

export const peopleRouter = express.Router();

peopleRouter.get('/', getPeople);
peopleRouter.get('/:id', getPerson);
