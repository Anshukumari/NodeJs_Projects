//const http = require('http');

const express= require('express');

const app = express();
app.use('/',(req,res,next)=>{
    console.log("Always run");
    next();
});
app.use('/add-product',(req,res,next)=>{
    console.log("In a middleware");
    res.send('<h1>Hello from "Add product page".</h1>');
});
app.use('/',(req,res,next)=>{
    console.log("In another middleware");
    res.send('<h1>Hello from Express.</h1>');
});
//const server = http.createServer(app);

app.listen(3000);