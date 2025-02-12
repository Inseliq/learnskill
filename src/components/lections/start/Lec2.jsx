import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import VideoPlayer from '../../VideoPlayer';
import path from '../../assets/video/video.mp4';
import poster from '../../assets/img/chat-gpt__img.jpg';
import Console from '../../Console';

const Lec2 = () => {
  useDocumentTitle('Лекция "Структура проекта"');

  const [activeTab, setActiveTab] = useState('video');

  const consoles = [
    {
      title: "bash",
      content: `
/$name
│── /assets
│   ├── /ico
│   │   ├── logo_ico.png
│   ├── /img
│   ├── /fonts
│── /src
│   ├── /css
│   │   ├── /styles
│   │   │   ├── main.css
│   │   ├── root.css
│   │   ├── fonts.css
│   │   ├── const.color.css
│   ├── /js
│   │   ├── app.js
├── .gitattributes
├── index.html
├── notes.txt
      `,
    },
  ];

  return (
    <Layout>
      <div className="LectionPage videoLection">
        <NavLink to="/learnskill/lection" className="back-link back"></NavLink>

        <div className="block-button_container">
          <button
            className={`text_lection ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
          >
            Лекция
          </button>
          <button
            className={`video_lection ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            Видеоурок
          </button>
        </div>

        {activeTab === 'text' && (
          <main className="main_content pgm lec">
            <h2>Структура проектов (файлов)</h2>
            <h3>🔥 Почему важно соблюдать структуру файлов проекта?</h3>
            <p>Когда проект растёт, беспорядок в файлах может превратить работу в хаос. Чёткая структура проекта делает проект более читаемым, удобным для разработки и поддержки другими разработчиками.</p>
            <ol>
              <li>
                <h4>✅Упрощение навигации</h4>
              </li>
              <li>
                <h4>✅ Лёгкость в поддержке и масштабировании</h4>
              </li>
              <li>
                <h4>✅ Понятные зависимости</h4>
              </li>
              <li>
                <h4>✅ Простота командной работы</h4>
              </li>
              <li>
                <h4>✅ Улучшение производительности</h4>
                <p className='mt5px'>Например, в React или Vue небольшие, чётко организованные файлы легче кешируются и загружаются быстрее.</p>
              </li>
            </ol>
            <h3>💡 Теперь возьмём наш проект kind-friend (Добрый друг)</h3>
            <ul className='cods num-code'>
              <li className='none'>
                1. После созданя репозитория у нас будут файлы <b>.gitattributes</b> и <b>index.html</b> которые будут лежать в папке $repository
              </li>
              <li className="comments">// <b>$repository</b> - это название вашего репозитория (проекта)</li>
              <li className='none'>2. Далее нам необходимо создать папку <b>assets</b> в которой будут картинки, шрифты, видео и иконки</li>
              <li className='none'>3. Теперь создадим папку <b>src</b> в ней у нас будут файлы <strong>css</strong> и <strong>js</strong> для управления проектом</li>
              <li className='none'>4. В папке <b>assets</b> создадим папки <b>img, ico, fonts</b> для группировки объектов</li>
              <li className="comments">// В папке <strong>img</strong> будут храниться изображения большие, которые не имеют прозрачного фона (с расширениями: jpeg, jpg, webp)</li>
              <li className="comments">// В папке <strong>ico</strong> будут храниться изображения часто используемые, с прозрачным фоном (их расширения: png, svg), svg - это векторные изображения</li>
              <li className="comments">// В папке <strong>fonts</strong> будут храниться шрифты</li>
              <li className='none'>5. Следующее, создадим в папке <b>src</b> папки <b>css</b>, <b>js</b>. Ещё нам необходимо в папке <b>css</b> создать папку <b>style</b></li>
              <li className="comments">// Папка <b>style</b> нужна, потому что там будут <strong>НЕ ОДИНАКОВЫЕ</strong> элементы для каждой страницы</li>
              <li className="none">6. В папке <b>css</b> создаём файлы <strong>root.css, fonts.css, const.color.css</strong>, а также в папке <b>style</b> создаём файл <strong>main.css</strong></li>
              <li className="comments">// В файлах <b>fonts, const.color и root</b> будут основые элементы, которые будут на всех страницах или часто используемые (шапка, подвал, кнопки, сслыки и т.п.), а <b>main</b> будет изменять только основную страницу.</li>
              <li className="none">В папке <b>js</b> создаём файл <strong>app.js</strong></li>
              <li className="comments">// Он пока нам не пригодится, но для того чтобы гитхаб отправил эту папку на сервер в ней должен быть хотя-бы один файл</li>
              <li className="none">По необходимости можно в папке проекта создать файл <b>notes.txt</b> для заметок, или копий кода</li>
            </ul>
            <h3>Пример готового проекта 🚀</h3>
            <Console consoles={ consoles } />
          </main>
        )}

        {activeTab === 'video' && (
          <article className="main_video_content">
            <VideoPlayer src={path} poster={poster}/>
          </article>
        )}
      </div>
    </Layout>
  );
};

export default Lec2;
