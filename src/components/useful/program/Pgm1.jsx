import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';

const Pgm1 = () => {
  useDocumentTitle('Программа "Visual Studio"');

  return (
      <Layout>
        <div className="LectionPages">
          <NavLink
          id="useful"
          to="/learnskill/useful"
          className="back-link">
            <div className="content-card-lections">К материалам</div>
          </NavLink>
          <h1>Основной контент</h1>
          <h5>$name</h5>
        </div>
      </Layout>
  );
};

export default Pgm1;