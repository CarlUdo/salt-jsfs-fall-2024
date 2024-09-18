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

// const getUser = id => {
//   for (let i = 0; i < db.length; i++) {
//     if (id === db[i].id) {      
//       return db[i];
//     }  
//   }

//   return {
//     error: `No user with id ${id} exists in database.`
//   };
// };

const getUser = id => {
  return db.find(user => user.id === id);
};

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome Salty!</h1>');
});

app.get('/api/developers/', (req, res) => {
  res.json(db);
});

app.get('/api/developers/:id', (req, res) => {
  const { id } = req.params;

  const user = getUser(Number(id));

  const statusCode = user ? 200 : 404;

  res.status(statusCode).json(statusCode === 200 ? user : { error: `No user with id ${id} exists in database.` });
});

app.post('/api/developers/', (req, res) => {
  console.log(req.body);
  res.status(201).send();
});

app.listen(port, hostName, () => {
  console.log(`Server running on http://${hostName}:${port}`);
});
