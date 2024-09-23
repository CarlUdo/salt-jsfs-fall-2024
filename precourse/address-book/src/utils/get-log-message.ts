import { getLocaleDateObj } from "./date-functions";
import { isErrorInfo } from "./type-guards";
import { ErrorInfo } from "./types";

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
