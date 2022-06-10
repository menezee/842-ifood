var express = require('express');
var router = express.Router();
const axios = require('axios').default;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const { data: pokemon } = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
  
  res.render('index', { title: pokemon.name, now: new Date().toISOString() });
  // res.send({ message: pokemon.name });
});

module.exports = router;
