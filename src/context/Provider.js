import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LotoContext from './LotoContext';
import lotofacilDraws from '../lotofacilSorteios.json';
import megasenaDraws from '../megasenaSorteios.json';


const LotoProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);
  const [results, setResults] = useState([]);
  const [buttonAttr, setButtonAttr] = useState({});
  const [orderBy, setOrderBy] = useState('');

  const sort = () => {
    const sortedResults = results.sort((a, b) => {
      const fieldA = a[orderBy];
      const fieldB = b[orderBy];
      return fieldB - fieldA;
    });
    return sortedResults;
  }

  const checklotofacil = (selectedNumbers) => {
    let array = [];
    lotofacilDraws.forEach(({ Concurso, Sorteio }) => {
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
    setResults(array.filter((el) => el.Acertos >= 11))
  };

  const checkLastLotofacilDraw = (selectedNumbers) => {
    const lastDraw = lotofacilDraws[0];
    let count = 0;
    const { Sorteio, Concurso } = lastDraw
    Sorteio.forEach((number) => {
      selectedNumbers.forEach((selectedNumber) => {
        if (number === selectedNumber) {
          count += 1;
        }
      })
    })
    setResults([{ Acertos: count, Concurso }])
  };

  const checkMegasena = (selectedNumbers) => {
    let array = [];
    megasenaDraws.forEach(({ concurso, dezenas }) => {
      let count = 0;
      dezenas.forEach((number) => {
        selectedNumbers.forEach((selectedNumber) => {
          if (number === selectedNumber) {
            count += 1;
          }
        })
      })
      let obj = { Acertos: count, Concurso: concurso };
      console.log(obj);
      array = [...array, obj]
    })
    setResults(array);
  };

  const checkLastMegasenaDraw = (selectedNumbers) => {
    const lastDraw = megasenaDraws[megasenaDraws.length - 1];
    let count = 0;
    const { concurso, dezenas } = lastDraw
    dezenas.forEach((number) => {
      selectedNumbers.forEach((selectedNumber) => {
        if (number === selectedNumber) {
          count += 1;
        }
      })
    })
    setResults([{ Acertos: count, Concurso: concurso }])
  };

  const context = {
    numbers,
    results,
    setResults,
    check: checklotofacil,
    checklastDraw: checkLastLotofacilDraw,
    checkMegasena,
    checkLastMegasenaDraw,
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
