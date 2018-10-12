//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

//PORT
//allow use of Heroku's port or your own local port, depending on the enviornment
const PORT = process.env.PORT || 3000

//DATABASE
//How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'BudapestRooms';

//CONNECT TO MONGO
mongoose.connect(MONGODB_URI, { useNewURlParser: true });

//ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//OPEN THE CONNECTION TO MONGO
db.on('open', () => {});

//MIDDLEWARE
//use public folder for static assets
app.use(express.static('public'));

//populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({extended: false})); //extended: false - does not allow nested objects in query strings
app.use(express.json()); //returns middleware that only parses json

//Method Override
app.use(methodOverride('_method')); //allows POST, PUT, and DELETE from a form

//ROUTES
//localhost:3000 - this will reroute to 'products'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//listener
app.listen(PORT, () => console.log('Welcome to BudapestRooms on ', PORT));
