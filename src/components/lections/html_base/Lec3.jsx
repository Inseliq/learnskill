import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import VideoPlayer from '../../VideoPlayer';
import path from '../../assets/video/video.mp4';
import poster from '../../assets/img/chat-gpt__img.jpg';
import Console from '../../Console';

const Lec3 = () => {
  useDocumentTitle('Лекция "Шапка и подвал сайта"');

  const [activeTab, setActiveTab] = useState('video');

  const consoless = [
    {
      title: "html",
      content: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <header class="head"></header>

  <main></main>

  <footer class="bottom"></footer>

</body>
</html>
      `,
    },
  ];

    const consolesss = [
    {
      title: "html",
      content: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<header class="head">
    <div class="container">
      header_content
    </div>
  </header>

  <main>
    <div class="container">
      main_coontent
    </div>
  </main>

  <footer class="bottom">
    <div class="container">
      footer_content
    </div>
  </footer>

</body>
</html>
      `,
    },
  ];

      const consolessss = [
    {
      title: "html",
      content: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <header class="head">
    <div class="container">

      <div class="logo">
        <img src="$path" alt="logo">
        <h1>Добрый друг</h1>
      </div>

      <nav class="navbar__top">
        links
      </nav>

    </div>
  </header>

  <main>
    <div class="container">
      main_coontent
    </div>
  </main>

  <footer class="bottom">
    <div class="container">
      footer_content
    </div>
  </footer>

</body>
</html>
      `,
    },
  ];

  const consoles = [
    {
      title: "html",
      content: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <header class="head">
    <div class="container">

      <div class="logo">
        <img src="./assets/ico/logo_icon.png" alt="logo">
        <h1>Добрый друг</h1>
      </div>

      <nav class="navbar__top">
        <a href="#" class="link main">
          Главная
        </a>
        <a href="#" class="link our__pets">
          Наши питомцы
        </a>
        <a href="#" class="link contacts">
          Контакты
        </a>
      </nav>

    </div>
  </header>

  <main>
    <div class="container">
      main_coontent
    </div>
  </main>

  <footer class="bottom">
    <div class="container">
      <span class="context">© 2025 "Добрый друг"</span>
      <a href="#" class="link contacts">
        Контакты
      </a>
    </div>
  </footer>

</body>
</html>
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
            <h2>Создание шапки и подвала сайта</h2>
            <h3>Определим что должно быть:</h3>
            <ol>
              <li>👒 Шапка сайта</li>
              <li>🧥 Основной контент</li>
              <li>👟 Подвал</li>
            </ol>
            <h3>После разграничения принимаемся за коддинг</h3>
            <ul className="cods num-code">
              <li className='none'>
                1. Создадим 3 основных контейнера <b>header, main, footer</b> т.е. шапка, основной контент, подвал
              </li>
              <li className="none">2. Дадим <b>header</b> класс <strong>head</strong>, а <b>footer</b> класс <strong>bottom</strong>, чтобы быстро написать класс к тегу воспользуемся Emmet <b>header.head+main+footer.bottom</b></li>
              <Console consoles={ consoless } />
              <li className="none">3. Дальше в каждом (header, main, footer) из них создадим ограничивающие контейнеры, Emmet: <b>div.container</b>, это нужно для правильного расположения контенеров, чтобы всё красиво выглядело</li>
              <Console consoles={ consolesss } />
              <li className="none">4. Теперь в <strong>header&gt;div.container</strong> нужно создать контейнер логотипа и контейнер навигации, воспользуемся Emmet: <b>div.logo+nav.navbar__top</b>, navbar__top потому что навигация сверху сайта (основная)</li>
              <li className="none">5. В контейнере <b>logo</b> добавим элементы <strong>img</strong> и <strong>h1</strong> - картинка (нашей компании, например) и Название (поэтому и h1)</li>
              <Console consoles={ consolessss } />
              <li className="none">6. В контейнере <b>navbar__top</b>, необходимо создать 3 ссылки на другие страницы, опять воспользуемся Emmet: <b>nav.navbar__top&gt;a.link.number$*3</b></li>
              <li className="comments"><b>"&gt;"</b> - Означает что в контейнере родителе создадутся элементы, <b>"$"</b> - Означает число, завищищее от количества элементов, <b>*</b> - количество элементов</li>
              <li className="none">7.1 В <b>подвале сайта (footer)</b> напишем текст: "© 2025 Добрый друг" и справой стороны ссылка на <b>Контакты</b></li>
              <li className="none">7.2 В контейнере подвала сайта воспользуемся в Emmet, <b>
                span.context+a.link.contacts
                </b>В span заполняем текст <strong>"© 2025 Добрый друг"</strong>
              </li>
              <li>8. Остаётся разработать <b>основную часть (main)</b></li>
            </ul>
            <h3>Конечный результат 🚀</h3>
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

export default Lec3;
