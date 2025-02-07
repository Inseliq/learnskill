import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';
import useDocumentTitle from './huks.js/useDocumentTitle';
import './css/style/program.css';

const Program = () => {
  useDocumentTitle('Программа обучения');

  return (
      <Layout>
        <div className="ProgramPage">
          <NavLink
          id="useful"
          to="/learnskill/"
          className="back-link">
          </NavLink>
        </div>
      </Layout>
  );
};

export default Program;