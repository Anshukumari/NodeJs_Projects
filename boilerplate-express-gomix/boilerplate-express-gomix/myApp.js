require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser=require('body-parser');

console.log("Hello World");
let absolutePath = __dirname + "/views/index.html";
app.get("/",function(req,res){
    res.sendFile(absolutePath);
});
/*app.get("/json",(req,res)=>{
        if(process.env.MESSAGE_STYLE=="uppercase")
        {
            res.json({"message": "HELLO JSON"});
        }
        else{
            res.json({"message": "Hello json"});
        }
});*/
app.use("/public",express.static(__dirname+"/public"));

/*app.use("/json",
function(req, res, next) {
    console.log(req.method+" "+" "+req.path+" - "+req.ip);
    next();
  }
);*/
app.use((req, res, next) => {

    let string = `${req.method} ${req.path} - ${req.ip}`
    console.log(string) 
    next();
   });

app.get('/now',function(req,res,next)
    {
        req.time=new Date().toString();
        next();
    },
    function(req,res,next)
    {
        res.json({"time":req.time});
    }
);

app.get('/now',function(req,res,next)
    {
        req.time=new Date().toString();
        next();
    },
    function(req,res,next)
    {
        res.json({"time":req.time});
    }
);

app.get('/:word/echo',(req,res,next)=>{
    res.json({"echo":req.params.word});
 }
);



app.get('/name',(req,res,next)=>{
    res.json({"name":req.query.first+" "+req.query.last});
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/name',(req,res)=>{
    res.json({"name": req.body.first+" "+req.body.last});
});




























 module.exports = app;
