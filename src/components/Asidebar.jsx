import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './css/layout/asidebar.css';

const Asidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <section className="office">
        <h2>Меню</h2>
        <button className='close-btn' onClick={ toggleSidebar }>
        </button>
      </section>
      <nav className="aside-bar__navbar">
        <NavLink
        id="lection"
        to="/learnskill/"
        className={location.pathname === '/learnskill/' ? 'Athis Alink' : 'Alink'}>
          Главная
        </NavLink>
        <NavLink
        id="lection"
        to="/learnskill/lection"
        className={location.pathname === '/learnskill/lection' ? 'Athis Alink' : 'Alink'}>
          Лекции
        </NavLink>
        <NavLink
        id="useful"
        to="/learnskill/useful"
        className={location.pathname === '/learnskill/useful' ? 'Athis Alink' : 'Alink'}>
          Полезные материалы
        </NavLink>
        <NavLink
        id="programs"
        to="/learnskill/program"
        className={location.pathname === '/learnskill/program' ? 'Athis Alink' : 'Alink'}>
          Программа обучения
        </NavLink>
        <NavLink
        id="saved"
        to="/learnskill"
        className={location.pathname === '/learnskill/saved' ? 'Athis Alink' : 'Alink'}>
          Записи вебинаров
        </NavLink>
        <NavLink
        id="question"
        to="/learnskill/question"
        className={location.pathname === '/learnskill/question' ? 'Athis Alink' : 'Alink'}>
          Задания
        </NavLink>
        <NavLink
        id="schedule"
        to="/learnskill/schedule"
        className={location.pathname === '/learnskill/schedule' ? 'Athis Alink' : 'Alink'}>
          Расписание вебинаров
        </NavLink>
        <NavLink
        id="lection"
        to="/learnskill/politic"
        className={location.pathname === '/learnskill/politic' ? 'Athis Alink' : 'Alink'}>
          Конфиденциальность
        </NavLink>
      </nav>
    </aside>
  );
};

export default Asidebar;