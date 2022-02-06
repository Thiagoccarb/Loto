const draws = require('../lotofacilSorteios.json');

const numbers = Array.from({ length: 25 }, (_v, k) => k + 1);
let numbersPercentage = {};

numbers.forEach((el) => numbersPercentage[el] = 0);
draws.forEach(({ Sorteio }) => {
  Sorteio.forEach((number) => {
    for (let i in numbersPercentage) {
      if (Number(i) === Number(number)) {

        numbersPercentage[i] += 1;
      }
    }
  })
});

const array = Object.entries(numbersPercentage)
  .sort((a, b) => b[1] - a[1]);

module.exports = array;
