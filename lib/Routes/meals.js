const { Router } = require('express');
const Meal = require('../models/Meal');

module.exports = Router()

  .post('/', (req, res, next) => {
    Meal
      .create(req.body)
      .then(meal => res.send(meal))
      .catch(next);
  });

// .get('/:id', (req, res, next) => {
//   HappyHour
//     .findById(req.params.id)
//     .then(happyhour => res.send(happyhour))
//     .catch(next);
// })
  
// .get('/', (req, res, next) => {
//   HappyHour
//     .find()
//     .then(happyhours => res.send(happyhours))
//     .catch(next);
// });
