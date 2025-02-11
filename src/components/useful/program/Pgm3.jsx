import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Pgm3 = () => {
  useDocumentTitle('Программа ""');

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link back">
          </NavLink>
          <div className='back-link back img'></div>
          <main className="main_content pgm">

          </main>

        </div>
      </Layout>
  );
};

export default Pgm3;