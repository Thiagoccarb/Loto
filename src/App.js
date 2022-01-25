import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Lotofacil from "./pages/Lotofacil";
import './styles/lotofacil.css';
import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Stats from './components/Stats';
import Home from './pages/Home';
import Results from './components/Results';

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

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="lotofacil" element={
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
                <Stats />
              </Section>
              <Section >
                <Table />
              </Section>
            </Main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
