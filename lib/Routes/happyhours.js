const { Router } = require('express');
const HappyHour = require('../models/HappyHour');

module.exports = Router()

  .post('/', (req, res, next) => {
    HappyHour
      .create(req.body)
      .then(happyhour => res.send(happyhour))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    HappyHour
      .findById(req.params.id)
      .then(happyhour => res.send(happyhour))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    HappyHour
      .find()
      .then(happyhours => res.send(happyhours))
      .catch(next);
  });
