const express = require('express');

const app  = express();

app.get('/hello',(req,res)=>{
    process.kill(process.pid,'SIGTERM');
    res.send('Hi');
})

const server = app.listen(4000,()=>{
    console.log('server listening in port 4000');
})

process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log('server closed gracefully');
    })
})