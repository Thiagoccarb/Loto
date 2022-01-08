import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LotoContext from './LotoContext';
import draw from '../sorteios';

const LotoProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);
  const [results, setResults] = useState([]);
  const [buttonAttr, setButtonAttr] = useState({});
  const [orderBy, setOrderBy] = useState('');

  const sort = () => {
      const sortedResults = results.sort((a, b) => {
        const fieldA = a[orderBy];
        const fieldB= b[orderBy];
        return fieldB - fieldA;
      });
      return sortedResults;
  }

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
    setResults(array.filter((el) => el.Acertos >= 12))
  };

  const context = {
    numbers,
    results,
    setResults,
    check,
    setNumbers,
    buttonAttr,
    setButtonAttr,
    orderBy,
    setOrderBy,
    sort
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
