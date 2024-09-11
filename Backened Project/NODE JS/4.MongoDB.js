
const express = require('express')
const app = express()
const mongoose = require('mongoose');


const path = require('path')

app.set('view engine', 'ejs');

const port = 6500;

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
  .then(() => console.log('Connected!')).catch((err)=> {
    console.log(err)
    process.exit(1)
  });


  const bookSchema = new mongoose.Schema({
    title: String,
    pages: Number,
    prices: Number,
    author: Array
  });

  const books = mongoose.model('books', bookSchema);


// app.get('/', function(req,res) {
//   res.render('index',{data:'Good Morning yobro'});



app.get('/post', async function(req,res) {

    const data = await books.find();
    if(data)
    {
        res.json(data);
    }
    else {
        res.json('error')
    }  

});

app.listen(port)

console.log("project running at port:", port)  
