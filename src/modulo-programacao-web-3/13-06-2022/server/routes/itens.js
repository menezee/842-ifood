const express = require('express');
const router = express.Router();
const db = require('../database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.send(await db('item'));
});

module.exports = router;
