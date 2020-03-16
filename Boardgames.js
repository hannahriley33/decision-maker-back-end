const mongoose = require('mongoose');

const boardGameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  minPlayers: {
    type: Number,
    required: true,
    maxlength: 10
  },
  maxPlayers: {
    type: Number,
    required: true
  },
  portable: {
    type: Boolean,
    required: true
  },
  avgGameLength: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Note',  boardGameSchema);

//
