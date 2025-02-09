import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';

const Lec1 = () => {
  useDocumentTitle('Лекция "Инструменты, программное обеспечение"');

  return (
      <Layout>
        <div className="LectionPages">
          <NavLink
          to="/learnskill/lection"
          className="back-link">
            <div className="content-card-lections">К лекциям</div>
          </NavLink>
          <h1>Основной контент</h1>
          <h5>Инструменты, программное обеспечение</h5>
        </div>
      </Layout>
  );
};

export default Lec1;