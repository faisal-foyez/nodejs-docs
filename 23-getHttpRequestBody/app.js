//To get the body data in node.js (not using express.js)

const http = require('http');
const server = http.createServer((req,res)=>{
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })

  req.on('end', ()=>{
    console.log(JSON.parse(data).todo);
    res.end();
  })
})

/**
 * Starting from Node.js v10 a for await .. of syntax is available for use. 
 * It simplifies the example above and makes it look more linear:
 */
const server2 = http.createServer(async (req,res)=>{
  let buffers = [];

  for await (const chunk of req){
    buffers.push(chunk);
  }
  const data = Buffer.concat(buffers).toString();

  console.log(JSON.parse(data).todo);
  res.end();

})