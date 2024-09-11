
const express = require('express')
const app = express()

const path = require('path')

app.set('view engine', 'ejs');

const port = 6500;

app.get('/', function(req,res) {
  res.render('index',{data:'Good Morning yobro'});
});

app.listen(port)

console.log("project running at port:", port)  
