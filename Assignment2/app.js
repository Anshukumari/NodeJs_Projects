const express=require('express');

const app = express();
/*app.use((req,res,next)=>{
    console.log("First Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("Second middleware");
    res.send('<h1>Hello from "Add product page".</h1>');
});*/
app.use('/users',(req,res,next)=>{
    console.log("/users middleware");
    res.send('<h1>The middleware that handles just /users</h1>');
});

app.use('/',(req,res,next)=>{
    console.log("/ middlware");
    res.send('<h1>The middleware that handles just /</h1>');
});



app.listen(3000);