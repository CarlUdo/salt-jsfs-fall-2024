import { Request, Response, NextFunction } from "express";
import { CustomError } from "../classes/Errors";

// Note! Even though next function isn't used it must come as a parameter or strange behaviour will occur
export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500; 

  console.log(`${err.name} (${statusCode}): ${err.message}`);

  res.status(statusCode).json({ message: err.message });
};
