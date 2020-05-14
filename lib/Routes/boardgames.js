const { Router } = require('express');
const Boardgame = require('../Models/Boardgame');

module.exports = Router()

  .post('/', (req, res, next) => {
    Boardgame
      .create(req.body)
      .then(boardgame => res.send(boardgame))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Boardgame
      .findById(req.params.id)
      .then(boardgame => res.send(boardgame))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Boardgame
      .find()
      .then(boardgames => res.send(boardgames))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Boardgame
      .findByIdAndUpdate(req.params.id, { notes: req.body.notes }, { new: true })
      .then(boardgame => res.send(boardgame))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Boardgame
      .findByIdAndDelete(req.params.id)
      .then(boardgame => res.send(boardgame))
      .catch(next);
  });
