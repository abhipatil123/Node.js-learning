// console.log("hello world");

// To import a function from another module 
// we need to use require function
// 

// var stuff = require('./stuff');

// console.log(stuff.counter(['1', '2', '3']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 6));

var express = require('express');

var app = express();
var bodyParser =  require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.send('this is the homepage'); 
    res.render('index')
});

app.get('/contact', function(req, res){
    // res.send('this is the contactpage'); 
    res.render('contact', {queryString: req.query})
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body})
});

app.get('/profile/:name', function(req, res){
    var data = {age: 29, job:'ninja', hobbies: ['movies', 'books', 'sleeping']}
    res.render('profile', {person: req.params.name, data: data}); 
});

app.listen(3000);

