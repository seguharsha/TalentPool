const express=require('express');
const path = require('path');
const app=express();
const bodyParser=require('body-parser');
const rotutes=require('./routes/routes');
app.use(bodyParser.json());
app.use(rotutes);

app.use(express.static(path.join(__dirname,'public')));
app.listen(8080,()=>{
    console.log("server running");
})