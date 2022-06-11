const axios = require('axios').default;

const BASE = 'https://pokeapi.co/api/v2'

const memory = new Map();
async function fetchPokemon(id) {
  let pokemon = null;
  
  if (memory.has(id)) {
    pokemon = memory.get(id);
  } else {
    const { data } = await axios.get(`${BASE}/pokemon/${id}`);
    pokemon = data;
    memory.set(id, pokemon);
  }
  
  return {
    name: pokemon.name,
    moves: pokemon.moves,
    image: pokemon.sprites.front_default,
  };
}

module.exports = {
  fetchPokemon,
};
