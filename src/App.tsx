/* eslint-disable @typescript-eslint/no-unused-vars */


import React from 'react';
import './styles/App.css';
import './styles/Responsive.css'
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Accueil from './pages/Accueil';
import Score from './pages/ScorePage'

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/score" element={<Score/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;