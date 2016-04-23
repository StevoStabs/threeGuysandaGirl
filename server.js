var express = require('express');
var bodyParser = require('body-parser');
var routes = require("./assets/js/routes.js");

var app = express();
var PORT = process.env.PORT || 8081; 	// set the port
var staticContentFolder;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
staticContentFolder = __dirname + '/public';

app.use(express.static(staticContentFolder)); 	// set the static files location /public/img will be /img for users



app.listen(PORT,function() {
    console.log('Serving static content from ' + staticContentFolder)
    console.log('App listenting on PORT: '+ PORT);
});