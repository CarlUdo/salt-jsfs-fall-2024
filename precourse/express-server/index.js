import express from "express";

const app = express();
const hostName = 'localhost';
const port = 3000;

app.use('/', (req, res) => {
  res.send('Welcome Salty');
});

app.listen(port, hostName, () => {
  console.log(`Server running on http://${hostName}:${port}`);
});
