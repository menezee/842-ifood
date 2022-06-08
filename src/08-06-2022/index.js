const express = require('express');
const app = express();
const vehiclesRouter = require('./routes/vehicles-router');

app.use(express.text());

app.use('/vehicles', vehiclesRouter);

app.use('*', (req, res) => {
  res.send('não há mapeamento para essa rota!');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
