import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LotoContext from '../context/LotoContext';


const Button = styled.button`
background-color: ${props => (props.isActive ? '#B088A3' : 'white')};
border: 2px solid purple;
color: purple;
font-size: 10px;
font-weight:700;
height: ${({ size }) => size};
margin: ${({ margin }) => margin};
padding: 2px;
width: ${({ size }) => size};
`;

function LotoNumber({ number, isActive, size, margin, fontSize }) {
  const { numbers, setNumbers, buttonAttr } = useContext(LotoContext);

  const onClick = ({ target }) => {
    const value = parseInt(target.innerHTML, 10);
    buttonAttr[value] = !buttonAttr[value];
    const validate = numbers.some((el) => el === value);
    if (validate) return setNumbers(numbers.filter((el) => el !== value));
    return setNumbers([...numbers, value]);
  };

  return (
    <Button
      isActive={isActive}
      size={size}
      margin={margin}
      fontSize={fontSize}
      onClick={onClick}
    >
      {number}
    </Button>
  )
};

LotoNumber.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  number: PropTypes.number,
  isActive: PropTypes.bool,
};

LotoNumber.defaultProps = {
  size: '30px',
  isActive: false,
};

export default LotoNumber;