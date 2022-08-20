const http=require('http');

requestHandler=(req,res)=>{
    const url= req.url;
    const method= req.method;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>Enter User Name</title></head>');
        res.write('<body><p>Hi, I am node js</p><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url==='/users')
    {
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><ul><li>Anshu Kumari</li><li>Shashi Bhushan</li><li>Ayanshi Singh</li><li>Ayansh Singh</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user' && method=='POST')
    {
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString();
            const message= parsedBody.split('=')[1];
            console.log(message);
            res.end();
        });
    }
}
const server = http.createServer(requestHandler);
server.listen(3000);