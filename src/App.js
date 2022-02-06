import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import LotofacilPage from './pages/LotoFacilPage';
import MegasenaPage from './pages/MegasenaPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="lotofacil" element={<LotofacilPage />} />
          <Route path="megasena" element={<MegasenaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
