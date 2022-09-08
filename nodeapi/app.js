const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expressValidator = require('express-validator');
dotenv.config();
const app = express();
//const postRoutes = require("./routes/post");

// by object deStructuring

const postRoutes = require("./routes/post");
const bodyParser = require('body-parser');

const MONGO_URI = 'mongodb://localhost:27017/NodeJSDB';
mongoose.connect(
    MONGO_URI,
    {useNewUrlParser: true}
  ).then(()=>console.log('DB Conected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/",postRoutes);

app.use("/",postRoutes);

const port = 8082;

app.listen(port,()=>{
    console.log(`A NodeJS API is listening on port: ${port}`);
}); 

/*// import mongoose
    const mongoose = require('mongoose');
    // load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});*/

