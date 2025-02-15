import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task9 = () => {
  useDocumentTitle('CSS вёрстка');

  const path = '/learnskill/question/task1/quest7';
  const path_lec = '/learnskill/lection/css/lec1';

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
              <h2>Работа с шапкой и подвалом сайта</h2>
              <ol>
                <li className="color red">
                  В файле <samp>root.css</samp> сделать @import файлов const.color.css и fonts.css
                </li>
                <li className='color red'>Всем элементам с помощью * выдать обязательные параметры:
                  <p>margin: 0;</p>
                  <p>padding: 0;</p>
                  <p>outline: 0;</p>
                  <p>box-sizing: border-box;</p>
                  <p>text-decoration: none;</p>
                </li>
                <li className='mt5px'>
                  html, body установить ширину и высоту соответственно 100% и 100vh с помощью flex выровнить шапку сверху, основной контент по центру и подвал снизу
                </li>
                <li>
                  Установить максимальную ширину контейнера 1440px и растянуть на 100% этой ширины
                </li>
                <li>
                  С помощью flex разместить шапку, основной контент и подвал по центру.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task9;