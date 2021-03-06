const router = require('express').Router();
const db = require('../db');
const { Mantra } = db.models;

router.get('/', (req, res, next) => {
  // console.log('get route for all mantras got called')
  Mantra.findAll()
    .then( mantras => res.send(mantras))
    .catch(next);
});

router.post('/', (req, res, next) => {
  // console.log('req.body is:', req.body)
  Mantra.create(req.body)
    // .then(() => console.log('mantra create route got called'))
    .then( mantra => res.send(mantra))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Mantra.findById(req.params.id)
    .then( mantra => {
      mantra.destroy();
    })
    .then( () => res.sendStatus(204))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Mantra.findById(req.params.id)
    .then( mantra => {
      Object.assign(mantra, req.body);
      return mantra.save();
    })
    .then( mantra => res.send(mantra))
    .catch(next);
});

module.exports = router;
