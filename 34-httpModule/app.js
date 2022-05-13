const log = console.log;
const http = require('http');

const server = http.createServer((req,res)=>{
  req.sta
})
/******************************* http Properties ************************************/
log(http.METHODS); //["GET","POST","PUT","DELETE","PATCH","COPY",........etc.]

log(http.STATUS_CODES) //{'100':'Continuing',...,'200':'OK','201':'Created','202':'Accepted'....etc}

log(http.globalAgent) //Points to the global instance of the Agent object, 
                      //which is an instance of the http.Agent class.
                      //It's used to manage connections persistence and reuse for HTTP clients, 
                      //and it's a key component of Node.js HTTP networking.
////////////////////////////////////////////////////////////////////////////////////////


/******************************* http METHODS ************************************/
log(http.createServer()); //Returns a new instance of the http.Server class.

log(http.request()) //Makes an HTTP request to a server, creating an instance of the http.ClientRequest class.

log(http.get()) //Similar to http.request(), but automatically sets the HTTP method to GET, 
                //and calls req.end() automatically.
////////////////////////////////////////////////////////////////////////////////////////


/******************************* http CLASSES ************************************/
log(http.Agent); //Node.js creates a global instance of the http.Agent class to manage 
                 //connections persistence and reuse for HTTP clients, 
                 //a key component of Node.js HTTP networking.

log(http.ClientRequest) //An http.ClientRequest object is created when http.request() or http.get() is called.

log(http.Server) //when http.createServer() is called it returns instance of Server class
                 //which has two methods i)close() ii)listen()

log(http.ServerResponse) //In http.createServer((req,res)=>{}) method res is basically instance of 
                          //ServerResponse

log(http.IncomingMessage) 
                          //An http.IncomingMessage object is created by:
                                                          //req is IncomingMessage type
                          //http.Server (http.createServer((req,res)=>{}) ) when listening to the request event
                          //http.ClientRequest when listening to the response event

                          // statusCode and statusMessage properties
                          // headers method or rawHeaders properties
                          // HTTP method using its method property
                          // HTTP version using the httpVersion property
                          // URL using the url property
                          // underlying socket using the socket property

////////////////////////////////////////////////////////////////////////////////////////