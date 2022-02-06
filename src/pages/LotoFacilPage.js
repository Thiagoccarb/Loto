import styled from 'styled-components';
import Lotofacil from "../components/Lotofacil";
import Table from "../components/Table";
import Buttons from "../components/Buttons";
import Counter from "../components/Counter";
import Stats from '../components/Stats';
import Results from '../components/Results';
import lotofacil from '../lotofacilSorteios.json';
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


function LotofacilPage() {
  return (
    <Main>
      <Section marginTop={'30px'}>
        <Buttons />
        <Counter />
        <Results />
      </Section>
      <Section >
        <Lotofacil />
      </Section>
      <Section >
        <Stats maxNumber={25} draws={lotofacil} />
      </Section>
      <Section >
        <Table />
      </Section>
    </Main>
  )
};

export default LotofacilPage;