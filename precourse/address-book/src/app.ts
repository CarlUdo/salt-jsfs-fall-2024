import { app } from "./api.js";
const HOST = process.env.SERVER_HOST || 'localhost';
const PORT = Number(process.env.SERVER_PORT) || 4001;

app.listen(PORT, HOST, () => 
  console.log(`Server is listening to http://${HOST}/${PORT}`));
