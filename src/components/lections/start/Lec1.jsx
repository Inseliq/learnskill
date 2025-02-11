import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';

const Lec1 = () => {
  useDocumentTitle('Лекция "Инструменты, программное обеспечение"');

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/lection"
          className="back-link back">
          </NavLink>
          <main className="main_content">
            <h2>Инструменты, программное обеспечение</h2>
            <ol>
              <li>
                <NavLink to='/learnskill/useful/program/pgm1' className='link'>Гайд по Visual Studio</NavLink>
              </li>
              <li>
                <NavLink to='/learnskill/useful/program/pgm2' className='link'>Гайд по Visual Studio Code</NavLink>
              </li>
              <li>
                <NavLink to='/learnskill/useful/program/pgm3' className='link'>Гайд по Figma</NavLink>
              </li>
              <li>
                <NavLink to='/learnskill/useful/program/pgm4' className='link'>Гайд по GitHub Desktop</NavLink>
              </li>
              <li>
                Discord Desktop - мы будем использовать для более удобной связи с вами.
                <p>Там есть задания, расписание тем, вопросы по обучению (любые вопросы которые вы можете задать мне), полезные материалы, ну и просто чатик где мы можем пообщаться о чём захотим.</p>
                <p className="color red">Добавьте свои репозитории github и gh-pages во вкладку git-hubs</p>
                <p><a href='' className='link'>Скачать Discord Desktop</a></p>
              </li>
            </ol>
          </main>
        </div>
      </Layout>
  );
};

export default Lec1;