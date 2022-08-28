/*const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("hey wats up from express");
});

app.listen(3000);*/

const fs = require("fs");
const fileName = "target.txt";

//fs.watch(fileName,()=>console.log('File Changed'));

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

//Asynchronous call
fs.readFile(fileName,(err,data)=>{
    if(err) errHandler(err)
    dataHandler(data)
});

console.log("Node Js  async programming!")

//Synchronous call
/*const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log("Node Js  async programming!");*/

