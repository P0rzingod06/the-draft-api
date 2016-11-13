const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  methodOverride = require('method-override');

const port = process.env.PORT || 8080;
const app = express();

mongoose.connect('mongodb://Admin:Admin@ds151917.mlab.com:51917/heroku_x8xpmf33');

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));


require(__dirname + '/src/Routes/managerRoutes')(app);


app.listen(port);
console.log('SERVER IS RUNNING ON PORT: ('+ port +')');
exports = module.exports = app;