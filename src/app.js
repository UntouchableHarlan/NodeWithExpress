'use strict';

var express = require('express');
var users = require('./mock/users.json');

var app = express();

app.set('view engine', 'jade')
app.set('views', __dirname + '/templates')

app.get('/', function(req, res) {
  // res.send("<h1>I love treesss</h1>");
  res.render('index')
});

app.get('/users/:id', function(req, res) {
  var id = req.params.id
  var user = users[id] || {}
  res.render('users.ejs', {user: user})
  // res.send(user);
});

app.get('/blog', function(req, res) {
  res.send(blog);
});

app.listen(3000, function() {
  console.log('front end server is running on 3000');
});
