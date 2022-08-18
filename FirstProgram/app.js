const http=require('http');
const fs=require('fs');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method= req.method;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST')
    {
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Location','/');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);