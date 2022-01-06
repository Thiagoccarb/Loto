import React, { useContext } from 'react';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';

const H1 = styled.h1`
color: ${({ numbers }) => numbers.length >= 15 ? 'green' : 'black'};
font-size: 20px;
font-weight: 700;
text-align: center;
`;

function Counter() {
  const { numbers } = useContext(LotoContext);
  return (
      <H1
        numbers={numbers}
      >
       { numbers.length > 0 && `${numbers.length} números escolhidos` }
      </H1>
  )
};

export default Counter;