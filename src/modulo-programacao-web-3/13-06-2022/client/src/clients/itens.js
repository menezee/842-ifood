import axios from 'axios';

async function fetchItens() {
  const { data } = await axios.get('http://localhost:3001/itens');
  return data;
}

export default {
  fetchItens,
};
