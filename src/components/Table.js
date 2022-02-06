import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import LotoContext from '../context/LotoContext';
import '../styles/table.css';

const Div = styled.div`
border: 1px solid gray; 
margin: 0 auto;
text-align: center;
${props => props.acertos === 15 && css`
  background-color: green;
`}
${props => props.acertos === 14 && css`
  background-color: yellow;
`}
`;

const Section = styled.section`
border: 2px solid gray; 
margin: 10px auto;
overflow: scroll;
text-align: center;
width: 250px;
height: 500px;
`;

const Span = styled.span`
margin: 0;
text-align: center;
width: 100%;
`;

const Title = styled.h1`
text-align: center;
margin-bottom: 20px;
`;

function Table() {
  const { results, orderBy, sort } = useContext(LotoContext);
  const data = orderBy ? sort() : results;

  const table = (
    <>
      <Title>Resultado</Title>
      <Section>
        {
          data.map((result) => (
            <Div
              acertos={result.Acertos}
            >
              {
                <Span
                >
                  {`Acertos: ${result.Acertos} - Concurso: ${result.Concurso}`}
                </Span>
              }
            </Div>
          ))
        }
      </Section>
    </>
  )
  return (
    data.length > 0 && table
  )
}

export default Table;