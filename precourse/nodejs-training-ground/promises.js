import fetch from 'node-fetch';
import { readFile, promises as fsPromises } from 'fs';

fetch('https://randomuser.me/api/?results=30')
  .then(response => response.json())
  .then(data => {
    throw new Error('This is the error that I made');
  } /* data.results */)
  .then(results => console.log(`We got ${results.length} rows.`))
  .catch(err => console.log(`Something went wrong: ${err}`));

// readFile('thisFileDoesNotExist', 'utf8', (err, file) => {
//   if (err) {
//     console.log(`We got an error: ${err}`);
//   }

//   console.log(`The file has ${file.split('\n').length} lines.`);
// });

// getResponseFromUrl('https://randomuser.me/api/', (err, response) => {
//   if (err) {
//     console.log('getResponseFromUrl returned an error');
//     return;
//   }

//   getJsonFromResponse(response, (err, data) => {
//     if (err) {
//       console.log('getJsonFromResponse returned an error');
//       return;
//     }

//     getResultsObject(data, (err, results) => {
//       if (err) {
//         console.log('getResultsObject returned an error');
//         return;
//       }

//       console.log(`We got ${results.length} rows.`);      
//     }) 
//   });
// });

fsPromises.
  readFile('promises.js', 'utf-8')
  .then(file => console.log(`The file has ${file.split('\n').length} lines.`))
  .catch(err => console.log(`We got an error: ${err}`));
