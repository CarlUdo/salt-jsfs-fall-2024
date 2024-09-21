import express from 'express';
import { getPeople } from '../controllers/people-controller';

export const peopleRouter = express.Router();

peopleRouter.get('/', getPeople);
