require("dotenv").config();
const express = require("express");
const app = express();
const ConnectDB=require('./db/conn');
const path=require('path')
const cors = require("cors");
const router = require("./routes/router");
const port = process.env.PORT || 8003;
ConnectDB();  
app.use(cors());
app.use(express.json());


app.use(router);
app.use(express.static(path.join(__dirname,'/client/build')))
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'/client/build/index.html'))
})
app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});