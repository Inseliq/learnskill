import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Lec5 = () => {
  useDocumentTitle('Лекция "Работа над шапкой и подвалом"');

  const [activeTab, setActiveTab] = useState('text');

  const consoles = [
    {
      title: "css",
      content: `
@import url(./const.color.css);
@import url(./fonts.css);
      `,
    },
  ];

  const consoless = [
    {
      title: "css",
      content: `
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
}
      `,
    },
  ];

  const consolesss = [
    {
      title: "css",
      content: `
html, body {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
      `,
    },
  ];

  const consolessss = [
    {
      title: "css",
      content: `
div.container {
  max-width: 1440px;
  width: 100%;
  display: flex;
}
      `,
    },
  ];

    const consolesssss = [
    {
      title: "css",
      content: `
header.head, footer.bottom, main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
}

main {
  height: 100%;
}
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
            <h2>Работа над шапкой и подвалом проекта</h2>
            <h3 className="mt20px">📁 Начнём работать с файлом <samp>root.css</samp></h3>
            <ul className='mt5px'>
              <li className="comments">Это главный файл проекта, он управляет стилями шапки, основного <b>контейнера</b> и подвала сайта, а ещё так называемые стили <b>"селекторы типа"</b>. Они полезны для задания общих стилей элементам, которые часто используются в документе. </li>
            </ul>
            <h3 className='mt20px'>🕸 1. Присоединение файлов цвета и шрифтов</h3>
            <ul className="cods num-code mt5px">
              <li className="none">
                1️⃣ Для того чтобы появились цвета и заработали шрифты нам необходимо сделать @import
              </li>
              <li className="none">2️⃣ Можно воспользоваться Emmet выражением <b>"@import:url"</b>, после этого прописываем пусть до файла <b>(например, const.color.css)</b>, если вы расположили файлы как у нас в уроке то, пользуемся VS Code ставя <b>./</b> позволит открыть выпадающий список выбрать файл <b>const.color.css</b>, должно получиться вот так: <samp>@import url(./const.color.css);</samp></li>
              <li className="none">3️⃣ Аналогично с <b>fonts.css</b></li>
            </ul>
            <h3>💟 Результат:</h3>
            <Console consoles={ consoles } />
            <h3 className="mt20px">🌐 2. Сброс CSS (Обязательное действие)</h3>
            <ul className="cods num-code mt5px">
              <h4 className='mt5px'>✨ Сделаем так называемый <b>сброс CSS</b></h4>
              <li className="none">
                🕐 С помощью <b>*</b> указываем обязательные селекторы:
                <ul className='num-code list'>
                  <li className='lh_small'>margin: 0;</li>
                  <li className='lh_small'>padding: 0;</li>
                  <li className='lh_small'>outline: 0;</li>
                  <li className='lh_small'>box-sizing: border-box;</li>
                  <li className='lh_small'>text-decoration: none;</li>
                </ul>
              </li>
              <li className='none'>
                🕑 <b>*</b> - означает, что стили применются ко всем элементам страницы
              </li>
              <li className='none'>🕒<b>margin: 0;</b> - это селектор означающий внешние отступы, параметр 0, убирает их, мы делаем это из-за того, что у браузера есть стандартные селекторы и по умолчанию margin в браузере равен: 8px</li>
              <li className="none">🕓 <b>padding: 0;</b> - это селектор означающий внутрение отступы, параметр 0, убирает их, мы делаем это из-за того, что у некотрых тегов, таких как (ol, ul, li, h$) браузер устанавливает отступы</li>
              <li className="none">🕓 <b>outline: 0;</b> - это универсальное свойство, одновременно устанавливающее цвет, стиль и толщину внешней границы на всех четырёх сторонах элемента</li>
              <li className="none">🕔<b>box-sizing: border-box;</b> - этот селектор означает, что размеры элемента включают внутренние отступы и границы</li>
              <li className="comments">Это упрощает вычисления и управление размерами элемента, особенно при создании адаптивных макетов</li>
              <li className="none">🕕 <b>text-decoration: none;</b> - этот селектор отменяет все эффекты, в том числе подчёркивание, которое задано по умолчанию</li>
            </ul>
            <h3>💟 Результат:</h3>
            <Console consoles={ consoless } />
            <h3 className="mt20px">📺 <b>html, body</b></h3>
            <ul className="cods num-code mt5px">
              <li className="none">
                ✨ С помощью <b>html, body</b> обращаемся к странице и пишем следующее:
                <ul className="num-code list">
                  <li className="lh_small">width: 100%;</li>
                  <li className="lh_small">height: 100vh;</li>
                  <li className="lh_small">display: flex;</li>
                  <li className="lh_small">flex-direction: column;</li>
                  <li className="lh_small">justify-content: space-between;</li>
                  <li className="lh_small">align-items: center;</li>
                </ul>
              </li>
              <li className="none">📟 <b>Объяснение</b></li>
              <li className='none'>1. <b>html</b> - это корневой элемент веб-страницы. Всё содержимое документа, включая <strong>head</strong> и <strong>body</strong>, находится внутри этого тега. Он сообщает браузеру, что документ является HTML-документом</li>
              <li className="none">2. <b>body</b> - это тег в <strong>HTML</strong>, который определяет основное содержимое веб-страницы. Он содержит все видимые элементы веб-страницы, такие как заголовки, абзацы и изображения. Тег <b>body</b> служит контейнером для всего остального на сайте</li>
              <li className="none">3. <b>width: 100%</b> - width (ширина), ширину для <strong>html и body</strong> лучше указывать в <b>процентах</b>, потому что это позволяет измерять размер элемента относительно размеров родителя</li>
              <li className="none">4. <b>height: 100vh;</b> - height (Высота), высоту для <strong>html и body</strong> лучше указывать в размерах экрана по высоте (vh), <b>vh</b> (viewport height) — это единица измерения в CSS, которая равна 1% от высоты окна просмотра. 100vh соответствует полной высоте вьюпорта (видимой области окна браузера)</li>
              <li className="comments">Например, если высота окна браузера равна 900px, то 1vh будет равен 9px</li>
              <li className="none">5. <b>display: flex;</b> - это значение свойства <b>display</b>, которое включает гибкую модель компоновки для размещения элементов в контейнере</li>
              <li className="comments">Такая модель позволяет эффективно распределить пространство внутри контейнера и различными способами выровнять гибкие элементы.</li>
              <li className="none">6. <b>flex-direction: column;</b> - это значение свойства, которое указывает, что элементы располагаются вертикально в контейнере</li>
              <li className="comments">Каждый элемент занимает отдельную строку внутри контейнера</li>
              <li className="none">7. <b>justify-content: space-between;</b> - это значение свойства <strong>justify-content</strong> в CSS, которое равномерно распределяет элементы вдоль главной оси контейнера</li>
              <li className="comments">Расстояния между каждой парой <b>соседних</b> элементов равны. <b>Первый элемент</b> прижат к началу контейнера по главной оси, <b>а последний</b> — к концу</li>
              <li className="none">8. <b>align-items: center;</b> - это значение свойства, которое выравнивает элементы внутри контейнера по центру поперечной оси</li>
              <li className="comments">Мысленно можно провести горизонтальную линию через центр флекс-контейнера и каждого из флекс-элементов. Свойство <b>align-items</b> со значением <strong>center</strong> совместит центры родителя и каждого из элементов</li>
            </ul>
            <h3>💟 Результат:</h3>
            <Console consoles={ consolesss } />
            <h3 className="mt20px">📦 Контейнер внутри основных элементов</h3>
            <ul className="cods num-code mt5px">
              <li className="none">
                🕋 Обратимся к контейнеру <b>div.container</b> и сделаем следующее:
                <ul className='mt5px list'>
                  <li className='lh_small'>max-width: 1440px;</li>
                  <li className='lh_small'>width: 100%;</li>
                  <li className='lh_small'>display: flex;</li>
                </ul>
              </li>
              <li className="none">🌟 <b>Подробнее:</b></li>
              <li className="none">☁ <b>max-width: 1440px;</b> - этот селектор означает что максимальная ширина для данного тега будет <b>1440px</b>, а именно такой размер мы указываем потому что:
                <ol className="mt5px list">
                  <li className='lh_small'>Универсальный размер окна браузера</li>
                  <li className='lh_small'>Удобно управлять контентом внутри</li>
                  <li className='lh_small'>На больших мониторах, адекватно выглядит</li>
                </ol>
              </li>
              <li className="none">🌤 <b>width: 100%;</b> - ширина, <strong>100%</strong>, значит растянется на весь размер контейнера</li>
              <li className="none">☀ <b>display: flex;</b> - <i>flex</i> для адаптации</li>

            </ul>
            <h3>💟 Результат:</h3>
            <Console consoles={ consolessss } />
            <h3 className="mt20px">🚜 Выравнивание контента по центру 🚛</h3>
            <ul className="cods num-code mt5px">
              <li className="none">
                ⌨ Обратимся к элементам размещающим контейнер <b>(header.head, footer.bottom, main)</b> и напишем следующее:
                <ul className="mt5px list">
                  <li className="lh_small">width: 100%;</li>
                  <li className="lh_small">display: flex;</li>
                  <li className="lh_small">align-items: center;</li>
                  <li className="lh_small">justify-content: center;</li>
                </ul>
              </li>
              <li className="none">🔹 <b>Более подробнее:</b></li>
              <li className="none">1. <b>width: 100%;</b> - из-за того что мы используем <strong>display: flex;</strong>, который охватывает контент, наш номинальный размер будет 1440px, т.е. размер контейнера, для того чтобы растянуть на весь экран используем  <b>100%</b> ширины</li>
              <li className="none">2. <b>display: flex;</b> - используем флекс для более удобного выравнивания</li>
              <li className='none'>3. <b>align-items: center;</b> и <b>justify-content: center;</b> используем чтобы выровнять и по высоте и по ширине</li>
              <li className="none">⚡ Для того чтобы main контент внутри main был по центру укажем отдельно <b>height: 100%</b> - растянем на весь экран относительно header и footer</li>
            </ul>
            <h3>💟 Результат:</h3>
            <Console consoles={ consolesssss } />
            <h2 className='mt20px'>🔥 Итоговый код:</h2>
            <NavLink to="/learnskill/lection/css/itog_code1" className="color link">Посмотреть</NavLink>
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

export default Lec5;