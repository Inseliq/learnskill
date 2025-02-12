import React, { useState } from 'react';
import Layout from './Layout';
import { NavLink } from 'react-router-dom';
import useDocumentTitle from './huks.js/useDocumentTitle';
import './css/style/lection.css'

const Lection = () => {
    useDocumentTitle('Лекции');

  const [openButtonId, setOpenButtonId] = useState(false);

  const handleArticleClick = (id) => {
    setOpenButtonId(openButtonId === id ? false : id);
  };

  return (
      <Layout>
        <div className="lectionPage">
          <section className="title">
            Здесь собраны все лекции которые я буду писать
          </section>
          <section className="lection-block">
            <button
            className={`lection ${openButtonId === 'lectionStart' ? 'open' : ''}`}>
              <article className="name" onClick={() => handleArticleClick('lectionStart')}>
                <span>1. Начало работы</span>
              </article>
              <main className="content">
                <NavLink
                to="/learnskill/lection/start/lec1"
                className="card-lections pref-pgm">
                  <div className="content-card-lections">Инструменты, программное обеспечение</div>
                </NavLink>
                <NavLink
                to="/learnskill/lection/start/lec2"
                className="card-lections structure">
                  <div className="content-card-lections">Струкртура проекта (файлов)</div>
                </NavLink>
              </main>
            </button>
            <button
            className={`lection
            ${openButtonId === 'lectionHTML' ? 'open' : ''}`}>
              <article className="name" onClick={() => handleArticleClick('lectionHTML')}>
                <span>2. HTML База</span>
              </article>
              <main className="content">
                <NavLink
                to="/learnskill/lection/html/lec1"
                className="card-lections head-html">
                  <div className="content-card-lections">Создание шапки и подвала сайта</div>
                </NavLink>
                <NavLink
                to="/learnskill/lection/html/lec2"
                className="card-lections link-html">
                  <div className="content-card-lections">Подключение css к html</div>
                </NavLink>
              </main>
            </button>
            <button
            className={`lection
            ${openButtonId === 'lectionCSS' ? 'open' : ''}`}>
              <article className="name" onClick={() => handleArticleClick('lectionCSS')}>
                <span>3. CSS База</span>
              </article>
              <main className="content">
                <NavLink
                to="/learnskill/lection/css/lec1"
                className="card-lections locks">
                  <div className="content-card-lections">Работа с шапкой и подвалом</div>
                </NavLink>
                <NavLink
                to="/learnskill/lection/html/lec2"
                className="card-lections locks">
                  <div className="content-card-lections">Работа с шрифтами</div>
                </NavLink>
                <NavLink
                to="/learnskill/lection/html/lec2"
                className="card-lections locks">
                  <div className="content-card-lections">Работа с цветами</div>
                </NavLink>
                <NavLink
                to="/learnskill/lection/html/lec2"
                className="card-lections locks">
                  <div className="content-card-lections">Стилизация шапки</div>
                </NavLink>
              </main>
            </button>
          </section>
        </div>
      </Layout>
  );
};

export default Lection;