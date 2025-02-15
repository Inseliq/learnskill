import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Lec4 = () => {
  useDocumentTitle('Лекция "Подключение css к html"');

  const [activeTab, setActiveTab] = useState('video');

  const consoles = [
    {
      title: "html",
      content: `
<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="./src/css/style/main.css">

  <script src="./src/js/app.js" defer></script>

  <title>Добрый друг</title>

</head>
      `,
    },
  ];

    const consoless = [
    {
      title: "html",
      content: `
  <link rel="stylesheet" href="">
      `,
    },
  ];

  return (
    <Layout>
      <div className="LectionPage videoLection">
        <NavLink to="/learnskill/lection" className="back-link back"></NavLink>
        <a rel="noopener noreferrer" target='_blank' href='https://vkvideo.ru/video-229351453_456239019?list=ln-tfUPtCHutcT4Ja95rf' className="back-link right"></a>
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
            <h2>Подключение css к html</h2>
            <ol className='num-code'>
              <li>
                Чтобы подключить css к html воспользуемся тегом <b>"link"</b>
              </li>
              <li>
                В теге <b>head</b> мы должны воспользоваться Emmet и прописать там <b>link</b>
              </li>
              <li>
                У нас появится такая строчка:
                <Console consoles={ consoless } />
              </li>
              <li className='mt10px none lh_normal'>
                В атрибуте <b>href</b>, мы должны будем указать путь до файла <b>css</b>, у нас это <b>main.css</b>, для этого пишем: <samp>"./src/css/style/main.css"</samp>
              </li>
              <li>Теперь подключим <b>js</b>, для этого пишем <b>script</b>, в нём <b>src="путь_до_файла"</b> с атрибутом defer - это означает, что скрипт загрузится после всего проекта</li>
              <li>Ещё давайте изменим <b>title</b> напишем там "Добрый друг" - это описание в поисковой строке</li>
            </ol>
            <h3>Конечный результат 🚀</h3>
            <Console consoles={ consoles } />
          </main>
        )}

        {activeTab === 'video' && (
          <article className="main_video_content">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-229351453&id=456239019&hd=2&hash=29858da5c14db148" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen className='video-player'></iframe>
          </article>
        )}
      </div>
    </Layout>
  );
};

export default Lec4;
