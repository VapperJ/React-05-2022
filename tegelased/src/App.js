import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tegelased from './pages/Tegelased';
import AndmeteKuvamine from './pages/AndemteKuvamine';
import AndmeteLisamine from './pages/AndmeteLisamine';

//import RibaMenu from './components/RibaMenu';

function App() {
  return (
      <div className="App">
          <Link to='/'>
            <button>Avaleht</button>
          </Link>
          <Link to='/tegelased'>
            <button >Tegelased</button>
          </Link>
          <Link to='/andmed'>
            <button >AndmeteKuvamine</button>
          </Link>
          <Link to='/andmeteLisamine'>
            <button >AndmeteLisamine</button>
          </Link>
        <Routes>
          <Route path='/' exack element={ <Avaleht/>}/>
          <Route path='tegelased' exack element= {<Tegelased/>}/>
          <Route path='andmed' exack element={ <AndmeteKuvamine/>}/>
          <Route path='andmeteLisamine' exack element={ <AndmeteLisamine/>}/>
        </Routes>
      </div>
  );
}

export default App;
