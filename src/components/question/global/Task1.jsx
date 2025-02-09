import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Task1 = () => {
  useDocumentTitle('$task');

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          id="lection"
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <div className="main__content">

          </div>
        </div>
      </Layout>
  );
};

export default Task1;