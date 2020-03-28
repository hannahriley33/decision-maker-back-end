const mongoose = require('mongoose');

// can the type be an array of options? meat entree, veg entree, veg side, dessert etc?
// also would like cooking method to be an array of options -- grill, oven, stovetop, bake etc
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cookingMethod: {
    type: String,
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  season: {
    type: String
  },
  proteinType: {
    type: String
  }
});







module.exports = mongoose.model('Meal', schema);

//
