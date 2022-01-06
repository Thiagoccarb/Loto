import React, { useContext, useEffect, useState } from 'react';
import LotoNumber from './LotoNumber';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';


const Section = styled.section`
align-items: center;
background-color: #F8F0AF;
border: 2px solid purple;
color: #9B4874;
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
margin: 30px auto;
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
margin: 5px;
width: 100%;
`;

function LotoCard({ cardType, maxNumber }) {
  const [array, setArray] = useState([]);
  const { buttonAttr } = useContext(LotoContext);
  
  useEffect(() => {
    const numbers = Array.from({ length: maxNumber }, (v,k) => k + 1);
    numbers.forEach((el) => buttonAttr[el] = false)
    setArray(numbers);
  }, []);

  return (
    <Section
      className={ cardType }
    >
      <Title>{ cardType.toUpperCase() }</Title>
      <Numbers
        className='numbers'
      >
        {
          array.map((el, i) => (
            <LotoNumber
              isActive = { buttonAttr[i+1] }
              key={ i }
              number={ el }
            />
          ))
        }
      </Numbers>
    </Section>
  )
};

export default LotoCard;