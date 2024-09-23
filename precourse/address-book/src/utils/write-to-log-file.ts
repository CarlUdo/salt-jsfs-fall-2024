import { PROJECT_CONFIG } from "../config/project-config";
import { getLocaleDateObj } from "./date-functions";
import path from "path";
import { appendFileSync } from "fs";
import { getLogMessage } from "./get-log-message";
import { ErrorInfo } from "./types";

const { rootPath } = PROJECT_CONFIG;

// Will change to a asynchronously logging going forward
export const writeToLogFile = (logObj: ErrorInfo) => {
  const fileName = `error-${getLocaleDateObj().dateMedium}.txt`; // Makes a new log file every day 
	
	const filePath = path.join(rootPath, 'logs', 'error', fileName);

  const logMessage = getLogMessage(logObj);

	appendFileSync(filePath, logMessage);
};
