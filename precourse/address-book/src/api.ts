import express from 'express';
import { peopleRouter } from './routes/people-router';
import { errorHandler } from './middlewares/error-handler';
import morgan from 'morgan';
import path from 'path';
import { wrongRoute } from './middlewares/wrong-route';
import { PROJECT_CONFIG } from './config/project-config';
const { createStream } = require('rotating-file-stream');

const rootPath  = PROJECT_CONFIG.rootPath;

const createLogStream = async () => {
  return createStream('access.log', {
    interval: '1d', // rotate daily
    path:  path.join(rootPath, 'logs', 'common')
  });
}

export const app = express();

(async () => {
  const logStream = await createLogStream();

  app.use(morgan('combined', { stream: logStream }));

  app.use(express.json({ limit: '5mb' }));

  app.use(express.static(path.join(rootPath, 'src', 'static', 'html')));

  app.use('/api/people', peopleRouter);  

  app.use(wrongRoute);

  app.use(errorHandler);
})();
