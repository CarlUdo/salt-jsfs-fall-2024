import * as path from 'path';

const configPath = path.resolve(__dirname);

export const PROJECT_CONFIG = {
  rootPath: path.dirname(path.dirname(configPath)), // Move up two levels in the directory structure
};
