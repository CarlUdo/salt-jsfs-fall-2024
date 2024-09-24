import { app } from "./api";

const host = '0.0.0.0';
const PORT = Number(process.env.LOCAL_HOST_PORT) || 4001;

app.listen(PORT, host, () => 
  console.log(`Server is listening to http://${host}/${PORT}`));
