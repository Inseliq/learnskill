import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Task4 = () => {
  useDocumentTitle('GitHub Pages');

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <div className="main__content">
            <div className="text-task">
              <h2>GitHub Pages</h2>
              <ol>
                <li>Создать файл index.html</li>
                <li>Зайти на GitHub в браузере</li>
                <li>Через настройки во вкладке Pages</li>
                <li>Выбрать рабочу ветку и установить /root => <samp>Save</samp></li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task4;