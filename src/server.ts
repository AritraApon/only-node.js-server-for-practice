// server.mjs
import { createServer, IncomingMessage, Server, ServerResponse } from 'node:http';
import { json } from 'node:stream/consumers';

const server : Server = createServer((req : IncomingMessage, res: ServerResponse) => {

 const url = req.url;
 const methord = req.method;

 if(url === '/' && methord === 'GET') {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
 }
 else if(url?.startsWith("/products") ) {
      res.writeHead(200, {
        'Content-Type' : 'application/json'
      })
      res.end(JSON.stringify([{message:'hello products',succuss:true},
        {
            id: 1 ,
            name: 'product -1 ',
            price:20
        },
        {
            id: 2 ,
            name: 'product -2 ',
            price:30
        },
        {
            id: 3 ,
            name: 'product -3 ',
            price:40
        }
      ]



      ))
 }

 else {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found\n');
 }


});

// starts a simple http server locally on port 3000
server.listen(5000, () => {
  console.log('server in runing successfully');
});
// run with `node server.mjs`