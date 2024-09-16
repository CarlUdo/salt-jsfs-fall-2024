import http from 'http';
import { readFileSync, readdirSync } from 'fs';

const server = http.createServer((req, res) => {
  const url = req.url;

  res.statusCode = 200;

  res.setHeader('Content-type', 'text/html');

  const staticFolder = '/static';

  let htmlPage = ''; 

  if (url === '/' || url === staticFolder || url === `${staticFolder}/`) {
    htmlPage = readFileSync(`.${staticFolder}/index.html`, { encoding: 'utf-8'});
    return res.end(htmlPage);
  }  
  
  const pageNotFound = res => {
    res.statusCode = 404;
    htmlPage = readFileSync(`.${staticFolder}/404.html`, { encoding: 'utf-8'});
    return res.end(htmlPage);
  };  

  const checkUrl = (url, validRegex) => {
    const urlObj = {
      validUrl: false,
      fileNameInUrl: '',
    };

    let fileNameInUrl = '';
    
    const restOfUrl = url.match(validRegex)[1];

    if (!restOfUrl.includes('/') || (restOfUrl.includes('/') && restOfUrl.split('/')[1] === '')) {
      if (restOfUrl.includes('/')) {
        fileNameInUrl = restOfUrl.split('/')[0];
      } else {        
        fileNameInUrl = restOfUrl;
      }

      const fileNamesOnServer = readdirSync(`./${staticFolder}`);

      if (fileNameInUrl.includes('.')) { 
        for (let i = 0; i < fileNamesOnServer.length; i++) {          
          if (fileNameInUrl === fileNamesOnServer[i]) {
            urlObj.validUrl = true;
            urlObj.fileNameInUrl = fileNameInUrl;
            break;
          }
        }
      } else {
        if (fileNameInUrl === 'index') {
          urlObj.validUrl = true;
          urlObj.fileNameInUrl = 'index.html';
        }
      }
    } 

    return urlObj;
  };

  const regex = /^\/static\/(.*)/;

  if (regex.test(url)) {    
    const { validUrl, fileNameInUrl } = checkUrl(url, regex);

    if (validUrl) {
      htmlPage = readFileSync(`.${staticFolder}/${fileNameInUrl}`, { encoding: 'utf-8'});
      return res.end(htmlPage);
    }        
  }

  pageNotFound(res);
});

const hostName = 'localhost';
const port = 3000;

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}/${port}/`)
});
