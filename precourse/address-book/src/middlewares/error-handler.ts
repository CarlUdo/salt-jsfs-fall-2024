import { Request, Response, NextFunction } from "express";
import { getErrorInformation } from "../utils/get-error-information.js";
import { writeToLogFile } from "../utils/write-to-log-file.js";

// Note! Even though next function isn't used it must come as a parameter or strange behaviour will occur
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  try {
    const errorInformation = getErrorInformation(err);

    res.status(errorInformation.status).json({ message: errorInformation.message });

    writeToLogFile(errorInformation);
  } catch (err) {
    console.log('Error within errorHandler: ', err);
    const errorInformation = getErrorInformation(err);    
    writeToLogFile(errorInformation);
    res.status(errorInformation.status).json({ message: errorInformation.message });
  }  
};
