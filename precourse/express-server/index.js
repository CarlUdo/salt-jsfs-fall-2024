import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const hostName = 'localhost';

app.use(morgan('tiny'));

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.send('Hello fellow developer!');
});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
