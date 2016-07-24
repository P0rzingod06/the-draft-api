var express = require('express');

var app = express();

var port = process.env.PORT || 6969;

var managerRouter = express.Router();

managerRouter.route('/Managers')
	.get(function(req,res) {
		var responseJson = {hello: 'B00bs'};
		
		res.json(responseJson);
	})

app.use('/api',managerRouter);

app.get('/', function(req,res) {
	res.send('Welcome to my API');
})

app.listen(port, function() {
	console.log('Running on PORT: ' + port);
})