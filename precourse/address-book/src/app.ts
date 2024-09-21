import express from 'express';
import { usersRouter } from './routes/users';
import { checkReqSize } from './middlewares/check-req-size';
import { errorHandler } from './middlewares/error-handler';
// Uncomment below to generate a database for development purposes
/* import { generateInMemoryDatabase } from './utils/generate-in-memory-database';
generateInMemoryDatabase(100);  */ 

const app = express();

const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;

app.use(express.json({ limit: '5mb' }));

app.use(errorHandler);

app.listen(PORT, host, () => 
  console.log(`Server is listening to http://${host}/${PORT}`));
