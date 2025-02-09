import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../Layout';
import useDocumentTitle from '../huks.js/useDocumentTitle';
import filterIco from '../assets/icon/other/filter-ico.png';
import '../css/style/question.css';
import Checkbox from '../Checkbox';

function GTask1() {
  useDocumentTitle('Добрый друг');

  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (id) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(id) ? prevFilters.filter((f) => f !== id) : [...prevFilters, id]
    );
  };

  const filters = [
    { id: 'installApp', className: 'f__1', label: 'Работа с программами' },
    { id: 'html', className: 'f__2', label: 'HTML' },
    { id: 'css', className: 'f__3', label: 'CSS' },
  ];

  const contentItems = [
  { id: 1, className: "installApp", text: "Программное обеспечение", link: "/learnskill/question/task1/quest1", icon: "🛠" },
  { id: 2, className: "installApp", text: "GitHub Desktop", link: "/learnskill/question/task1/quest2", icon: "🧩" },
  { id: 3, className: "installApp", text: "VSC Расширения", link: "/learnskill/question/task1/quest3", icon: "📁" },
  { id: 4, className: "installApp", text: "GitHub Pages", link: "/learnskill/question/task1/quest4", icon: "🌍" },
  { id: 5, className: "installApp", text: "Структурирование файлов", link: "/learnskill/question/task1/quest5", icon: "📚" },
  { id: 6, className: "html", text: "Написание шапки и подвала сайта", link: "/learnskill/question/task1", icon: "</>" },
  { id: 7, className: "css", text: "Стили для шапки и футера", link: "/learnskill/question/task1", icon: "🎨" },
  ];


  return (
    <Layout>
      <div className="QuestionPage">
        <button className="aside-menu">
          <span className="element">
            <img src={filterIco} alt="filter-ico" />
          </span>
          <div className="menu__content">
            <div className="head-menu__content">
              <h2>Фильтры</h2>
            </div>
            <div className="main-menu__content">
              {filters.map(({ id, className, label }) => (
                <div className={`block-checkbox ${className}`} key={id}>
                  <Checkbox id={id} checked={selectedFilters.includes(id)} onChange={toggleFilter} />
                  <h4>{label}</h4>
                </div>
              ))}
            </div>
          </div>
        </button>
        <NavLink
        to="/learnskill/question"
        className="back-link">
        </NavLink>
        <div className="main__content">
          {contentItems.map(({ id, className, text, link, icon }) =>
            selectedFilters.length === 0 || selectedFilters.includes(className) ? (
              <NavLink key={id} className={`quest__card ${className}`} to={link}>
                <div className="quest__icon">{icon}</div>
                <div className="quest__text">{text}</div>
              </NavLink>
            ) : null
           )}
        </div>
      </div>
    </Layout>
  );
}

export default GTask1;
