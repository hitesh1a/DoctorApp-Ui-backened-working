// Get - When we request without parameters to server like just login page
// Post- When we request with parameters like with login and password

/* 
What is NodeJS

-- Node.js is an open source, cross platform Javascript runtime environment that allows Javascript to be
run on the serverside. It is build on Chrome's VS javascript engine. It is commonly used for website development.

-- Javascript ko browser ke bahar use kr skte hai

-- Express is framework of node js, express makes node fast

-- Npm - node package manager, it is used when we use library, external dependency


We install packages in terminal 
1) We paste the install command "npm i random-indian-name"

2) Then we paste this in index.js and in terminal run node index.js
or directly run by run button :

var random_name = require('random-indian-name');
console.log(random_name()); 


AUto reload
npm i nodemon
npx nodemon index.js
*/


/*

EJS templating in Node JS - Used when we want to show our index.js data in html

EJS or embedded Javascript templating is a templating engine used by Node.js
Template engine helps to create an HTML with minimal code. Also, it can inject
data int an HTML template on the client side to produce final  Html

npm i ejs


EJS bY default opens views Folder
so create views folder
create index.ejs
and paste index.html to index.ejs





Now to send data from .js to index.ejs of views folder

app.get('/', function(req,res) {
  res.render('index', {data:'my'});
 
  comma curly braces data = 'my'

  In index.ejs put <%= data %>

*/