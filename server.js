//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const Room = require('./models/rooms.js')

app.use(express.urlencoded({extended: false})); //extended: false - does not allow nested objects in query strings
//PORT
//allow use of Heroku's port or your own local port, depending on the enviornment
const PORT = process.env.PORT || 3000

//DATABASE
//How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'BudapestRooms';

//CONNECT TO MONGO
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

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

//Method Override
app.use(methodOverride('_method')); //allows POST, PUT, and DELETE from a form

//ROUTES
//localhost:3000 - this will reroute to 'products'

//INDEX
app.get('/', (req, res)=>{
  res.redirect('/budapest')
})
app.get('/budapest', (req, res) => {
      Room.find({}, (err, allRooms)=>{
        res.render('index.ejs', {
          rooms:allRooms
      })
    })
  });

  //CREATE
  app.post('/budapest', (req, res) => {
    Room.create(req.body, (err, createdRoom) => {
      res.redirect('/budapest');
    })
  });

//NEW
app.get('/budapest/new', (req, res) => {
  res.render('new.ejs')
})
//
//SHOW
app.get('/budapest/:id', (req,res) => {
  Room.findById(req.params.id, (err, foundRoom) => {
    res.render('show.ejs',{
      room: foundRoom
    });
  });
});
//EDIT
app.get('/budapest/:id/edit', (req, res) => {
  Room.findById(req.params.id, (err, foundRoom) => {
    res.render('edit.ejs', {
      room:foundRoom
    });
  });
});
//UPDATE
app.put('/budapest/:id', (req, res)=>{
  Room.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel)=>{
    res.redirect('/budapest')
  });
})
// //DELETE
app.delete('/budapest/:id', (req, res)=>{
  Room.findByIdAndRemove(req.params.id, (err, foundRoom)=>{
    res.redirect('/budapest');
  });
});
//listener
app.listen(PORT, () => console.log('Welcome to BudapestRooms on port ', PORT));
