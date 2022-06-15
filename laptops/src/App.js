

import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Venekeel from './pages/Venekeel';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/all'>
        <button>Vaata sylearvuteid</button>
      </Link>
      <Link to='/add'>
        <button>Lisa sylearvuti</button>
      </Link>
      <Link to='/vene'>
        <button>Vaheta keelt</button>
      </Link>
     <Routes>
       <Route path='' exact element={<Avaleht />}/>
       <Route path='all' exact element={<VaataArvuteid/>}/>
       <Route path='add' exact element={<LisaArvuti/>}/>
       <Route path='vene' exact element={<Venekeel/>}/>
     </Routes>
    </div>
  );
}

export default App;
