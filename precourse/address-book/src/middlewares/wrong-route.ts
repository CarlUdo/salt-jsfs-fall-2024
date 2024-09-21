import { Request, Response } from "express";
import path from "path";
import { PROJECT_CONFIG } from "../config/project-config";

export const wrongRoute = ((req:Request, res: Response) => {
  const { rootPath } = PROJECT_CONFIG;
  res.status(404).sendFile(path.join(rootPath, 'src', 'static', '404.html'));
});
