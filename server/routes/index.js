const router = require('express').Router();
const db = require('../db');
// const { User } = db.models;

//authentication code

// router.use('/users', require('./users'));
router.use('/mantras', require('./mantras'));
router.use('/lines', require('./lines'));

module.exports = router;
