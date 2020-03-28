const mongoose = require('mongoose');

// on front end, select whether day is true or not? if cant, need to update asap
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    streetAddress: {
      type: String
    },
    quadrant: {
      type: String,
    }
  },
  when: {
    monday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }, 
    tuesday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }, 
    wednesday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }, 
    thursday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }, 
    friday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }, 
    saturday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }, 
    sunday: {
      start: {
        type: Number
      },
      end: {
        type: Number
      }
    }
  },
  foodDiscounts: {
    type: Boolean
  },
  drinkDiscounts: {
    type: Boolean
  },
  outdoorPatio: {
    type: Boolean
  },
  highlights: {
    type: String
  }
});
module.exports = mongoose.model('HappyHour', schema);
