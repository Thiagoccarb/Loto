const draw = require('../sorteios');

function check(selectedNumbers) {
  draw.forEach(({ Concurso, Sorteio }) => {
    let count = 0;
    Sorteio.forEach((number) => {
      selectedNumbers.forEach((selectedNumber) => {
        if (number === selectedNumber) {
          count += 1;
        }
      })
    })
    if( count > 13) {
      console.log(count, Concurso );
    }
  })
}

module.exports = check;