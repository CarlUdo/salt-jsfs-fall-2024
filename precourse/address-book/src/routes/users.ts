import express from 'express';
import { getAllUsers } from '../controllers/usersController';

export const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
