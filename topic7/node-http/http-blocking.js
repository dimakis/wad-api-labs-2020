/* eslint-disable no-console */
import http from 'http';

const port = 8080;

const server = http.createServer((req, res) => {
     res.writeHead(200);
     //Gets a random number
     let n = 100; 
        
     //nested for loop is O(n^2). Not good for big n!!!
          for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
              console.log(`Iter ${i}.${j}`);
            }
          }
     
     res.end("Finished Counting");
});

server.listen(port);
console.log(`Server running at ${port}`);