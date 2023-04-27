const express = require('express');
const app = express();

app.get("",(req,resp)=>{
    resp.send(`<h1>Welcome, to Home Page</h1><a href="/about">Go to about page</a>`);
});

app.get("/about",(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/">Go to about page</a>
    `)});

app.get("/help",(req,resp)=>{
        resp.send([
        {
            name:'ans',
            email:'ans@gmail.com'
        },
    {
        name:'sha',
        email: 'sha@gmail.com'
    }])});

app.listen(8080);