const router = require('express').Router();
const db = require('../db');
const { Line } = db.models;

router.get('/', (req, res, next) => {
  Line.findAll()
    .then( lines => res.send(lines))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Line.create(req.body)
    .then( line => res.send(line))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Line.findById(req.params.id)
    .then( line => {
      line.destroy();
    })
    .then( () => res.sendStatus(204))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Line.findById(req.params.id)
    .then( line => {
      Object.assign(line, req.body);
      return line.save();
    })
    .then( line => res.send(line))
    .catch(next);
});

module.exports = router;
