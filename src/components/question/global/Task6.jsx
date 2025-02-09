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
              <h2>Расширения для Visual Studio Code</h2>
              <ol>
                <li>
                  Git Graph
                </li>
                <li className='color red'>
                  Live Server
                </li>
                <li className='color red'>
                  HTML CSS Support
                </li>
                <li>
                  vscode-icons
                </li>
                <li>
                  HTML Boilerplate
                </li>
                <li className='color red'>
                  HTML to CSS autocompletion
                </li>
                <li>
                  HTML/CSS/JavaScript Snippets
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task6;