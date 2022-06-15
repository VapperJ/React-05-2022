import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avalehet';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Poed from './pages/Poed';
import HaldaTooteid from './pages/Halda tooteid';
import UksikToode from './pages/UksikToode';
import MuudaToode from './pages/MuudaToode';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Link to='/'>
       <Button variant="dark">Dark</Button>
      </Link>
      <Link to='/ostukorv'>
        <button>Ostukorv</button>
      </Link>
      <Link to='/lisa-toode'>
        <button>Lisa toode</button>
      </Link>
      <Link to='/halda-tooteid'>
        <button>Halda tooteid</button>
      </Link>
      <Link to='/poed'>
        <button>Poed</button>
      </Link>
      <Routes>
        <Route path="" exact element={<Avaleht/>} />
        <Route path="ostukorv" exact element={<Ostukorv/>} />
        <Route path="lisa-toode" exact element={<LisaToode/>} />
        <Route path="poed" exact element={<Poed/>} />
        <Route path="halda-tooteid" exact element={ < HaldaTooteid /> } />
        <Route path="toode/:nimi" exact element={ <UksikToode /> } />
        <Route path="muuda/:tooteNimi" exact element={ <MuudaToode /> } />
      </Routes>
    </div>
  );
}

export default App;
