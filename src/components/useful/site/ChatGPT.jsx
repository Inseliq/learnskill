import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import screen3 from '../../assets/img/screen/saved_3.jpg';
import screen4 from '../../assets/img/screen/saved_4.jpg';

const ChatGPT = () => {
  useDocumentTitle('Сайт "ChatGPT"');

  return (
      <Layout>
        <div className="ChatGPTPage">
          <NavLink
          id="backLink"
          to="/learnskill/useful"
          className="back-link">
          </NavLink>
          <div className="main__content">
            <div className="text__content">
              <h1>ChatGPT</h1>
              <h2><samp>ДЛЯ ЕЁ РАБОТЫ НУЖЕН VPN</samp></h2>
              <p>Она была обучена на огромном количестве текстовых данных из интернета и может генерировать текстовые ответы, подобные человеческим, на заданный запрос.</p>
              <p>Однако ChatGPT не бесплатный, но с выходом DeepSeek появились раньше недоступные платные функции.</p>
              <p>Обоснуй - это Глубокое обдумывание, т.е. нейросеть рассуждает что именно вам нужно и т.п.</p>
              <p>Поиск - позволяет искать ему совпадения в интернете, ссылаться на данные сайты, ускоряет поиск.</p>
              <p>И ещё ранее не известные мне</p>
              <p>Подключить приложение (как я понял какой-то кооператив с OneDrive и можно код загружать)</p>
              <p>Добавить из Google Drive - тоже самое</p>
              <p>Загрузить с компьютера - файл скинуть, но это может и DeepSeek</p>
              <h3>Ещё можно поговорить с ChatGPT через микро</h3>
              <h2>Коддинг</h2>
              <p>Что касается коддинга, тут он явно лидер кодит он очень хорошо</p>
              <p>Есть мобильное и desktop приложение, <samp>но для их работы так же нужен VPN или DNS</samp></p>
              <p><samp>НЕ ПОДХОДИТ ДЛЯ ПК</samp></p>
            </div>
            <div className="img__content">
              <img src={screen3} alt="screen_1" />
              <img src={screen4} alt="screen_2" />
            </div>
            <div className="download">
              <a target="_blank" rel="noopener noreferrer" href="https://chatgpt.com/" className='link'>Перейти на сайт ChatGPT</a>
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.openai.chatgpt&pcampaignid=web_share" className='link'>Мобильное приложене ChatGPT</a>
              <a target="_blank" rel="noopener noreferrer" href="https://apps.microsoft.com/detail/9nt1r1c2hh7j?hl=ru-RU&gl=LT" className='link'>Desktop приложение ChatGPT</a>
              <a target="_blank" rel="noopener noreferrer" href="https://openai.com/" className='link'>Компания создавшая ChatGPT (OpenAI)</a>
              <p><b>DNS для работы мобильного приложения:</b></p>
              <p>comss.dns.controld.com</p>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ChatGPT;