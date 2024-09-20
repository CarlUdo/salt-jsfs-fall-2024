import { Request, Response, NextFunction } from "express";
import { convertBytesToMB } from "../utils/utility-functions";

const REQUEST_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB

const checkReqSize = (req:Request, res:Response, next: NextFunction) => {
  const contentLength = req.headers['content-length'] ? parseInt(req.headers['content-length']) : null; // Headers are case-insesisitive
  
  if (!contentLength) { 
		throw new Error(`Header "Content-length" must be set`);  
	} 

  if (contentLength > REQUEST_SIZE_LIMIT) {
    const errorMessage = `The content you are trying to send is ${convertBytesToMB(contentLength, 2)} MB.` + 
      `Max limit is ${REQUEST_SIZE_LIMIT}`;
		throw new Error(errorMessage); 
	}

  next();
};

export default checkReqSize;
