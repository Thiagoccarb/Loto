import React from 'react';
import styled from 'styled-components';
import LotoCard from './LotoCard.js';


const Title = styled.h1`
text-align: center;
`;

function Lotofacil() {
  return (
    <>
    <Title>
      Cartela
    </Title>
    <LotoCard cardType={'Lotofacil'} maxNumber={25} size="30px" />
    </>
  );
};

export default Lotofacil;