const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  suite: String,
  price: {type: Number},
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
