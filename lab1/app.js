var express = require('express');

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var wiki = require('./routes/wiki');
var app = express();

var app = express();

var PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));

//database setup
mongoose.connect('mongodb://localhost/pagebase');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', index);
app.get('/getlink', wiki.getlink);
app.get('/gettitle', wiki.gettitle);
app.post('/addlink', wiki.addlink);
app.post('/editlink', wiki.editlink);



var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});