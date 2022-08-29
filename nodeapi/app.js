const express = require('express');
const app = express();
//const postRoutes = require("./routes/post");

// by object deStructuring

const {getPosts} = require("./routes/post");

app.get("/",getPosts);

const port = 8080;

app.listen(port,()=>{
    console.log(`A NodeJS API is listening on port: ${port}`);
});