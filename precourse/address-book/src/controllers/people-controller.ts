import { NextFunction, Request, Response } from 'express';
import { db } from '../database/people-database';
import { createPersonInDb, deletePersonInDb, findPersonInDb, updatePersonInDb, updatePersonPartitialInDb } from '../utils/db-helpers';
import { isCreatedPerson } from '../utils/type-guards';

export const getPeople = ((req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(db); 
  } catch (err) {
    next(err);
  }  
});

export const getPerson = ((req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const person = findPersonInDb(id);

    const statusCode = person ? 200 : 404;

    const response = person ?? { error: `No person with id ${id} exists in database.` };

    res.status(statusCode).json(response);  
  } catch (err) {
    next(err);
  }  
});  

export const createPerson = ((req: Request, res: Response, next: NextFunction) => {
  try {
    const createdPerson = createPersonInDb(req.body);

    if (isCreatedPerson(createdPerson)) 
      return res.status(201).set('Location', `/api/developers/${createdPerson.userId}`).json(createdPerson);   
    
    res.status(400).json({ error: createdPerson.error});
  } catch (err) {
    next(err);
  }
});

export const updatePersonPartial = ((req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const updatedPerson = updatePersonPartitialInDb(id, req.body);

    if (isCreatedPerson(updatedPerson)) return res.status(200).json(updatedPerson);  
    
    res.status(400).json({ error: updatedPerson.error});
  } catch (err) {
    next(err);
  }
});

export const updatePerson = ((req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const updatedPerson = updatePersonInDb(id, req.body);

    if (isCreatedPerson(updatedPerson)) return res.status(200).json(updatedPerson);  
    
    res.status(400).json({ error: updatedPerson.error});
  } catch (err) {
    next(err);
  }
  
});

export const deletePerson = ((req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const isPersonDeleted = deletePersonInDb(id);

    if (!isPersonDeleted.error) return res.status(204).send();  

    res.status(404).send({ error: isPersonDeleted.error });
  } catch (err) {
    next(err);
  }
});
