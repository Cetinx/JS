const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();



dotenv.config()

mongoose.connect(process.env.MONBODB_CONNECTION_URL,{

   
}).then(() => console.log("Connect DataBase"))
  .catch((err) => console.log(err))  

  
  //Middle
  app.use(express.json({limit:'20mb'})) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.use(cors())

const MemoryRout = require('./routers/MemoryRout')

app.use('/memories',MemoryRout)













app.listen(process.env.PORT);