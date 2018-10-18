const express = require('express');
const router = express.Router();
const Room = require('../models/rooms.js');

//INDEX

router.get('/', (req, res) => {
  Room.find({}, (err, allRooms)=>{
    res.render("index.ejs", {
      rooms: allRooms
    });
  });
});

//SEED
router.get('/seed', (req, res) => {
  Room.create([
    {
      image: "https://rookery-manor.co.uk/wp-content/uploads/2016/03/DSC_0730-HDR-Rookery-Groupon-Selects-WEB-QUALITY-1920x1282.jpg",
      name: "Red Room",
      suite: "Queen",
      price: 50,
      // inDate: 
      // outDate:
      furniture: ["4K TV", "Fridge", "Queen size bed", "Full bath + shower", "Desk"],
      author: "The Doctor",
    },
    {
      image: "http://www.thebathpriory.co.uk/uploads/RoomImage/_name-67-6.jpg",
      name: "Green Room",
      suite: "Presidential Suite",
      price: 1000,
      // inDate:
      // outDate:
      furniture: ["Fully furnished with a small kitchen"],
      author: "Darth Vador",

    },
    {
      image: "https://www.fourseasons.com/content/dam/fourseasons/images/web/MAR/MAR_301_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.720.405.jpeg",
      name: "Room 101",
      suite: "Home",
      price: 300000,
      // inDate:
      // outDate:
      furniture: ["Grand suite with 6 bedrooms with full baths, grand kitchen, and theater room"],
      author: "Danny Targaryen",

    }
  ], (err, data) => {
    res.redirect('/budapest');
  });
})

  //NEW
  router.get('/new', (req, res) => {
    res.render('new.ejs')
  })

  //CREATE
  router.post('/', (req, res) => {
    Room.create(req.body, (err, createdRoom) => {
      res.redirect('/budapest');
    })
  });

//SHOW
router.get('/:id', (req,res) => {
  Room.findById(req.params.id, (err, foundRoom) => {
    res.render('show.ejs', {
      room: foundRoom
    });
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/budapest');
  });
});

//EDIT
router.get('/:id/edit', (req, res) => {
  Room.findById(req.params.id, (err, foundRoom) => {
    res.render('edit.ejs', {
      room:foundRoom
    });
  });
});

//UPDATE
router.put('/:id', (req, res) => {
  Room.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/budapest');
  });
});


module.exports = router;
