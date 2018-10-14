const express = require('express');
const router = express.Router();
const Room = require('../models/rooms.js');

//INDEX
router.get('/', (req,res)=>{
  res.redirect('/budapest')
})
router.get('/', (req, res) => {
        res.send('hello')
      })

// //SEED
// router.get('/seed', (req, res) => {
//   Room.create([
//     {
//       name: "Red Room",
//       suite: "Queen",
//       price: 50,
//       furniture: ["4K TV", "Fridge", "Queen size bed", "Full bath + shower", "Desk"],
//     },
//     {
//       name: "Green Room",
//       suite: "Presidential Suite",
//       price: 1000,
//       furniture: ["Fully furnished", "Small kitchen"],
//     },
//     {
//       name: "Left Wing",
//       suite: "Home",
//       price: 300000,
//       furniture: ["Fully furnished", "Grand kitchen"],
//     }
//   ], (err, data) => {
//     res.redirect('/budapest');
//   });
// })
//
//   //NEW
//   router.get('/new', (req, res) => {
//     res.render('new.ejs')
//   })
//
//   //CREATE
//   router.post('/', (req, res) => {
//     Room.create(req.body, (err, createdRoom) => {
//       res.redirect('/budapest');
//     })
//   });
//
// //SHOW
// router.get('/:id', (req,res) => {
//   Room.findById(req.params.id, (err, foundRoom) => {
//     res.render('show.ejs', {
//       room: foundRoom
//     });
//   });
// });
//
// //DELETE
// router.delete('/:id', (req, res) => {
//   Room.findByIdAndRemove(req.params.id, (err, data) => {
//     res.redirect('/budapest');
//   });
// });
//
// //EDIT
// router.get('/:id/edit', (req, res) => {
//   Room.findById(req.params.id, (err, foundRoom) => {
//     res.render('edit.ejs', {
//       room:foundRoom
//     });
//   });
// });
//
// //UPDATE
// router.put('/:id', (req, res) => {
//   Room.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
//     res.redirect('/budapest');
//   });
// });


module.exports = router;
