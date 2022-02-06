import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';

const Label = styled.label`
margin: 0 10px;
`;

const Radio = styled.input`
`;

const Div1 = styled.div`
margin: 10px 20px;
text-align: center;
`;

const Div = styled.div`
display: flex;
justify-content: center;
height: 30px;
margin: 30px auto;
width: 100px
`;

const Button = styled.button`
background-color: blue;
&:disabled {
  background-color: gray;
}
&:hover {
  background-color: darkblue;
}
border: none;
border-radius: 5px;
color: white;
font-weight: 700;
height: 30px;
margin: 10px 10px;
transition: 0.2s linear;
width: 100px
`;

const LastDrawButton = styled.button`
background-color: blue;
&:disabled {
  background-color: gray;
}
&:hover {
  background-color: darkblue;
}
border: none;
border-radius: 5px;
color: white;
font-weight: 700;
position: relative;
height: 30px;
left: 50%;
margin-left: -90px;
align-self: center;
transition: 0.2s linear;
width: 180px;
`;

function Buttons() {
  const {
    check,
    checklastDraw,
    checkLastMegasenaDraw,
    checkMegasena,
    numbers,
    setNumbers,
    buttonAttr,
    setResults,
    setOrderBy
  } = useContext(LotoContext);
  
  const [radio, setRadio] = useState('');
  const { pathname } = useLocation();

  return (
    <>
      <Div1>
        <Label
          htmlFor='acerto'
        >
          <Radio
            id='acerto'
            type='radio'
            value='Acertos'
            name='radio'
            onChange={(e) => setRadio(e.target.value)}
          />
          Acerto
        </Label>
        <Label
          htmlFor='Concurso'
        >
          <Radio
            id='Concurso'
            type='radio'
            value='Concurso'
            name='radio'
            onChange={(e) => setRadio(e.target.value)}
          />
          Concurso
        </Label>
        <Button
          onClick={() => setOrderBy(radio)}
          disabled={!radio}
        >
          Ordenar
        </Button>
      </Div1>
      <Div>
        <Button
          onClick={() => pathname === '/lotofacil'
          ? check(numbers) : checkMegasena(numbers)}
        >
          Verificar
        </Button>
        <Button
          onClick={() => {
            setResults([]);
            setNumbers([]);
            const keys = Object.keys(buttonAttr);
            keys.forEach((el) => buttonAttr[el] = false);
          }
          }
        >
          Limpar
        </Button>
      </Div>
      <LastDrawButton
        onClick={() => pathname === '/lotofacil'
          ? checklastDraw(numbers) : checkLastMegasenaDraw(numbers)}
      >
        Verificar último sorteio
      </LastDrawButton>
    </>
  )
};

export default Buttons;