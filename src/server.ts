// server.mjs
import { createServer, IncomingMessage, Server, ServerResponse } from 'node:http';
import routeHandler from './routes/route';


const server : Server = createServer((req : IncomingMessage, res: ServerResponse) => {
     routeHandler(req, res)
})

// starts a simple http server locally on port 3000
server.listen(5000, () => {
  console.log('server in runing successfully');
});
// run with `node server.mjs`