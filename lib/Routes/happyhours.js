const { Router } = require('express');
const HappyHour = require('../models/HappyHour');

module.exports = Router()
  .post('/', (req, res, next) => {
    HappyHour
      .create(req.body)
      .then(happyhour => res.send(happyhour))
      .catch(next);
  });
  // .get('/:id', (req, res, next) => {
  //   Film
  //     .findById(req.params.id)
  //     // .populate('reviews')
  //     .then(film => res.send(film))
  //     .catch(next);
  // })
  // .get('/', (req, res, next) => {
  //   Film
  //     .find()
  //     .populate('studio', 'name')
  //     .then(films => res.send(films))
  //     .catch(next);
  // });
