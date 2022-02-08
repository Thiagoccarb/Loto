import React from 'react';
import styled from 'styled-components';
import LotoCard from './LotoCard.js';


const Title = styled.h1`
text-align: center;
`;

function Megasena() {
  return (
    <>
    <Title>
      Cartela
    </Title>
    <LotoCard cardType={'Megasena'} maxNumber={60} size="18px" margin="12px" fontSize="10px" />
    </>
  );
};

export default Megasena;