import React, { useContext } from 'react';
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

function CheckButton() {
  const {
    check,
    numbers,
    setNumbers,
    buttonAttr,
  } = useContext(LotoContext);
  return (
    <>
      <Div1>
        <Label
          htmlFor='acerto'
        >
          <Radio
            id='acerto'
            type='radio'
            value='Acerto'
            name='radio'
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
          />
          Concurso
        </Label>
      </Div1>
      <Div>
        <Button
          onClick={() => check(numbers)}
        >
          Verificar
        </Button>
        <Button
          onClick={() => {
            setNumbers([]);
            const keys = Object.keys(buttonAttr);
            keys.forEach((el) => buttonAttr[el] = false);
          }
          }
        >
          Limpar
        </Button>
      </Div>
    </>
  )
};

export default CheckButton;