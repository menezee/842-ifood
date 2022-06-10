const express = require('express');
const router = express.Router();
const fsPromise = require('fs/promises');
const db = require('./database');

const veiculos = [
  'uno',
  'uno2',
  'celta',
  'palio',
];

const sliceByLimit = (arr, limit) => arr.slice(0, limit);

const TYPES = {
  JSON: 'json',
  HTML: 'html',
};
router.get('/', async (req, res) => {
  const vehicles = await db.from('vehicle');
  res.send(vehicles);
  
  // const { nome, limite = veiculos.length, type = TYPES.json } = req.query;
  //
  // res.set({
  //   'school': 'letscode',
  // });
  //
  // if (nome === undefined) {
  //   if (type === TYPES.HTML) {
  //     // const veiculosAsHtml = `
  //     //   <div>
  //     //     <ul>
  //     //       ${veiculos.map(veiculo => `<li>${veiculo}</li>`).join('')}
  //     //     </ul>
  //     //   </div>
  //     // `;
  //
  //     const htmlTemplatePath = `${__dirname}/paginas/veiculos.html`;
  //     const htmlTemplate = await fsPromise.readFile(htmlTemplatePath, 'utf8');
  //     const vehiclesListItems = veiculos.map(veiculo => `<li>${veiculo}</li>`).join('');
  //     const htmlTemplateWithVehicles = htmlTemplate.replace('{VEICULOS}', vehiclesListItems);
  //
  //     res.type('html').send(htmlTemplateWithVehicles);
  //   } else {
  //     res.send(sliceByLimit(veiculos, limite));
  //   }
  // } else {
  //   const veiculosComNomeX = veiculos.filter(veiculo => veiculo.startsWith(nome));
  //   const veiculosComNomeXLimitados = sliceByLimit(veiculosComNomeX, limite);
  //
  //   res.send(veiculosComNomeXLimitados);
  // }
});

router.get('/:veiculoID', async (req, res) => {
  const veiculoID = req.params.veiculoID;
  const veiculoIDNumber = Number(veiculoID);

  // VehicleRepository.getVehicleByID(veiculoIDNumber);
  const vehicle = await db.select().from('vehicle').where({ id: veiculoIDNumber });
  res.send(vehicle);
  // if (
  //   veiculoIDNumber < 0 ||
  //   veiculoIDNumber >= veiculos.length
  // ) {
  //   res.status(404).send('veiculo não encontrado');
  // } else if (Number.isNaN(veiculoIDNumber)) {
  //   res.status(400).send('id inválido');
  // } else {
  //   const veiculo = veiculos[veiculoIDNumber];
  //   res.send(veiculo);
  // }
});

router.delete('', (req, res) => {
  throw new Error('método não implementado!');
});

router.post('/', (req, res) => {
  const veiculoName = req.body;
  veiculos.push(veiculoName);
  res.status(201).send(veiculoName);
});

router.put('/:veiculoID', (req, res) => {
  const novoNomeDoVeiculo = req.body;
  const {veiculoID} = req.params;
  const veiculoIDNumber = Number(veiculoID);

  veiculos[veiculoIDNumber] = novoNomeDoVeiculo;
  res.send(novoNomeDoVeiculo);
});

module.exports = router;
