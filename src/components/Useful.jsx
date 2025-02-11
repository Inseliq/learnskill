import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';
import useDocumentTitle from './huks.js/useDocumentTitle';
import './css/style/useful.css'

const Useful = () => {
  useDocumentTitle('Полезные материалы');

    const [openButtonID, setOpenButtonID] = useState(false);

    const handleArticleClickID = (id) => {
      setOpenButtonID(openButtonID === id ? false : id);
    };

  return (
      <Layout>
        <div className="usefulPage">
          <section className="title">
            Тут я собрал все сайты, программы видео, которые использую сам ,')
          </section>
          <section className="useful-block">
            <button
            className={`useful
            ${openButtonID === 'usefulTools' ? 'open' : ''}`}
            id="usefulTools">
              <article className="name" onClick={() => handleArticleClickID('usefulTools')}>
                <span>1. Программы</span>
              </article>
              <main className="content">
                <NavLink
                id="programVS"
                to="/learnskill/useful/program/pgm1"
                className="card-useful pgm-vs">
                  <div className="content-card-useful">Visual Studio</div>
                </NavLink>
                <NavLink
                id="programVSC"
                to="/learnskill/useful/program/pgm2"
                className="card-useful pgm-vsc">
                  <div className="content-card-useful">Visual Studio Code</div>
                </NavLink>
                <NavLink
                id="program"
                to="/learnskill/useful/program/pgm3"
                className="card-useful figma">
                  <div className="content-card-useful">Figma</div>
                </NavLink>
                <NavLink
                id="program"
                to="/learnskill/useful/program/pgm4"
                className="card-useful gh-desktop">
                  <div className="content-card-useful">GitHub Desktop</div>
                </NavLink>
              </main>
            </button>
            <button
            className={`useful
            ${openButtonID === 'usefulHelp' ? 'open' : ''}`}
            id="usefulHelp">
              <article className="name" onClick={() => handleArticleClickID('usefulHelp')}>
                <span>2. Сайты помощники</span>
              </article>
              <main className="content">
                <NavLink
                to="/learnskill/useful/site/DeepSeek"
                className="card-useful deepseek">
                  <span className="star"></span>
                  <div className="content-card-useful">DeepSeek</div>
                </NavLink>
                <NavLink
                to="/learnskill/useful/site/ChatGPT"
                className="card-useful chat-gpt">
                  <span className='star'></span>
                  <div className="content-card-useful">ChatGPT</div>
                </NavLink>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://www.figma.com/community'
                className="card-useful figma-com">
                  <div className="content-card-useful">Figma Community</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://dribbble.com/'
                className="card-useful dribbble">
                  <div className="content-card-useful">Dribbble</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://coolors.co/'
                className="card-useful coolors">
                  <div className="content-card-useful">Coolors</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://icon-icons.com/ru/'
                className="card-useful icon-icons">
                  <div className="content-card-useful">Icon Icons</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://fonts.google.com/'
                className="card-useful google-fonts">
                  <div className="content-card-useful">Google Fonts</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://cssgridgarden.com/#ru'
                className="card-useful grid-garden">
                  <div className="content-card-useful">Grid Garden</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://flexboxfroggy.com/#ru'
                className="card-useful flexbox-froggy">
                  <div className="content-card-useful">FlexBox Froggy</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://cssgrid-generator.netlify.app'
                className="card-useful css-gen">
                  <div className="content-card-useful">CSS Grid Generator</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://politika-konfidencialnost.ru/'
                className="card-useful pr-po">
                  <div className="content-card-useful">Готовая политика конфиденциальности</div>
                </a>
                <a
                rel="noopener noreferrer"
                target='_blank'
                href='https://clamp.font-size.app'
                className="card-useful clamp-gen">
                  <div className="content-card-useful">Clamp Generator</div>
                </a>
              </main>
            </button>
            <button
            className={`useful
            ${openButtonID === 'usefulVideo' ? 'open' : ''}`}>
              <article className="name" onClick={() => handleArticleClickID('usefulVideo')}>
                <span>3. Полезные видео</span>
              </article>
              <main className="content">
                <NavLink
                id="usefulVideo1"
                to="/learnskill/useful"
                className="card-useful default">
                  <div className="content-card-useful">Видеваааоаоа</div>
                </NavLink>
              </main>
            </button>
            <button
            className={`useful
            ${openButtonID === 'usefulSite' ? 'open' : ''}`}>
              <article className="name" onClick={() => handleArticleClickID('usefulSite')}>
                <span>4. Готовые сайты</span>
              </article>
              <main className="content">
                <NavLink
                id="usefulVideo1"
                to="/learnskill/useful"
                className="card-useful default">
                  <div className="content-card-useful">Видеваааоаоа</div>
                </NavLink>
              </main>
            </button>
          </section>
        </div>
      </Layout>
  );
};

export default Useful;