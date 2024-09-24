import express from "express";

export const app = express();

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

const getUser = id => {
  return db.find(user => user.id === id);
};

const addUser = user => {
  if (!user.name) return { error: `Property "name" is missing` };
  if (!user.email) return { error: `Property "email" is missing` };
  
  const highestID = db[db.length - 1].id;
  const newId = highestID + 1;

  const newUser = {
    id: newId,
    name: user.name,
    email: user.email,
  };

  db.push(newUser);

  return newUser;
};

const deleteUser = id => {
  for (let i = 0; i < db.length; i++) {
    if (id === db[i].id) {
      db.splice(i, 1);
      return true;
    }
  }

  return false;
};

const updateUser = (id, update) => {  
  for (let i = 0; i < db.length; i++) {
    if (id === db[i].id) {
      return db[i] = { ...db[i], ...update };
    }
  }

  return false;
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
  const newUser = addUser(req.body);

  if (newUser.error) {
    res.status(400).json({ error: newUser.error});
  }

  res.status(201).set('Location', `/api/developers/${newUser.id}`).json(newUser);
});

app.delete('/api/developers/:id', (req, res) => {
  const { id } = req.params;

  const isSuccessful = deleteUser(Number(id));

  isSuccessful ? res.status(204).send() : res.status(404).send({ error: `No user with id ${id} exists in database.` });  
});

app.patch('/api/developers/:id', (req, res) => {
  const { id } = req.params;

  const user = updateUser(Number(id), req.body);

  user ? res.status(200).json(user) : res.status(404).send({ error: `No user with id ${id} exists in database.` });  
});

app.put('/api/developers/:id', (req, res) => {
  const { id } = req.params;

  const user = updateUser(Number(id), req.body);

  user ? res.status(200).json(user) : res.status(404).send({ error: `No user with id ${id} exists in database.` });  
});
