import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task4 = () => {
  useDocumentTitle('GitHub Pages');

  const path = '/learnskill/question/task1/quest5';
  const path_lec = '/learnskill/useful/program/pgm4#pages';

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <NextBtn path = {path} />
          <LecBtn path_lec = {path_lec}/>
          <div className="main__content">
            <div className="text-task">
              <h2>GitHub Pages</h2>
              <ol>
                <li>Создать файл index.html</li>
                <li>Зайти на GitHub в браузере</li>
                <li>Через настройки во вкладке Pages</li>
                <li>Выбрать рабочу ветку и установить /root ➡ <samp>Save</samp></li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task4;