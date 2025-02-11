import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import saved_5 from '../../assets/img/screen/saved_5.jpg';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task10 = () => {
  useDocumentTitle('CSS вёрстка');

  const path = '/learnskill/question/task1/home1';
  const path_lec = '/learnskill/lection/css/lec4';

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
            <div className="text-task task10">
              <h2>Стилизация шапки</h2>
              <ol>
                <li>Задаём цвет шапки через переменную --header</li>
                <li>с помощью & у контейнера в теге header поменять на justify-content: space-between;</li>
                <li>Логотипу задать отступ слева в 10px, через flex выровнять по центру по вертикали и отступ от img 10px</li>
                <li>Так же через & родительский класс и функцию clam задать img адаптацию при ширине экране в 344px сделать размер изображения 32px, а при 1440px 64px соответственно</li>
                <li>Навигации (nav) с помощью flex задать вертикальное выравнивание по центру и растояние между ссылками 10px, а ещё добавить отступ 10px справа</li>
                <li className="coments">Пример как должно выглядить:</li>
              </ol>
              <img src={saved_5} alt="screen_saved_5" />
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task10;