import express from 'express';
import { Request, Response } from 'express';
import { generateInMemoryDatabase } from './utils/generate-in-memory-database';

const db = generateInMemoryDatabase(100);

const app = express();

const host = '0.0.0.0';
const port = 3000;
      
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Welcome to this address application!</h1>`);
});

app.listen(port, host, () => 
  console.log(`Server is listening to http://${host}/${port}`));
