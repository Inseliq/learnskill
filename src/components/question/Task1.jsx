import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout';
import useDocumentTitle from '../huks.js/useDocumentTitle';

const Task1 = () => {
  useDocumentTitle('$task');

  return (
      <Layout>
        <div className="TasksPages1">
          <NavLink
          id="lection"
          to="/learnskill/question"
          className="back-link">
            <div className="content-card-lections">К заданиям</div>
          </NavLink>
          whatwhy?
        </div>
      </Layout>
  );
};

export default Task1;