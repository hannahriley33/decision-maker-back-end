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
  })

  .patch('/:id', (req, res, next) => {
    Meal
      .findByIdAndUpdate(req.params.id, { type: req.body.type }, { new: true })
      .then(meal => res.send(meal))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Meal
      .findByIdAndDelete(req.params.id)
      .then(meal => res.send(meal))
      .catch(next);
  });
