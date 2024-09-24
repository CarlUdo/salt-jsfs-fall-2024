import { app } from './api.js';

const hostName = '0.0.0.0';
const port = 3000;

app.listen(port, hostName, () => {
  console.log(`Server running on http://${hostName}:${port}`);
});
