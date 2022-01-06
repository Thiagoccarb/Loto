import React, { useContext } from 'react';
import LotoCard from '../components/LotoCard.js';
import LotoContext from '../context/LotoContext.js';

function Lotofacil() {

  const { 
    numbers,
    check,
    selectedNumbers,
    setNumbers,
  } = useContext(LotoContext);

  return (
    <LotoCard cardType={'Lotofacil'} maxNumber={25} />
  );
};

export default Lotofacil;