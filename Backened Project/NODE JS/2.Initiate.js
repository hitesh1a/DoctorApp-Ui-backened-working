/*
In vs code terminal write : 
npm init
then keep pressing enter and y at last
*/ 

// Basics

var random_name = require('random-indian-name');
console.log(random_name()); 

// code 1: to give response

const port = 2500;

const express = require('express') 
// We imported express and stored in variable express
const app = express()
// We created object named app so that we can use anywhere

app.get('/home', function (req, res) {
    // request response
    // '/' means route or path 
    // every website default is slash

  res.send('<h1> Hello Pankku </h> ')
  // In browser write localhost:2000
  // send response
})

app.listen(port)

console.log('Project running at port', port)

// 'npm i nodemon' to autmatically reload changes




// Code 2: To read a html file

const port = 2500;

const express = require('express') 
const app = express()

const path = require('path')
// This is inbuilt

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(port)

console.log('Project running at port', port)



// code 3: EJS

const express = require('express')
const app = express()

const path = require('path')

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', function (req,res){
  res.render('index');
});

app.listen(port)

console.log("project running at port:", port)


// code 3: Send data from Js to index.ejs


const express = require('express')
const app = express()

const path = require('path')

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', function(req,res) {
  res.render('index', {data:'my'});
});

app.listen(port)

console.log("project running at port:", port)  

