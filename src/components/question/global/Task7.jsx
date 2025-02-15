import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task7 = () => {
  useDocumentTitle('CSS вёрстка');

  const path = '/learnskill/question/task1/quest8';
  const path_lec = '/learnskill/lection/css/lec2';

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
              <h2>Работа с шрифтами</h2>
              <ol>
                <li>В файле fonts.css с помощью @import подключаем шрифт с сайта <a rel="noopener noreferrer" target='_blank' href="https://fonts.google.com" className="color link">google.fonts</a></li>
                <li>Далее с помощью псевдо элемента * сделать для всех тегов шрифт 12-16px с помощью функции <samp>clamp</samp> 12px для ширины 344px, 16px для 1440px соответсвенно.</li>
                <li>Для каждого тега h1, h2, h3, h4 установить с помощью функции <samp>clamp</samp> установить любые размеры шрифта, но с ограничением экрана 344px - 1440px</li>
                <li>Сайт для генерации <a rel="noopener noreferrer" target='_blank' href="https://clamp.font-size.app" className="color link">функции clamp</a></li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task7;