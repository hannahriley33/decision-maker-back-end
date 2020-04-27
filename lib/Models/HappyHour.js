const mongoose = require('mongoose');

// on front end, select whether day is true or not? if cant, need to update asap
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    streetAddress: String,
    quadrant: String
  },
  when: {
    monday: {
      start: Number,
      end: Number
    }, 
    tuesday: {
      start: Number,
      end: Number
    }, 
    wednesday: {
      start: Number,
      end: Number
    }, 
    thursday: {
      start: Number,
      end: Number
    }, 
    friday: {
      start: Number,
      end: Number
    }, 
    saturday: {
      start: Number,
      end: Number
    }, 
    sunday: {
      start: Number,
      end: Number
    }
  },
  foodDiscounts: Boolean,
  drinkDiscounts: Boolean,
  outdoorPatio: Boolean,
  highlights: String
});
module.exports = mongoose.model('HappyHour', schema);
