import Lotofacil from "./pages/Lotofacil";
import './styles/lotofacil.css';
import Provider from './context/Provider';
import Table from "./components/Table";

function App() {
  return (
    <Provider>
      <main>
        <Lotofacil />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
