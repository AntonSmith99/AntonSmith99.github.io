const express = require('express')
const fs = require('fs')
const bodyParser= require('body-parser')
const multer = require('multer');
const path = require('path');
//CREATE EXPRESS APP
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
 

 
//ROUTES WILL GO HERE
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
   
});

app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, '/images')));
app.use(express.static(path.join(__dirname, '/pdf')));
console.log(__dirname);

