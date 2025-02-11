import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task6 = () => {
  useDocumentTitle('HTML вёрстка');

  const path = '/learnskill/question/task1/quest11';
  const path_lec = '/learnskill/lection/html/lec1';

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
              <h2>Создание шапки и подвала</h2>
              <ol>
                <li>
                  Сделать header
                </li>
                <li>
                  Сделать main
                </li>
                <li>
                  Сделать footer
                </li>
                <li>header, footer, main должны содержать в себе ограничивающий контейнер</li>
                <li>В шапке обязательно должны присутсвовать, строка навигации (тег nav), и логотип</li>
                <li>В подвале сайта должен быть текст и минимум одна ссылка на другую страницу (например: О нас, Политика конфинденциальности)</li>
                <li>Содержимое шапки logo, navbar, в nav должны быть 3 ссылки: Главная, Наши питомцы, Контакты.</li>
                <li>Текст подвала: © 2025 $name. Все права защищены.</li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task6;