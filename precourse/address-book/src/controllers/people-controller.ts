import { Request, Response } from 'express';
import { db } from '../database/people-database';
import { findPersonInDb } from '../utils/db-helpers';

export const getPeople = ((req: Request, res: Response) => {
  res.json(db); 
});

export const getPerson = ((req: Request, res: Response) => {
  const { id } = req.params;

  const user = findPersonInDb(id);

  const statusCode = user ? 200 : 404;

  res.status(statusCode).json(statusCode === 200 ? user : { error: `No user with id ${id} exists in database.` });  
});  
