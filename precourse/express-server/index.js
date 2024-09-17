import express from "express";

const app = express();
const hostName = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  const dev = {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com'
  }

  res.status(201).set('location', '/api/developers/1').json(dev);
});

app.listen(port, hostName, () => {
  console.log(`Server running on http://${hostName}:${port}`);
});
