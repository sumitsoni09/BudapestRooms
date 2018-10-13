const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  suite: String,
  price: {type: Number},
  furniture: [Array],
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
