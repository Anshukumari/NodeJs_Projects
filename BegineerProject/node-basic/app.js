// process is global inside node like window object on browser

/*const helpers = require('./helpers');

const total = helpers.sum(10,200);
console.log("Total:" , total);*/

const {sum} = require('./helpers');

// Create custom server 
/*const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('hello world from nodejs updated server');
});

server.listen(3000);*/

const total = sum(10,200);
console.log("Total:" , total);