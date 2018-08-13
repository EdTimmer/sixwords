const router = require('express').Router();
const db = require('../db');
const { Mandala } = db.models;

router.get('/', (req, res, next) => {
  Mandala.findAll()
    .then( mandalas => res.send(mandalas))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Mandala.create(req.body)
    .then( mandala => res.send(mandala))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Mandala.findById(req.params.id)
    .then( mandala => {
      mandala.destroy();
    })
    .then( () => res.sendStatus(204))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Mandala.findById(req.params.id)
    .then( mandala => {
      Object.assign(mandala, req.body);
      return mandala.save();
    })
    .then( mandala => res.send(mandala))
    .catch(next);
});

module.exports = router;
