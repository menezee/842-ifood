const express = require('express');
const app = express();
const veiculosRouter = require('./veiculos-router');

app.use(express.text());

app.use('/veiculos', veiculosRouter);
// app.use('/oficina', oficinaRouter);

app.use('*', (req, res) => {
  res.send('não há mapeamento para essa rota!');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`servidor disponível em http://localhost:${PORT}`);
});
