import React, { useContext } from 'react';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';
import standardDeviation from '../helpers/standardDeviation';


const H1 = styled.h1`
color:'black';
font-size: 20px;
font-weight: 700;
margin-top: 10px;
text-align: center;
`;

function Results() {
  const { results } = useContext(LotoContext);
  const std = standardDeviation();
  return (
    <>
      <H1>{`Jogos premiados: ${results.length}`}</H1>
      <H1>{`Desvio padrão: ${std.toFixed(2)}`}</H1>
    </>
  )
};

export default Results;