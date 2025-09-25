// set up ======================================================================
let http = require('http');
let express = require('express');
let app = express(); 						// create our app w/ express
let mongoose = require('mongoose'); 				// mongoose for mongodb
const PORT = 3000;
let port = process.env.PORT || PORT; 				// set the port
let database = require('./config/database'); 			// load the database config
let bodyParser = require('body-parser');
let methodOverride = require('method-override');


// configuration ===============================================================

app.use('/', express.static(__dirname)); 
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// routes ======================================================================
//require('./routes.js')(app);

// Connection URL
const url = database.remoteUrl;
// Use connect method to connect to the Server

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Curso de Node.js no IFSULMINAS - 2025 - Com Nodemon no ar!!!");
});

server.listen(PORT, () => {
  console.log("servidor escutando!");
});