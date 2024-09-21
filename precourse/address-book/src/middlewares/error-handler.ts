import { Request, Response, NextFunction } from "express";
import { getErrorInformation } from "../utils/get-error-information";

// Note! Even though next function isn't used it must come as a parameter or strange behaviour will occur
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const errorInformation = getErrorInformation(err);

  console.log(errorInformation);

  res.status(errorInformation.status).json({ message: errorInformation.message });
};
