import type { IncomingMessage, ServerResponse } from "http";

const productController = (req:IncomingMessage , res:ServerResponse) =>{
   const url = req.url ;
   const method = req.method ;

   if(url === '/products' && method === 'GET'){
    const product = [
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
        },
        {
            id: 4 ,
            name: 'product -4 ',
            price:50
        }
    ]

    res.writeHead(200, {
        'Content-Type' : 'application/json'
      })
      res.end(JSON.stringify({message:'hello products',
        success:true, data:product},
      ))
}
else {
    res.writeHead(404,{'Content-Type': 'application/json'})
    res.end(JSON.stringify({massage:'Route not found' , success:false}))
}


   }




export default productController