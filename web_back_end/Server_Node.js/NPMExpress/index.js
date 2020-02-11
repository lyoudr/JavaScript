const express = require('express');
const app = express();// Create a Server called App
app.listen(8080,function(){
    console.log('App is run on port 8080!');
});//Tell the Server to listen to port 8081

/*
function (req,res){
  //Accept Request and Response to Client;
}
*/

//1. Get Request:
app.get('/',function(req,res){
    console.log(req.query.name);
    console.log(req.query.password);
});

