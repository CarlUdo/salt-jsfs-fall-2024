import { Request, Response } from 'express';
import { db } from '../database/people-database';

export const getAllUsers = ((req: Request, res: Response) => res.json(db)); 
