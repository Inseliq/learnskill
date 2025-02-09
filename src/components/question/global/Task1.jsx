import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Task1 = () => {
  useDocumentTitle('Программное обеспечение');

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <div className="main__content">
            <div className="text-task">
              <h2>Что необходимо установить для удобной работы с проектом</h2>
              <ol>
                <li className='color red'>Скачать Visual Studio Code</li>
                <li>Скачать Visual Studio (Для работы с фремворками)</li>
                <li className='color red'>GitHub Desktop</li>
                <li>Diskord Desktop</li>
                <li className='color red'>Figma (веркторный графический редактор)</li>
                <li>
                  <h4>Сайты</h4>
                  <ul>
                    <li>
                      <a rel="noopener noreferrer" target='_blank' href="https://htmlweb.ru/html/symbols.php" className="link">HTML Web Symbols (Символы которые можно использовать на сайте)</a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" target='_blank' href="https://www.photopea.com/" className="link">Photopea (Фотошоп онлайн бесплатный)</a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" target='_blank' href="https://fonts.google.com/" className="link">Google Fonts (Шрифты)</a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" target='_blank' href="https://clamp.font-size.app" className="link">Clamp Generator (Генератор для адаптации шрифтов под ширину)</a>
                    </li>
                    <li className='coments'>//Всё названия кликабельны</li>
                  </ul>
                </li>
                <li>
                  <h4>Дополнительные приложения которые я использую</h4>
                  <ul>
                    <li>Microsoft To Do (Помогает мне запоминать что нужно сделать за день)</li>
                    <li>SQL Server Management Studio (Приложение для работами с базами данных)</li>
                    <li>Yandex и Google Chrome (Два браузера для отладки)</li>
                    <li className='coments'>//Всё что помечено красным - обязательны!</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task1;