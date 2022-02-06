import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';

const H1 = styled.h1`
color:'black';
font-size: 20px;
font-weight: 700;
margin-top: 10px;
text-align: center;
`;

function Results() {
  const { results } = useContext(LotoContext);
  const { pathname } = useLocation();
  const prizedElements = pathname === '/lotofacil' ? results.length : results.filter(({ Acertos }) => Acertos >= 4).length
  return (
    results.length > 0 && <H1>{`Jogos premiados:${prizedElements}`}</H1>
  )
};

export default Results;