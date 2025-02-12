import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lection from './components/Lection';
import Useful from './components/Useful';
import Politic from './components/Politic';
import Lec1 from './components/lections/start/Lec1';
import Lec2 from './components/lections/start/Lec2';
import Lec3 from './components/lections/html_base/Lec3';
import Lec4 from './components/lections/html_base/Lec4';
import Pgm1 from './components/useful/program/Pgm1';
import Pgm2 from './components/useful/program/Pgm2';
import Pgm3 from './components/useful/program/Pgm3';
import Pgm4 from './components/useful/program/Pgm4';
import Task1 from './components/question/global/Task1';
import Task2 from './components/question/global/Task2';
import Task3 from './components/question/global/Task3';
import Task4 from './components/question/global/Task4';
import Task5 from './components/question/global/Task5';
import Task6 from './components/question/global/Task6';
import Task7 from './components/question/global/Task7';
import Task8 from './components/question/global/Task8';
import Task9 from './components/question/global/Task9';
import Task10 from './components/question/global/Task10';
import Task11 from './components/question/global/Task11';
import Home1 from './components/question/global/Home1';
import GTask1 from './components/question/GTask1';
import ChatGPT from './components/useful/site/ChatGPT';
import DeepSeek from './components/useful/site/DeepSeek';
import Saved from './components/Saved';
import Program from './components/Program';
import Schedule from './components/Schedule';
import Question from './components/Question';

const App = () => {
  return (
      <Routes>
        <Route path="/learnskill/" element={<Home />} />
        <Route path="/learnskill/lection" element={<Lection />} />
        <Route path="/learnskill/useful" element={<Useful />} />
        <Route path="/learnskill/saved" element={<Saved />} />
        <Route path="/learnskill/program" element={<Program />} />
        <Route path="/learnskill/politic" element={<Politic />} />
        <Route path="/learnskill/schedule" element={<Schedule />} />
        <Route path="/learnskill/question" element={<Question />} />
        <Route path="/learnskill/lection/start/lec1" element={<Lec1 />} />
        <Route path="/learnskill/lection/start/lec2" element={<Lec2 />} />
        <Route path="/learnskill/lection/html/lec1" element={<Lec3 />} />
        <Route path="/learnskill/lection/html/lec2" element={<Lec4 />} />
        <Route path="/learnskill/useful/program/pgm1" element={<Pgm1 />} />
        <Route path="/learnskill/useful/program/pgm2" element={<Pgm2 />} />
        <Route path="/learnskill/useful/program/pgm3" element={<Pgm3 />} />
        <Route path="/learnskill/useful/program/pgm4" element={<Pgm4 />} />
        <Route path="/learnskill/question/task1/quest1" element={<Task1 />} />
        <Route path="/learnskill/question/task1/quest2" element={<Task2 />} />
        <Route path="/learnskill/question/task1/quest3" element={<Task3 />} />
        <Route path="/learnskill/question/task1/quest4" element={<Task4 />} />
        <Route path="/learnskill/question/task1/quest5" element={<Task5 />} />
        <Route path="/learnskill/question/task1/quest6" element={<Task6 />} />
        <Route path="/learnskill/question/task1/quest7" element={<Task7 />} />
        <Route path="/learnskill/question/task1/quest8" element={<Task8 />} />
        <Route path="/learnskill/question/task1/quest9" element={<Task9 />} />
        <Route path="/learnskill/question/task1/quest10" element={<Task10 />} />
        <Route path="/learnskill/question/task1/quest11" element={<Task11 />} />
        <Route path="/learnskill/question/task1/home1" element={<Home1 />} />
        <Route path="/learnskill/question/task1" element={<GTask1 />} />
        <Route path="/learnskill/useful/site/ChatGPT" element={<ChatGPT />} />
        <Route path="/learnskill/useful/site/DeepSeek" element={<DeepSeek />} />
      </Routes>
  );
};

export default App;
