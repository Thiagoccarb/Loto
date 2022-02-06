import styled from 'styled-components';
import Megasena from "../components/Megasena";
import Table from "../components/Table";
import Buttons from "../components/Buttons";
import Counter from "../components/Counter";
import Stats from '../components/Stats';
import Results from '../components/Results';
import megasena from '../megasenaSorteios.json';
import '../styles/lotofacil.css';

const Main = styled.main`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
`;

const Section = styled.section`
width: 25%;
margin-top: ${props => props.marginTop};
`;


function MegasenaPage() {
  return (
    <Main>
      <Section marginTop={'30px'}>
        <Buttons />
        <Counter />
        <Results />
      </Section>
      <Section >
        <Megasena />
      </Section>
      <Section >
        <Stats maxNumber={60} draws={megasena} />
      </Section>
      <Section >
        <Table />
      </Section>
    </Main>
  )
};

export default MegasenaPage;