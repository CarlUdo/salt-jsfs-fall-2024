import { Request, Response, NextFunction } from "express";
import { convertBytesToMB } from "../utils/utility-functions";
import { LengthRequired, PayloadTooLarge } from "../classes/Errors";

const REQUEST_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB

export const checkReqSize = (req: Request, res: Response, next: NextFunction) => {
  const contentLength = req.headers['content-length'] ? parseInt(req.headers['content-length']) : null; // Headers are case-insensitive

  if (!contentLength) { 
    const errorMessage = `Header "Content-length" must be set`;
    
		return next(new LengthRequired(errorMessage));  
	} 

  if (contentLength > REQUEST_SIZE_LIMIT) {
    const errorMessage = `The content you are trying to send is ${convertBytesToMB(contentLength, 2)} MB.` + 
      `Max limit is ${REQUEST_SIZE_LIMIT}`;

    return next(new PayloadTooLarge(errorMessage)); 
	}

  next();
};
