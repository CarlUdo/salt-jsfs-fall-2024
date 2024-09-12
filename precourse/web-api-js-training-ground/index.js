import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  const htmlPage = fs.readFileSync('./static/index.html', { encoding: 'utf-8'});
  res.end(htmlPage);
});

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}/${port}/`)
});
