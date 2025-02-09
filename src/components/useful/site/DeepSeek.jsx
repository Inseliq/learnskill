import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import './site.css'
import screen1 from '../../assets/img/screen/saved_1.jpg'
import screen2 from '../../assets/img/screen/saved_2.jpg'

const DeepSeek = () => {
  useDocumentTitle('Сайт "DeepSeek"');

  return (
      <Layout>
        <div className="DeepSeekPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link">
          </NavLink>
          <div className="main__content">
            <div className="text__content">
              <h1>DeepSeek</h1>
              <p>Это нейросетка созданная на основе ChatGPT модели 1o, которая платная за 200$/месяц.</p>
              <p>Однако DeepSeek бесплатный, есть такие функции как DeepThink (R1) и Search.</p>
              <p>DeepThink (R1) - это Глубокое обдумывание, т.е. нейросеть рассуждает что именно вам нужно и т.п, однако у неё ограничение есть вроде 50000 символов на одно сообщение, поэтому большие доклады пишет не очень</p>
              <p>Функия Searh - позволяет искать ему совпадения в интернете, ссылаться на данные сайты, ускоряет поиск.</p>
              <h2>Коддинг</h2>
              <p>Что касается коддинга, кодит она очень хорошо, я доволен.</p>
              <p>У DeepSeek есть мобильное приложение которое можно скачать прямо из GooglePlay</p>
              <p><samp>НЕ ПОДХОДИТ ДЛЯ ПК</samp></p>
            </div>
            <div className="img__content">
              <img src={screen1} alt="screen_1" />
              <img src={screen2} alt="screen_2" />
            </div>
            <div className="download">
              <a target="_blank" rel="noopener noreferrer" href="https://www.deepseek.com/" className='link'>Перейти на сайт DeepSeek</a>
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.deepseek.chat" className='link'>Скачать из PlayMarket (GooglePlay)</a>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default DeepSeek;