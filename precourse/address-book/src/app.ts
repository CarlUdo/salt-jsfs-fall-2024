import express from 'express';
import { generateInMemoryDatabase } from './utils/generate-in-memory-database';
import { usersRouter } from './routes/users';

generateInMemoryDatabase(100); // Generates a db for development purposes

const app = express();

const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;
      
app.use('/users', usersRouter);  

app.listen(PORT, host, () => 
  console.log(`Server is listening to http://${host}/${PORT}`));
