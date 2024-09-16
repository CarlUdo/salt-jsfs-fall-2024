import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const url = req.url;

  const regex = /^\/static\/.*/;

  if (regex.test(url) || url === '/static' || url === '/'/*  || url === '/favicon.ico' */) {
    res.statusCode = 200;
  
    res.setHeader('Content-type', 'text/html');
  
    const htmlPage = fs.readFileSync(`./static/index.html`, { encoding: 'utf-8'});
    
    res.end(htmlPage);
  } else {
    res.statusCode = 404;
    
    res.setHeader('Content-type', 'text/plain');

    res.end('');
  }
});

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}/${port}/`)
});
