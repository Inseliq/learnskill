import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from './assets/icon/logo/logo.svg';
import pref from './assets/icon/other/preference-icon.png';

const Header = ({toggleSidebar, isSidebarOpen}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
  };

    const getDescriptionText = () => {
    switch (location.pathname) {
      case '/learnskill/lection':
        return 'Лекции';
      case '/learnskill/useful':
        return 'Полезные материалы';
      case '/learnskill/program':
        return 'Программа обучения';
      case '/learnskill/saved':
        return 'Записи вебинаров';
      case '/learnskill/question':
        return 'Задания';
      case '/learnskill/schedule':
        return 'Расписание вебинаров';
      case '/learnskill/politic':
        return 'Политика конфиденциальности';
      case '/learnskill/lection/start/lec1':
        return 'Инструменты, программное обеспечение';
      case '/learnskill/lection/start/lec2':
        return 'Структура проекта (файлов)';
      case '/learnskill/lection/html/lec1':
        return 'Создание шапки и подвала сайта';
      case '/learnskill/lection/html/lec2':
        return 'Подключение css к html';
      case '/learnskill/lection/css/lec1':
        return 'Работа над шапкой и подвалом';
      case '/learnskill/lection/css/itog_code1':
        return 'Итоговый код';
      case '/learnskill/lection/css/itog_code2':
        return 'Итоговый код';
      case '/learnskill/lection/css/itog_code3':
        return 'Итоговый код';
      case '/learnskill/lection/css/itog_code4':
        return 'Итоговый код';
      case '/learnskill/lection/css/lec2':
        return 'Работа с шрифтами';
      case '/learnskill/lection/css/lec3':
        return 'Работа с цветами';
      case '/learnskill/lection/css/lec4':
        return 'Стилизация шапки';
      case '/learnskill/useful/program/pgm1':
        return 'Программа "Visual Studio"';
      case '/learnskill/useful/program/pgm2':
        return 'Программа "Visual Studio Code"';
      case '/learnskill/useful/program/pgm3':
        return 'Программа "Figma"';
      case '/learnskill/useful/program/pgm4':
        return 'Программа "GitHub Desktop"';
      case '/learnskill/question/task1':
        return 'Добрый друг';
      case '/learnskill/question/task1/quest1':
        return 'Программное обеспечение';
      case '/learnskill/question/task1/quest2':
        return 'GitHub Desktop';
      case '/learnskill/question/task1/quest3':
        return 'VSC Расширения';
      case '/learnskill/question/task1/quest4':
        return 'GitHub Pages';
      case '/learnskill/question/task1/quest5':
        return 'Структурирование файлов';
      case '/learnskill/question/task1/quest6':
        return 'HTML вёрстка';
      case '/learnskill/question/task1/quest7':
        return 'CSS вёрстка';
      case '/learnskill/question/task1/quest8':
        return 'CSS вёрстка';
      case '/learnskill/question/task1/quest9':
        return 'CSS вёрстка';
      case '/learnskill/question/task1/quest10':
        return 'CSS вёрстка';
      case '/learnskill/question/task1/quest11':
        return 'HTML вёрстка';
      case '/learnskill/question/task1/home1':
        return 'Проверка ДЗ';
      case '/learnskill/useful/site/ChatGPT':
        return 'О ChatGPT';
      case '/learnskill/useful/site/DeepSeek':
        return 'О DeepSeek';
      default:
        return 'Добро пожаловать!';
    }
  };

  return (
    <header className='head'>
      <section className="header">
        <NavLink className="logo" to="/learnskill/">
          <h1>LearnSkill</h1>
          <img src={logo} alt="logo-icon" className='animed-logo' />
        </NavLink>
        <div className="description">
          <h2 id='description'>{getDescriptionText()}</h2>
        </div>
        <div className='service'>
          <button className="aside-menu__right">
          <span className="element">
            🔔
          </span>
          <div className="menu__content">
            <div className="head-menu__content">
              <h2>Панель уведомлений</h2>
            </div>
            <div className="main-menu__content adt">
              <h4 className='upd-name latest'>⚡ Обновление 0.1.5</h4>
              <p>1. Написаны лекции для css, а так же немного изменён курс по css </p>
              <p>2. Фикс багов найденные пользователями</p>
              <p>3. Добавлен переключатель</p>
              <p>• Видеоурок</p>
              <p>• Лекция</p>
              <p>4. Переделана маршрутизация до компонентов проекта</p>
              <p>5. Добавлена возможность движения к якорям страниц</p>
              <p>6. Добавлена возможность движения к якорям страниц при переходе на другую страницу</p>
              <p>7. Добавлены более удобные итоги кода</p>
              <h4 className="upd-name pre">🔥 Обновление 0.1.4</h4>
              <p className="pre">1. Добавлена минюшка контроля обновлений.</p>
              <p className='pre'>2. Обновлён курс по html</p>
              <p className='pre'>3. Обновлён сборщик проекта</p>
              <p className='pre'>4. Обновлён видео плеер для видеоуроков и будующих записей вебинаров</p>
              <p className='pre'>5. Добавлены видео для видеоуроков по html</p>
              <h4 className="upd-name pre"><span className="snow-elem">❄</span> Обновления 0.0.1 - 0.1.3</h4>
              <p className='pre'>Отображаться ну будут!!!</p>
            </div>
          </div>
        </button>
          <NavLink
        id="preference"
        to="/learnskill/useful"
        className='link-img'>
          <img src={pref} alt="preference" />
          </NavLink>
          <button
            className={`asidebar-btn
            ${isSidebarOpen ? "active" : "unactive"}
            `}
            onClick={handleButtonClick}>
              <span></span>
          </button>
        </div>
      </section>
      <nav className='navbar'>
        <NavLink
        id="lection"
        to="/learnskill/lection"
        className={location.pathname === '/learnskill/lection' ? 'this link' : 'link'}>
          Лекции
        </NavLink>
        <NavLink
        id="useful"
        to="/learnskill/useful"
        className={location.pathname === '/learnskill/useful' ? 'this link' : 'link'}>
          Полезные материалы
        </NavLink>
        <NavLink
        id="program"
        to="/learnskill/program"
        className={location.pathname === '/learnskill/program' ? 'this link' : 'link'}>
          Программа обучения
        </NavLink>
        <NavLink
        id="saved"
        to="/learnskill/saved"
        className={location.pathname === '/learnskill/saved' ? 'this link' : 'link'}>
          Записи вебинаров
        </NavLink>
        <NavLink
        id="question"
        to="/learnskill/question"
        className={location.pathname === '/learnskill/question' ? 'this link' : 'link'}>
          Задания
        </NavLink>
        <NavLink
        id="schedule"
        to="/learnskill/schedule"
        className={location.pathname === '/learnskill/schedule' ? 'this link' : 'link'}>
          Расписание вебинаров
        </NavLink>
      </nav>
      <nav className='navbar-mobile'>
        <h2 id='description-mobile'>{getDescriptionText()}</h2>
      </nav>
    </header>
  );
};

export default Header;