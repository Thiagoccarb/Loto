import draw from '../sorteios';
const math = require('mathjs');


const getStandardDeviation = () => {
  let array = [];
  draw.forEach(({ Sorteio }) => {
    array = [...array, Sorteio.reduce((acc, curr) => acc + curr, 0)];
  });
  return math.std(array);
}

export default getStandardDeviation;