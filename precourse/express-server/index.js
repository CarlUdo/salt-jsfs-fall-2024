import express from 'express';

const app = express();
const port = 3000;
const hostName = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello fellow developer!');
});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}/${port}/`);
});
