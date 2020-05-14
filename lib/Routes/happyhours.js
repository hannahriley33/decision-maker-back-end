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
  })

  .patch('/:id', (req, res, next) => {
    HappyHour
      .findByIdAndUpdate(req.params.id, { highlights: req.body.highlights }, { new: true })
      .then(happyhour => res.send(happyhour))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    HappyHour
      .findByIdAndDelete(req.params.id)
      .then(happyhour => res.send(happyhour))
      .catch(next);
  });
