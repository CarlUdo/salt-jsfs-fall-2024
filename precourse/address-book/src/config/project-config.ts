import path from 'path';
import { fileURLToPath } from 'url';

const configPath = path.dirname(fileURLToPath(import.meta.url));

export const PROJECT_CONFIG = {
  rootPath: path.dirname(path.dirname(configPath)) // Move up two levels in the directory structure
};
