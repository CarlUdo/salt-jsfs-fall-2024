import express from 'express';
import { peopleRouter } from './routes/people-router';
import { errorHandler } from './middlewares/error-handler';
import morgan from 'morgan';
import path from 'path';
import { wrongRoute } from './middlewares/wrong-route';
import { PROJECT_CONFIG } from './config/project-config';

const rootPath  = PROJECT_CONFIG.rootPath;

export const app = express();

(async () => {
  const rfs = await import('rotating-file-stream');

  const logStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(rootPath, 'logs', 'common')
  });

  app.use(morgan('combined', { stream: logStream }));

  app.use(express.json({ limit: '5mb' }));

  app.use(express.static(path.join(__dirname, 'static')));

  app.use('/api/people', peopleRouter);  

  app.use(wrongRoute);

  app.use(errorHandler);
})();
