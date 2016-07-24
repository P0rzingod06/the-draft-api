var express = require('express');

var app = express();

var port = process.env.PORT || 2000;

app.get('/', function(req,res) {
	res.send('Welcome to my API');
})

app.listen(port, function() {
	console.log('Running on PORT: ' + port);
})