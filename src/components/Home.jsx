import React from 'react';
import Layout from './Layout';
import { NavLink } from 'react-router-dom';
import useDocumentTitle from './huks.js/useDocumentTitle';
import './css/style/home.css'

const Home = () => {
  useDocumentTitle('LearnSkill');

  return (
      <Layout>
        <div className="homePage">
          <section className="home__title">
            <h2><span className="anim">LearnSkill</span> - образовательная платформа</h2>
            <h4>Если найдёте какую-то ошибку или недочёт пишите мне в тг <samp>@ncuxoseeliq</samp></h4>
          </section>
          <section className="card-block">
            <NavLink
            to="/learnskill/lection"
            className="card lection">
              <div className="content-card">
                Лекции
              </div>
            </NavLink>
            <NavLink
            to="/learnskill/useful"
            className="card useful">
              <div className="content-card">
                Полезные материалы
              </div>
            </NavLink>
            <NavLink
            to="/learnskill"
            className="card programs">
              <div className="content-card">
                Программа обучения
              </div>
            </NavLink>
            <NavLink
            to="/learnskill"
            className="card saved">
              <div className="content-card">
                Записи вебинаров
              </div>
            </NavLink>
            <NavLink
            to="/learnskill"
            className="card questions">
              <div className="content-card">
                Задания
              </div>
            </NavLink>
            <NavLink
            to="/learnskill"
            className="card schedule">
              <div className="content-card">
                Расписание вебинаров
              </div>
            </NavLink>
          </section>
        </div>
      </Layout>
  );
};

export default Home;