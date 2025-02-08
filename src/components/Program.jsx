import React, { useEffect, useRef } from "react";
import Layout from "./Layout";
import useDocumentTitle from "./huks.js/useDocumentTitle";
import "./css/style/program.css";

const Program = () => {
  useDocumentTitle("Программа обучения");

  const pageRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => {
      if (pageRef.current) {
        const scrollTop = pageRef.current.scrollTop;
        document.documentElement.style.setProperty("--scrollTop", `${scrollTop}px`, "");
      }
    };

    const pageElement = pageRef.current;
    if (pageElement) {
      pageElement.addEventListener("scroll", updateScroll);
    }

    return () => {
      if (pageElement) {
        pageElement.removeEventListener("scroll", updateScroll);
      }
    };
  }, []);

  return (
    <Layout extraClass="controleClass">
      <div ref={pageRef} className="ProgramPage" style={{ overflowY: "scroll", height: "80vh" }}>
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
              <div className="layers__caption"><h2>Программа обучения Курс 1</h2></div>
              <div className="layers__title"><h3>LearnSkill</h3></div>
            </div>
            <div className="layer layers__base"></div>
            <div className="layer layers__middle"></div>
            <div className="layer layers__front"></div>
          </div>
        </header>
        <article className="main-article">
          <div className="main-article__content">
            <div className="block-left">
              <h4>1. Инструменты разработчика</h4>
              <p>1.1 GitHub</p>
              <p>1.2 WebPack App</p>
              <p>1.3 Зачёт</p>
              <h4 className="mt">2. HTML</h4>
              <p>2.1 Базовый HTML (Структура документа, теги)</p>
              <p>2.2 Базовый HTML 2 (Семантика, формы)</p>
              <p>2.3 SEO-структура в работе с HTML (link, meta, title, x-icon)</p>
              <p>2.4 Правильная SEO-структура (header, main, section, footer)</p>
              <p>2.5 Зачёт</p>
              <h4 className="mt">3. CSS</h4>
              <p>3.1 Базовый CSS 1 (Теги, классы, id, атрибуты).</p>
              <p>3.2 Базовый CSS 2 (Селекторы, адаптация шрифтов)</p>
              <p>3.3 Базовый CSS 2 (виды отступов, границ).</p>
              <p>3.4 Продвинутый CSS 1 (FlexBox, Grid).</p>
              <p>3.5 Продвинутый CSS 2 (table, picture, валидация форм)</p>
              <p>3.6 Продвинутый CSS 3 (@media, @import)</p>
              <p>3.7 Зачёт</p>
              <p>3.8 Контрольная работа</p>
            </div>
            <div className="block-right">
              <h4>4. JS</h4>
              <p>4.1 Основы JS 1 (Переменные, типы данных, операторы).</p>
              <p>4.2 Основы JS 2 (Условные конструкции if/else, switch).</p>
              <p>4.3 Основы JS 3 (Циклы for, while).</p>
              <p>4.4 Функции JS 1 (declaration, expression, стрелочные).</p>
              <p>4.5 Функции JS 2 (DOM).</p>
              <p>4.6 Функции JS 3 (События, слушатели).</p>
              <p>4.7 Продвинутый JS 1 (Асинхронность).</p>
              <p>4.8 Продвинутый JS 2 "ES6+ (деструктуризация)".</p>
              <p>4.9 Продвинутый JS 3 "ES6+ (модули)".</p>
              <p>4.10 Продвинутый JS 4 "ES6+ (шаблонные строки)."</p>
              <p>4.11 Практическая работа.</p>
              <h4 className="mt">5. Разработка сайтов</h4>
              <p>5.1 Наработка навыка</p>
              <h4 className="mt">6. Работа с фреймворками</h4>
              <p>6.1 Выбор фреймворка (React, Vue, ASP.NET).</p>
              <p>6.2 Изучение.</p>
              <p>6.3 Практика.</p>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Program;
