const express = require('express');
const Pokemon = require('../clients/pokemon');
const fsPromise = require('fs/promises');
const path = require('path');

const router = express.Router();

const TYPES_FILE_PATH = path.join(__dirname, '..', 'data', 'pokemon-types.json');
router.get('/types', async function(req, res) {
  try {
    const types = await fsPromise.readFile(TYPES_FILE_PATH, 'utf8');
    res.send(types);
  } catch (err) {
    res.send(err);
  }
});

router.post('/types', async function(req, res) {
  const body = req.body;
  const bodyStr = JSON.stringify(body);
  
  await fsPromise.writeFile(TYPES_FILE_PATH, bodyStr, 'utf8');
  const types = await fsPromise.readFile(TYPES_FILE_PATH, 'utf8');
  
  res.send(types);
});

router.get('/:pokeID', async function(req, res, next) {
  const { pokeID } = req.params;
  const pokemon = await Pokemon.fetchPokemon(pokeID);
  const timestamp = Date.now();
  
  res.render(
    'pokemon',
    { pokemon, timestamp }
  );
});

module.exports = router;
