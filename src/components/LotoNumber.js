import React, { useContext } from 'react';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';


const Button = styled.button`
background-color: ${props => (props.isActive ? '#B088A3' : 'white')};
border: 2px solid purple;
color: purple;
height: 30px;
margin: 10px;
padding: 3px;
width: 30px;
`;

function LotoNumber({ number, isActive }) {
  const { numbers, setNumbers, buttonAttr } = useContext(LotoContext);

  const onClick = ({ target }) => {
    const value = parseInt(target.innerHTML, 10);
    buttonAttr[value] = !buttonAttr[value];
    const validate = numbers.some((el) => el === value);
    if (validate) return setNumbers(numbers.filter((el) => el !== value));
    return setNumbers([...numbers, value]);
  };


  return (
    <Button isActive={isActive}
      onClick={onClick}
    >
      {number}
    </Button>
  )
};

export default LotoNumber;