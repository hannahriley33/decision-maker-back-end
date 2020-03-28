const { Router } = require('express');
const Meal = require('../models/Meal');

module.exports = Router()

  .post('/', (req, res, next) => {
    Meal
      .create(req.body)
      .then(meal => res.send(meal))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Meal
      .findById(req.params.id)
      .then(meal => res.send(meal))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Meal
      .find()
      .then(meals => res.send(meals))
      .catch(next);
  });
