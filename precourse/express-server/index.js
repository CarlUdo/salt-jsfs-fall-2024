import express from "express";

const app = express();
const hostName = 'localhost';
const port = 3000;

const db = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@doe.com'
  },
];

app.get('/api/developers', (req, res) => {
  res.json(db);
});

app.listen(port, hostName, () => {
  console.log(`Server running on http://${hostName}:${port}`);
});
