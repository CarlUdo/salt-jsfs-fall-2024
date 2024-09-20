import express from 'express';
import { Request, Response } from 'express';
import { generateInMemoryDatabase } from './utils/generate-in-memory-database';

generateInMemoryDatabase(100); // Generates a db for development purposes

const app = express();

const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;
      
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Welcome to this address application!</h1>`);
});

app.listen(PORT, host, () => 
  console.log(`Server is listening to http://${host}/${PORT}`));
