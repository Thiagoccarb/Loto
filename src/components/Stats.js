import React from 'react';
import styled from 'styled-components';
import '../styles/table.css';

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

function Stats({ maxNumber, draws }) {
  const numbers = Array.from({ length: maxNumber }, (_v, k) => k + 1);
  let numbersPercentage = {};
  numbers.forEach((el) => numbersPercentage[el] = 0);
  draws.forEach((el) => {
    const draw = el.Sorteio ? el.Sorteio : el.dezenas;
    draw.forEach((number) => {
      for (let i in numbersPercentage) {
        if (Number(i) === Number(number)) {

          numbersPercentage[i] += 1;
        }
      }
    })
  });

  const array = Object.entries(numbersPercentage)
    .sort((a, b) => b[1] - a[1]);

  const table = (
    <>
      <Title>Estatística</Title>
      <Section>
        {
          array.map((numberStat, i) => (
            <Div
              key={i}
            >
              {
                <Span
                >
                  {`Numero: ${numberStat[0]} - Porcentagem: ${(numberStat[1] / 2409).toFixed(2)}`}
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