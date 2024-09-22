import express from 'express';
import { peopleRouter } from './routes/people-router';
import { errorHandler } from './middlewares/error-handler';
import morgan from 'morgan';
import path from 'path';
import { wrongRoute } from './middlewares/wrong-route';
// Uncomment below to generate a database for development purposes
// import { generateInMemoryDatabase } from './utils/generate-in-memory-database';
// generateInMemoryDatabase(100);  

const app = express();

const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;

app.use(morgan('tiny'));

app.use(express.json({ limit: '5mb' }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/api/people', peopleRouter);  

app.use(wrongRoute);

app.use(errorHandler);

app.listen(PORT, host, () => 
  console.log(`Server is listening to http://${host}/${PORT}`));
