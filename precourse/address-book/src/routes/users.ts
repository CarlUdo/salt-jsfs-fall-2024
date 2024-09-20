import express from 'express';
import { getAllUsers } from '../controllers/users-controller';

export const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
