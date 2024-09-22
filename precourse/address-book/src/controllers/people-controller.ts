import { Request, Response } from 'express';
import { db } from '../database/people-database';
import { createPersonInDb, findPersonInDb, updatePersonInDb } from '../utils/db-helpers';
import { isCreatedPerson } from '../utils/type-guards';

export const getPeople = ((req: Request, res: Response) => {
  res.json(db); 
});

export const getPerson = ((req: Request, res: Response) => {
  const { id } = req.params;

  const person = findPersonInDb(id);

  const statusCode = person ? 200 : 404;

  const response = person ?? { error: `No person with id ${id} exists in database.` };

  res.status(statusCode).json(response);  
});  

export const createPerson = ((req: Request, res: Response) => {
  const createdPerson = createPersonInDb(req.body);

  if (isCreatedPerson(createdPerson)) 
    return res.status(201).set('Location', `/api/developers/${createdPerson.userId}`).json(createdPerson);   
  
  res.status(400).json({ error: createdPerson.error});
});

export const updatePerson = ((req: Request, res: Response) => {
  const { id } = req.params;

  const createdPerson = updatePersonInDb(id, req.body);

  if (isCreatedPerson(createdPerson)) return res.status(200).json(createdPerson);  
  
  res.status(400).json({ error: createdPerson.error});
});
