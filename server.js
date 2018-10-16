//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

//MIDDLEWARE
app.use(express.static('public'));
//Method Override
app.use(methodOverride('_method')); //allows POST, PUT, and DELETE from a form

app.use(express.urlencoded({extended: false}));
//extended: false - does not allow nested objects in query strings
//PORT
//allow use of Heroku's port or your own local port, depending on the enviornment

//use public folder for static assets
const PORT = process.env.PORT || 3000

//DATABASE
//How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'BudapestRooms';

//ROUTES
//use roomController for routes
const roomControllers = require('./controllers/rooms.js');
app.use('/budapest', roomControllers);

//Get Index
app.get('/', (req,res)=>{
  res.redirect('/budapest/seed')
})


//CONNECT TO MONGO
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//OPEN THE CONNECTION TO MONGO
db.on('open', () => {});


//LISTENER
//localhost:3000 - this will reroute to 'products'
app.listen(PORT, () => console.log('Welcome to BudapestRooms on port ', PORT));
