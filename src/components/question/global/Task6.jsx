import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Task6 = () => {
  useDocumentTitle('HTML вёрстка');

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <div className="main__content">
            <div className="text-task">
              <h2>Создание шапки и подвала</h2>
              <ol>
                <li>
                  //stop$$
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task6;