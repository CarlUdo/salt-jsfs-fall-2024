import * as path from 'path';
import { generateInMemoryDatabase } from '../utils/generate-in-memory-database';

const configPath = path.resolve(__dirname);

generateInMemoryDatabase(100);

export const PROJECT_CONFIG = {
  rootPath: path.dirname(path.dirname(configPath)), // Move up two levels in the directory structure
};
