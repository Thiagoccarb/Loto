const getAllDraws = require('../models/megasena');

const getAll = async () => {
  const data = await getAllDraws('./node/models/lotofacilSorteios.json');
  console.log(data);
  return data
}

module.exports = getAll();