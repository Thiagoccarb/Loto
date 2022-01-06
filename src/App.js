import Lotofacil from "./pages/Lotofacil";
import './styles/lotofacil.css';
import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";


function App() {
  return (
      <main>
        <Lotofacil />
        <Counter />
        <Buttons />
        <Table />
      </main>
  );
}

export default App;
