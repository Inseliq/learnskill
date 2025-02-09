import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';


const Task5 = () => {
  useDocumentTitle('GitHub Pages');

  const consoles = [
    {
      title: "bash",
      content: `
/$name
│── /assets
│   ├── /ico
│   │   ├── logo_ico.png
│   ├── /img
│   ├── /fonts
│── /src
│   ├── /css
│   │   ├── /styles
│   │   │   ├── main.css
│   │   ├── root.css
│   │   ├── fonts.css
│   │   ├── const.color.css
│   ├── /js
│   │   ├── app.js
├── .gitattributes
├── index.html
├── notes.txt
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
          <div className="main__content task5">
            <div className="text-task">
              <h2>Структурирование файлов</h2>
              <ol>
                <li>Создать папки assets и src, а так же для удобства notes.txt</li>
                <li>В папке src создать папки css и js</li>
                <li>В папке css создать папку style, а также файлы root.css, fonts.css, const.color.css</li>
                <li>В папке style создать файл main.css</li>
                <li>В папке js создать файл app.js</li>
                <li>В папке assets создать папки fonts, ico, img</li>
                <li className="coments">//Пример как должно выглядить, написал специально через консоль чтобы вы в дальнейшем могли работать с ChatGPT</li>
                <li className="coments">Объяснение:</li>
                <li className="coments">/$name - название репозитория;</li>
                <li className="coments">/assets - название папки;</li>
                <li className="coments">logo_ico.png - любой файл</li>
              </ol>
              <Console consoles={ consoles } />
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task5;