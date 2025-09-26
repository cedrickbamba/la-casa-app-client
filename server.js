// set up ======================================================================
let http = require('http');
let express = require('express');
let app = express(); 						// create our app w/ express
let mongoose = require('mongoose'); 				// mongoose for mongodb
//const PORT = 3000;
let dotenv = require('dotenv');
dotenv.config();

let PORT = process.env.PORT; 				// set the port

console.log(`PORT number is ${process.env.PORT}`);
console.log(`DB name is ${process.env.DB_NAME}`);

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
require('./routes.js')(app);

// Connection URL
const url = database.remoteUrl;
// Use connect method to connect to the Server
 console.log(url);

 
mongoose.connect(url)

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('Database Connection Established!');

    app.listen(PORT);
	  console.log("La Casa App Client listening on port " + PORT);

    const getone = async function() {
      const post = await db.collection('users').findOne({});
      console.log(post)
      };
      getone();

    // Export de db object
    module.exports = db;
});

