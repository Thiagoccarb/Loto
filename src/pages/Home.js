import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Outlet, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import img from '../images/loto.jpg';
import gif from '../images/winner.gif';

const backgroundMove = keyframes`
0% {
  background-position: center;
}

100% {
  background-position: 1px;
}
`;

const titleEffect = keyframes`
0% {
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 1);
}

50% {
  text-shadow: none;
}

100% {
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 1);
}
`;

const Main = styled.main`
${({ display }) => !display && css`
  display: none;
`}
width: 100%;
height: 800px;
position: relative;
`

const H1 = styled.h1`
${({ styled }) => styled && css`
animation: ${titleEffect} 2s linear infinite alternate;
font-size: 3.5rem;
font-weight: 700;
color: white;
position: absolute;
text-align: center;
top: 5px;
left: 50%;
margin-left: -379px;
text-shadow: 0px 0px 8px rgba(255, 255, 255, 1);
`}
`

const H2 = styled.h2`
font-size: 1.5rem;
font-weight: 700;
color: white;
position: absolute;
text-align: center;
top: 90px;
left: 50%;
margin-left: -236px;
`

const Section1 = styled.section`
animation: ${backgroundMove} 1s linear infinite alternate;
background: url(${img});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 100%;
position: absolute;
&:before {
content: "";
background: rgb(255, 255, 255);
position: absolute;
opacity: 0.8;
height: 100%;
width: 100%;
z-index: 1;
}
`

const Header = styled.header`
  background-color: black;
  height: 150px;
  position:relative;
  width: 100%,
`

const Img = styled.img` 
position: relative;
z-index: 10;
left:50%;
width: 200px;
margin-left: -100px;
top: 100px;
`

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '36px'
  },
  bmBurgerBars: {
    borderRadius: '5px',
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '150px',
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    fontWeight: 700,
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'pink',
    padding: '0.8em'
  },
  bmItem: {
    color: 'black',
    display: 'block',
    marginLeft: '-30px',
    marginTop: '10px',
    textDecoration: 'none',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
}

function Home() {
  const location = useLocation();
  const validateDisplay = location.pathname === '/';
  return (
    <>
      <Header>
        <H1 styled={true}>
          Bem-vindo ao Loto emulator
        </H1>
        <H2>
          Test your lucky in differents loto systems
        </H2>
        <Menu styles={styles} >
          <a id="lotofacil" className="menu-item" href="/lotofacil">Lotofacil</a>
          <a id="megasena" className="menu-item" href="/Megasena">Megasena</a>
        </Menu>
      </Header>
      <Outlet />
      <Main display={validateDisplay} >
        <Section1 background={img} />
        <Img src={gif} alt="winner" />
      </Main>
    </>
  );
}

export default Home;