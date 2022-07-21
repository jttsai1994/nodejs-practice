const http = require('http');

// const routes = require('./routes') //從routes引用裡面有module.export的function
const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
    console.log('this always runs');
    next();
});

app.use('/add-product',(req,res,next)=>{
    console.log('in the middleware');
    res.send('<h1>add product page</h1>')
    // next() //Allows the request to continue to the next middleware in line
});
app.use('/',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1>hello from express</h1>')
});
const server = http.createServer(app);

server.listen(3000);