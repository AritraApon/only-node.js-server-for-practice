import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/products.controller";


const routeHandler = (req:IncomingMessage , res:ServerResponse) =>{
  const url = req.url;
 const method = req.method;

 if(url === '/' && method === 'GET') {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
 }
 else if(url?.startsWith("/products") ) {
      productController(req , res)

 }

 else {
   res.writeHead(404,{'Content-Type': 'application/json'})
    res.end(JSON.stringify({massage:'Route not found' , success:false}))
 }



}

export default routeHandler