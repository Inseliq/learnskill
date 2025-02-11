import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task11 = () => {
  useDocumentTitle('HTML вёрстка');

  const path = '/learnskill/question/task1/quest9';
  const path_lec = '/learnskill/lection/html/lec2';

  const consoles = [
    {
      title: "html",
      content: `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="$path">
  <script src="$path" $atribute></script>
  <title>Добрый друг</title>
</head>
      `,
    },
  ];

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
              <h2>Правильный import и подключение css к html</h2>
              <ol>
                <li className='color red'>
                  В файле main.css сделать импорт root.css с помощью "@import url($path)"
                </li>
                <li>
                  В файле index.html с помощью тега link в head сайта, подключить main.css
                </li>
                <li>Ещё в файле index.html с помощью тега script подключить файл app.js с атрибутом defer</li>
                <li className="coments">
                  $path - означает путь до файла
                </li>
                <li className="coments">
                  $atribute - означает атрибут
                </li>
              </ol>
              <Console consoles={ consoles } />
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task11;