import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lection from './components/Lection';
import Useful from './components/Useful';
import Politic from './components/Politic';
import Lec1 from './components/lections/start/Lec1';
import Lec5 from './components/lections/html_base/Lec5';
import Pgm1 from './components/useful/program/Pgm1';
import ChatGPT from './components/useful/site/ChatGPT';
import DeepSeek from './components/useful/site/DeepSeek';
import Saved from './components/Saved';
import Program from './components/Program';

const App = () => {
  return (
      <Routes>
        <Route path="/learnskill/" element={<Home />} />
        <Route path="/learnskill/lection" element={<Lection />} />
        <Route path="/learnskill/useful" element={<Useful />} />
        <Route path="/learnskill/saved" element={<Saved />} />
        <Route path="/learnskill/program" element={<Program />} />
        <Route path="/learnskill/politic" element={<Politic />} />
        <Route path="/learnskill/lection/start/lec1" element={<Lec1 />} />
        <Route path="/learnskill/lection/html/lec5" element={<Lec5 />} />
        <Route path="/learnskill/useful/program/pgm1" element={<Pgm1 />} />
        <Route path="/learnskill/useful/site/ChatGPT" element={<ChatGPT />} />
        <Route path="/learnskill/useful/site/DeepSeek" element={<DeepSeek />} />
      </Routes>
  );
};

export default App;
