/**
 * Like axios.get('url') request
 */

const https = require('https');

const options = {
  hostname:'example.com',
  port:443,
  method:'GET',
  path:'/todos'
}

const req = https.request(options, res=>{
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', d =>{
    process.stdout.write(d);
  })
})

req.on('error', error=>{
  console.error(error);
})

req.end();

/**
 * Like axios.post('url',data) request
 */
const data = JSON.stringify({
  todo: 'Buy the milk'
})

const postOptions = {
  hostname: 'example.com',
  port: 443,
  method: 'POST',
  path: '/todos',
  headers:{
    'Content-Type':'application/json',
    'Content-Length':data.length
  }
}

const postReq = https.request(postOptions, res => {
  console.log(res.statusCode);

  res.on('data', d => {
    process.stdout.write(d);
  })
})

postReq.on('error', error =>{
  console.error(error);
})

postReq.write(data);
postReq.end();