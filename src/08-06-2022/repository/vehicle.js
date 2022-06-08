const db = require('../db');

function fetchVehicles() {
  return db.select().from('vehicle');
}

function fetchVehicleByID(id) {
  return db.select().from('vehicle').where({ id });
}

module.exports = {
  fetchVehicles,
  fetchVehicleByID,
};
