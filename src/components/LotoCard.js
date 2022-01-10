import React, { useContext, useEffect, useState } from 'react';
import LotoNumber from './LotoNumber';
import styled, { css } from 'styled-components';
import LotoContext from '../context/LotoContext';


const Section = styled.section`
align-items: center;
background-color: #F8F0AF;
border: 2px solid purple;
color: #9B4874;
display: flex;
flex-direction: column;
justify-content: center;
height: 500px;
margin: 40px auto;
width: 300px
`;

const Title = styled.h1`
align-self: flex start;
background-color: #9B4874;
color: White;
font-family: Verdana;
font-size: 50px;
font-style: italic;
font-weight: 700;
margin: 0 auto;
width: 100%
`;

const Numbers = styled.div`
align-items: center;
color: #9B4874;
display: flex;
flex-wrap: wrap;
flex-grow: 1;
justify-content: center;
margin: 25px;
width: 100%;
`;

const Stats = styled.span`
color: #9B4874;
font-size: 14px;
font-weight: 700;
margin: 0px 0px 15px 0px;
${props => props.numbers.length === 0 && css`
  display: none;
`}
`;

function LotoCard({ cardType, maxNumber }) {
  const [array, setArray] = useState([]);
  const { buttonAttr, numbers } = useContext(LotoContext);

  useEffect(() => {
    const numbers = Array.from({ length: maxNumber }, (v, k) => k + 1);
    numbers.forEach((el) => buttonAttr[el] = false)
    setArray(numbers);
  }, []);

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const totalEven = () => {
    let count = 0;
    numbers.forEach((el) => {
      if (el % 2 === 0) {
        count += 1;
      }
    })
    return count;
  }

  const totalOdd = () => {
    let count = 0;
    numbers.forEach((el) => {
      if (el % 2 > 0) {
        count += 1;
      }
    })
    return count;
  }

  return (
    <Section
      className={cardType}
    >
      <Title>{cardType.toUpperCase()}</Title>
      <Numbers
        className='numbers'
      >
        {
          array.map((el, i) => (
            <LotoNumber
              isActive={buttonAttr[i + 1]}
              key={i}
              number={el}
            />
          ))
        }
      </Numbers>
      {
        <Stats numbers={numbers} > {`Números pares: ${totalEven()} | Números ímpares: ${totalOdd()}`} </Stats>
      }
      {
        <Stats numbers={numbers} >{`Soma: ${sum}`}</Stats>
      }
    </Section>
  )
};

export default LotoCard;