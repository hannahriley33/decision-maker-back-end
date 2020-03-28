const HappyHour = require('../lib/models/HappyHour');
const chance = require('chance').Chance();

module.exports = async({ happyhoursToCreate = 20 } = {}) => {

  const happyhours = await HappyHour.create([...Array(happyhoursToCreate)].map(() => ({
    name: chance.name(),
    location: {
      streetAddress: chance.address(),
      quadrant: chance.state()
    },
    when: {
      monday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 })
      },
      tuesday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 }) 
      },
      wednesday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 })
      },
      thursday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 })
      },
      friday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 })
      },
      saturday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 })
      },
      sunday: {
        start: chance.integer({ min: 0, max: 12 }), 
        end: chance.integer({ min: 0, max: 12 })
      }
    },
    foodDiscounts: chance.bool(),
    drinkDiscounts: chance.bool(),
    outdoorPatio: chance.bool(),
    highlights: chance.sentence()
  })));
};
