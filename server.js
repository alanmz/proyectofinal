const express = require('express');

var app=express();
const port= process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
    res.send('ho');
});


app.listen(port,()=>{
    console.log('aplicacion corriendo en ', port);
});