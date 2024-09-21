import { Request, Response } from 'express';
import { db } from '../database/people-database';

export const getPeople = ((req: Request, res: Response) => {
  res.json(db); 
});
  
