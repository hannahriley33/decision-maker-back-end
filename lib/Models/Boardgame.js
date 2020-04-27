const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  minPlayers: Number,
  maxPlayers: Number,
  notes: String
});

module.exports = mongoose.model('Boardgame', schema);
