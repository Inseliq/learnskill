import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task8 = () => {
  useDocumentTitle('CSS вёрстка');

  const path = '/learnskill/question/task1/quest10';
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
              <h2>Работа с цветами</h2>
              <ol>
                <li>
                  В файле const.color.css создать глобальный класс <samp>:root</samp>
                </li>
                <li>
                  С помощью <samp>--название_переменной: цвет</samp> (через #000) создать переменные --header, --footer, --body, --main, --main-font-color в глобальном классе :root.
                </li>
                <li>
                  Создать глобальный класс с селекторным классом, для тёмной темы <samp>.dark:root</samp>
                </li>
                <li>
                  С помощью перменных создать в тёмной теме теже переменные, только с тёмным оттенком фона и светлым шрифтом
                </li>
                <li>
                  Всем элементам дать цвета через переменную --main-font-color и псевдо элемента *
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task8;