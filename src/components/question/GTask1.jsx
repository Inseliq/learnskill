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
    { id: 'html', className: 'f__2', label: 'HTML вёрстка' },
    { id: 'css', className: 'f__3', label: 'CSS вёрстка' },
    { id: 'offset', className: 'f__4', label: 'Проверка ДЗ' },
  ];

  const contentItems = [
  { id: 1, className: "installApp", text: "Программное обеспечение", link: "/learnskill/question/task1/quest1", icon: "🛠" },
  { id: 2, className: "installApp", text: "GitHub Desktop", link: "/learnskill/question/task1/quest2", icon: "🧩" },
  { id: 3, className: "installApp", text: "VSC Расширения", link: "/learnskill/question/task1/quest3", icon: "📁" },
  { id: 4, className: "installApp", text: "GitHub Pages", link: "/learnskill/question/task1/quest4", icon: "🌍" },
  { id: 5, className: "installApp", text: "Структурирование файлов", link: "/learnskill/question/task1/quest5", icon: "📚" },
  { id: 6, className: "html", text: "Написание шапки и подвала сайта", link: "/learnskill/question/task1/quest6", icon: "</>" },
  { id: 7, className: "html", text: "Подключение css к html", link: "/learnskill/question/task1/quest11", icon: "🚩" },
  { id: 8, className: "css", text: "Работа с шапкой и подвалом", link: "/learnskill/question/task1/quest9", icon: "🏗" },
  { id: 9, className: "css", text: "Работа с шрифтами", link: "/learnskill/question/task1/quest7", icon: "🖊" },
  { id: 10, className: "css", text: "Работа с цветами", link: "/learnskill/question/task1/quest8", icon: "🎨" },
  { id: 11, className: "css", text: "Стилизация шапки", link: "/learnskill/question/task1/quest10", icon: "🎆" },
  { id: 12, className: "offset", text: "Проверка ДЗ 16.02", link: "/learnskill/question/task1/home1", icon: "📅" },
  ];


  return (
    <Layout>
      <div className="QuestionPage gtask">
        <button className="aside-menu__left">
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
        className="back-link back">
        </NavLink>
        <button className="aside-menu__right">
          <span className="element">
            📖
          </span>
          <div className="menu__content">
            <div className="head-menu__content">
              <h2>Полное задание</h2>
            </div>
            <div className="main-menu__content task">
                <span>Создание многостраничного сайта "<b>Добрый Друг</b>" (приют для кошек)</span>
                <p>Цель: Разработать сайт для виртуального приюта кошек, состоящий из трёх страниц: Главная, Наши питомцы, Контакты.</p>
                <h3>1. Требования к страницам:</h3>
                <h3>Главная (index.html)</h3>
                <p>• Логотип: Название приюта (например, "Добрый Друг") в шапке сайта.</p>
                <p>• Навигация: Меню с ссылками на все три страницы (горизонтальное или вертикальное).</p>
                <h3>Приветственный блок:</h3>
                <p>• Заголовок "Подарим котикам теплый дом!"</p>
                <p>• Краткий текст о миссии приюта (1-2 абзаца), можно использовать Emmet: Lorem</p>
                <p>• Большая тематическая картинка (например, котик в коробке).</p>
                <p>• Преимущества: Список из 3-4 пунктов (например, "Бесплатная стерилизация", "Помощь ветеринара"). Оформить иконками (можно через emoji 🏥❤️🐟) или блоками с фоном.</p>
                <h3>Наши питомцы (pets.html)</h3>
                <h3>Сетка карточек:</h3>
                <h4>6 карточек с котиками. В каждой:</h4>
                <p>
                  • Фото (используйте заглушки или скачайте изображения). Кличка (заголовок).
                </p>
                <p>• Краткое описание (порода, возраст, характер: "Мурзик, 2 года, любит играть с мячиком").</p>
                <p>• Стиль карточек: Рамки, тени, hover-эффект при наведении (например, изменение фона).</p>
                <h3>Контакты (contacts.html)</h3>
                <p>• Адрес: Текст с адресом приюта.</p>
                <p>• Карта: Статичное изображение карты (скриншот из Google Maps) или iframe (по желанию).</p>
                <p>• Форма обратной связи: Поля "Имя", "Email", "Сообщение", кнопка "Отправить".</p>
                <p>• Соцсети: Ссылки-иконки на соцсети (можно использовать текст: "Telegram", "ВКонтакте").</p>
                <h3>2. Технические требования:</h3>
                <h3>HTML:</h3>
                <p>• Семантические теги: header, nav, main, section, footer и т.д.</p>
                <p>• Списки (ul, ol), изображения (img), ссылки (a).</p>
                <p>• Форма с input, textarea, button.</p>
                <h3>CSS:</h3>
                <p>• Внешняя таблица стилей (стили не в HTML!).</p>
                <p>• Flexbox для навигации и сетки карточек.</p>
                <p>• Стили для текста (цвет, шрифт, размер), фона, отступов.</p>
                <p>• Медиа-запрос для мобильной версии (например, скрыть карту на small-экранах).</p>
                <h3>JS: </h3>
                <p>• По вашему требованию, придумаю что сделать.</p>
                <h3>3. Советы:</h3>
                <p>• Используйте Google Fonts для красивого шрифта (например, Comfortaa).</p>
                <p>• Цветовая схема: пастельные тона (#f8f8f8 для фона, #4CAF50 для кнопок "Пример").</p>
                <p>• Для карточек на pets.html примените CSS-свойство box-shadow.</p>
                <h3>4. Дополнительно (по желанию):</h3>
                <p>• Анимация при наведении на карточки (например, плавное увеличение).</p>
                <p>• Фоновое видео на главной (вставьте через video).</p>
                <p>• Кастомизация скроллбара через CSS.</p>
            </div>
          </div>
        </button>
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
