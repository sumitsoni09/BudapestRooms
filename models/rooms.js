const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  image: {type: String},
  name: String,
  suite: String,
  price: {type: Number, min: 50},
  furniture: [Array],
  date: {type: Date},
  author: String,
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
