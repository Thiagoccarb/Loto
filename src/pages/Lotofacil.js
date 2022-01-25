import React from 'react';
import styled from 'styled-components';
import LotoCard from '../components/LotoCard.js';


const Title = styled.h1`
text-align: center;
`;

function Lotofacil() {
  return (
    <>
    <Title>
      Cartela
    </Title>
    <LotoCard cardType={'Lotofacil'} maxNumber={25} />
    </>
  );
};

export default Lotofacil;