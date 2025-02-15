import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Lec6 = () => {
  useDocumentTitle('Лекция "Работа с шрифтами"');

  const [activeTab, setActiveTab] = useState('text');

  const consoles = [
    {
      title: "css",
      content: `
@font-face {
  font-family: Montserrat_fonts;
  src: url(./fonts/Montserrat-VariableFont_wght.ttf);
}
      `,
    },
  ];

  const consoless = [
    {
      title: "css",
      content: `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
      `,
    },
  ];

  const consolesss = [
    {
      title: "css",
      content: `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./src/css/style/main.css">
  <script src="./src/js/app.js" defer></script>
  <title>Добрый друг</title>
</head>
<body>
  CONTENT
</body>
</html>
      `,
    },
  ];

  const consolessss = [
    {
      title: "css",
      content: `
@font-face {
  font-family: Montserrat_fonts;
  src: url(../../assets/fonts/Montserrat-VariableFont_wght.ttf);
}

* {
  font-family: "Montserrat_fonts", sans-serif;
  font-size: clamp(0.75rem, 0.6715rem + 0.365vw, 1rem);
  font-weight: 300;
}
      `,
    },
  ];

  const consolesssss = [
    {
      title: "css",
      content: `
h1 {
  font-size: clamp(1.25rem, 1.0146rem + 1.0949vw, 2rem);
  font-weight: 700;
}

h2 {
  font-size: clamp(1.125rem, 1.0073rem + 0.5474vw, 1.5rem);
  font-weight: 600;
}

/*
  Аналогично для h3, h4
*/
      `,
    },
  ];

  return (
    <Layout>
      <div className="LectionPage videoLection">
        <NavLink to="/learnskill/lection" className="back-link back"></NavLink>
        <a className="back-link right disable"></a>
        <div className="block-button_container">
          <button
            className={`text_lection ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
          >
            Лекция
          </button>
          <button
            className={`video_lection disable ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
          >
            Видеоурок
          </button>
        </div>

        {activeTab === 'text' && (
          <main className="main_content pgm lec">
            <h2>🖊 Работа с шрифтами</h2>
            <h4 className='mt20px'>Работать будем в файле <samp>fonts.css</samp></h4>
            <ul className="cods num-code mt10px">
              <li className="none">
                <h3>☮ Есть несколько способов импортировать шрифт</h3>
                <ul className='mt5px list'>
                  <li className='lh_small'>С помощью подключения <b>файла</b> шрифта</li>
                  <li className="lh_small">С помощью импорта из <strong>GoogleFonts</strong> в <b>css</b></li>
                  <li className="lh_small">С помощью импорта из <strong>GoogleFonts</strong> в <b>html</b></li>
                </ul>
              </li>
              <li className="none">
                <h3 className='mt20px'>1️⃣ Первый способ (из файла)</h3>
                <p className='mt5px'>Для того чтобы импортировать шрифт из файла нам необходимо:</p>
                <ol className="list">
                  <li>Прописать с помощью Emmet <b>@font_face</b>, Emmet раскроет конструкцию.</li>
                  <li>В конструкции есть <b>font-family</b> и <b>src: url()</b></li>
                  <li>В <b>font-family</b> указываем название шрифта, для его дальнейшего использования (например, Montserrat_font)</li>
                  <li>В <b>src: url($path)</b> указываем путь до файла шрифта с его его названием и расширением (например, <samp>src: url(./fonts/Montserrat-VariableFont_wght.ttf)</samp> )</li>
                  <li><a href="#call_up" className='color link'>Вызов шрифта</a></li>
                </ol>
              </li>
            </ul>
            <Console consoles={ consoles } />
            <ul className="cods num-code mt10px">
              <li className="none">
                <h3 className="mt20px">2️⃣ Второй способ (импорт в css)</h3>
                <p className='mt5px'>Для того чтобы импортировать шрифт в css из GoogleFonts нам необходимо:</p>
                <ol className='list'>
                  <li>С помощью Emmet написать <b>@import</b> и выбрать конструкцию <strong>@import url()</strong></li>
                  <li>После расскрытия конструкции, зайти на сайт GoogleFonts и выбрать любой понравившийся шрифт (поддерживающий русский язык)</li>
                  <li>нажать <b>Get embed code</b>, вкладка <b>Web</b>, и выбрать <b>@import</b> скопировать url($copy)
                  <p className='comments'>$copy - скопировать всё содержимое в скобках, включая 'ковычки'</p>
                  </li>
                  <li>Вставить в <b>css</b>, в конструкцию <b>@import url($paste)</b>
                  <p className="comments">$paste - вставить скопированное сюда</p>
                  </li>
                  <li>
                    <a href="#call_up" className="color link">Вызов шрифта</a>
                  </li>
                </ol>
              </li>
            </ul>
            <Console consoles={ consoless } />
            <ul className="cods num-code mt10px">
              <li className="none">
                <h3 className="mt20px">3️⃣ Третий способ (импорт в html)</h3>
                <p className="mt5px">Для того чтобы импортировать шрифт в html из GoogleFonts нам необходимо:</p>
                <ol className="list">
                  <li>Зайти на сайт <b>GoogleFonts</b>, выбрать любой понравившийся шрифт (поддерживающий русский язык)</li>
                  <li>Нажать <b>Get embed code</b>, вкладка <b>Web</b>, раздел <b>&lt;link&gt;</b></li>
                  <li>Скопировать всё, либо <strong>выделить и Ctrl + C</strong>, либо нажать <strong>Copy code</strong></li>
                  <li>Вставить в <b>html</b> в тег <b>head</b></li>
                  <li><a href="#call_up" className="color link">Вызов шрифта</a></li>
                </ol>
              </li>
            </ul>
            <Console consoles={ consolesss } />
            <h3 className='mt20px' id='call_up'>👋 Вызов шрифта</h3>
            <p className='mt5px'>Все три способа импорта шрифта вызываются одинакого, сразу же сделаем адаптацию для страниц, нам нужно чтобы шрифт применялся ко всем элементам, для этого нужно</p>
            <ol>
              <li>
                Написать <b>*</b> и селектор <b>font-family</b>
              </li>
              <li>В <b>"название"</b> написать название шрифта, если вы ипортировали из файла, то ваше собственное название, если из GoogleFonts, то название как было там</li>
              <li>Пример из <b>файла</b> "Montserrat_fonts"</li>
              <li>Пример из <b>GoogleFonts</b> "Montserrat"</li>
              <li>И через запятую <b>"название",</b> указываем <b>sans-serif</b></li>
            </ol>
            <h3 className='mt20px'>↔ Толщина и размер ↕</h3>
            <ul className="cods num-code mt5px">
              <li className="none">
                🟥 Так как мы используем общие элементы <b>*</b>, то можно сразу указать толщину текста и его размер
              </li>
              <li className='none'>🟧 Для того чтобы задать толщину, нужно прописать селектор <b>font-weight</b>, задам начальное значение в виде <b>300</b></li>
              <li className="comments">В <b>font-weight</b>, мы указываем толщину в виде условных едениц от 100 до 900, где 100 - очень тонкий, 900 - сверх толстый (если шрифт поддерживает настройку толщины)</li>
              <li className='none'>🟨 Чтобы задать размер шрифта, сразу будем делать с адаптацией, для всех элементов, воспользуемся сайтом <a rel="noopener noreferrer" target='_blank'href="https://clamp.font-size.app/" className="color link">Font-size Clamp Generator</a></li>
              <li className="none">🟩 В поле <b>Minimum viewport width</b> и <b>Maximum viewport width</b> указываем минимальный размер экрана и максимальный</li>
              <li className="comments">Обычно <b>минимальный</b> размер экрана принято считать <b>344px</b>, а <b>максимальный</b> будем рассчитывать от нашего <b>контейнера</b>, т.е. 1440px</li>
              <li className="none">🟦 В поле <b>Minimum font size</b> и <b>Maximum font size</b> указываем минимальный размер шрифта и максимальный, копируем получившуюся функцию</li>
              <li className="comments">Получаем вот такую функцию (я указал 12px и 16px размеры шрифта): <b>font-size: clamp(0.75rem, 0.6715rem + 0.365vw, 1rem);</b></li>
              <li className="none">🟪 Селектор <b>font-size</b> как раз и отвечает за размер шрифта, а <strong>clamp</strong> это функция для адаптации</li>
            </ul>
            <h3 className="mt10px">Вот так должно быть:</h3>
            <Console consoles={ consolessss } />
            <h3 className="mt20px">📊 Заголовки</h3>
            <p className="mt10px">Аналогично делаем для заголовков (h1, h2, h3, h4), но не указываем <b>font-family</b>, т.к. мы указали для всех элементов через <b>*</b></p>
            <Console consoles={ consolesssss } />
            <h3 className="mt20px">🔥 Итоговый код:</h3>
            <NavLink to="/learnskill/lection/css/itog_code2" className="color link">Посмотреть</NavLink>
          </main>
        )}

        {activeTab === 'video' && (
          <article className="main_video_content">
            <h2 className="error">$ansver_server_context(NO_REACT_REQUEST)</h2>
          </article>
        )}
      </div>
    </Layout>
  );
};

export default Lec6;