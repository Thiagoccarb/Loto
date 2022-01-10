import React from 'react';
import styled from 'styled-components';
import '../styles/table.css';
import numbersStats from '../helpers/numberPercentage';

const Div = styled.div`
border: 1px solid gray; 
margin: 0 auto;
text-align: center;
`;

const Section = styled.section`
border: 2px solid gray; 
margin: 10px auto;
overflow: scroll;
text-align: center;
width: 300px;
height: 500px;
`;

const Span = styled.span`
margin: 0;
text-align: center;
width: 100%;
`;

const Title = styled.h1`
text-align: center;
`;

function Stats() {

  const table = (
    <>
      <Title>Estatística</Title>
      <Section>
        {
          numbersStats.map((numberStat, i) => (
            <Div
              key={ i }
            >
              {
                <Span
                >
                  {`Numero: ${numberStat[0]} - Porcentagem: ${(numberStat[1]/2409).toFixed(2)}`}
                </Span>
              }
            </Div>
          ))
        }
      </Section>
    </>
  )
  return (
    table
  )
}

export default Stats;