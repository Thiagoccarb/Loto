const draw = require('../sorteios');

const mean = () => {
  let array = [];
  draw.forEach(({ Sorteio }) => {
    array = [...array, Number((Sorteio.reduce((acc, curr) => acc + curr, 0)/15).toFixed(3))];
  });
  const mean = array.reduce((acc, curr) => acc + curr, 0)/array.length;
  return mean.toFixed(3);
}

module.exports = mean;