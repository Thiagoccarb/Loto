import styled from 'styled-components';
import Lotofacil from "./pages/Lotofacil";
import './styles/lotofacil.css';
import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Stats from './components/Stats';
import background from './images/loto.jpg';


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

function App() {
  return (
    <Main background={background}>
      <Section marginTop={'30px'}>
        <Buttons />
        <Counter />
      </Section>
      <Section >
        <Lotofacil />
      </Section>
      <Section >
        <Stats />
      </Section>
      <Section >
        <Table />
      </Section>
    </Main>
  );
}

export default App;
