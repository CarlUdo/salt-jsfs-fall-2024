import { getLocaleDateObj } from "./date-functions.js";
import { isErrorInfo } from "./type-guards.js";
import { ErrorInfo } from "../types/types.js";

const divider = `\n-------------------------------------------------------------------------------------\n`;

export const getLogMessage = (logObj: ErrorInfo) => {
  const date = getLocaleDateObj().dateFull;
  let messageText = '';

  if (isErrorInfo(logObj)) {
    messageText = `${logObj.name}(${logObj.status}): ${logObj.message} | ${logObj.type}\n${logObj.stack}`;
  } else {
    messageText = `Couldn't generate an error message`;
  }

  return `Date: ${date}\n${messageText}${divider}` ;
};
