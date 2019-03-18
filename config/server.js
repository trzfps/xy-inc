const express = require('express'),
consign = require('consign'),
bodyParser = require('body-parser'),
expressValidator = require('express-validator');

var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(expressValidator());

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);


module.exports = app;