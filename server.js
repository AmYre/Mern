const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const posts = require('./posts');

const app = express() ;

//bodyParse Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'https://learn-mern-stack-28.herokuapp.com');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD");
    next();
  });

app.use(bodyParser.json());

app.use('/posts', posts);

//Route temporaire
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('app/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'))
    })
}

mongoose.connect('mongodb+srv://dev:Zelda28*@cluster0-4al0t.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log("connected to DB")}
);

const port = process.env.PORT || 5000;

app.listen(port);