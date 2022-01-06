import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LotoContext from './LotoContext';
import draw from '../sorteios';

const LotoProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);
  const [results, setResults] = useState([]);
  const [buttonAttr, setButtonAttr] = useState({});


  const check = (selectedNumbers) => {
    let array = [];
    draw.forEach(({ Concurso, Sorteio }) => {
      let count = 0;
      Sorteio.forEach((number) => {
        selectedNumbers.forEach((selectedNumber, i) => {
          if (number === selectedNumber) {
            count += 1;
          }
        })
      })
      let obj = { Acertos: count, Concurso };
      array = [...array, obj]
    })
    setResults(array.filter((el) => el.Acertos >= 12)
      .sort((a, b) => b.Acertos - a.Acertos))
  };

  const handleChecked = ({ target }) => {
    const element = target.firstChild
    element.checked = !element.checked;
    if (element.checked) {
      return target.style.backgroundColor = 'rgb(117, 114, 114)';
    }
    return target.style.backgroundColor = 'white';
  }

  const selectedNumbers = ({ target }) => {
    handleChecked({ target });
    const element = target.firstChild
    const number = parseInt(target.innerText, 10);
    const validate = numbers.some((el) => el === number);
    element.style.backgroundColor = 'white';
    if (validate) {
      return setNumbers(numbers.filter((e) => e !== number));
    }
    return setNumbers([...numbers, number]);
  };

  const context = {
    numbers,
    results,
    selectedNumbers,
    check,
    setNumbers,
    buttonAttr,
    setButtonAttr
  };

  return (
    <LotoContext.Provider value={context}>
      {children}
    </LotoContext.Provider>
  );
};

LotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LotoProvider;
