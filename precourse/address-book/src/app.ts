import express from 'express';
//import { generateInMemoryDatabase } from './utils/generate-in-memory-database';
import { usersRouter } from './routes/users';
import checkReqSize from './middlewares/check-req-size';

// generateInMemoryDatabase(100); // Generates a db for development purposes. Uncomment to generate a database

const app = express();

const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;

app.use(checkReqSize);
      
app.use('/users', usersRouter);  

app.listen(PORT, host, () => 
  console.log(`Server is listening to http://${host}/${PORT}`));
