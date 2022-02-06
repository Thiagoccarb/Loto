const draw = require('../sorteios');

export function check(selectedNumbers) {
  draw.forEach(({ Concurso, Sorteio }) => {
    let count = 0;
    Sorteio.forEach((number) => {
      selectedNumbers.forEach((selectedNumber) => {
        if (number === selectedNumber) {
          count += 1;
        }
      })
    })
    if (count > 13) {
      console.log(count, Concurso);
    }
  })
}

export function checklastDraw(selectedNumbers) {
  const lastDraw = draw[draw.length - 1];
  let count = 0;
  const { Sorteio, Concurso } = lastDraw
  Sorteio.forEach((number) => {
    selectedNumbers.forEach((selectedNumber) => {
      if (number === selectedNumber) {
        count += 1;
      }
    })
  })
  console.log(count, Concurso);
}
