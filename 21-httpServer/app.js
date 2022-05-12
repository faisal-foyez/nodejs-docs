const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end(`<h1>Hello, World!</h1>`)
})
const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
  console.log(`server listening on port ${PORT}`);
})

/**
 * The callback function we pass is the one that's going to be executed 
 * upon every request that comes in. Whenever a new request is received, 
 * the request event is called, providing two objects: a request (an http.IncomingMessage object) 
 * and a response (an http.ServerResponse object).
 */

/**
 * request provides the request details. Through it, we access the request headers and request data.
 * 
 * response is used to populate the data we're going to return to the client.
 */