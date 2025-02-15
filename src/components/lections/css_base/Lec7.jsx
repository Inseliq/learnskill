import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Lec7 = () => {
  useDocumentTitle('Лекция "Работа с цветами"');

  const [activeTab, setActiveTab] = useState('text');

  const consoles = [
    {
      title: "css",
      content: `
:root {
  --header: #556B2F;
}
      `,
    },
  ];

  const consoless = [
    {
      title: "css",
      content: `
* {
  color: var(--main-font-color);
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
            <h2>🎊 Работа с цветами</h2>
            <p className="mt10px">Работать будем в файле <samp>const.color.css</samp></p>
            <ul className="cods num-code mt20px">
              <li className="none"><h3>&lt;/&gt; Глобальные переменные</h3></li>
              <li className="none"><b>Глобальные перменные</b> - это <b>CSS-переменные</b>, объявленные в корневом селекторе (<samp>:root</samp>) и доступные во всём документе. Они позволяют хранить значения (например, цвета, отступы, шрифты) в одном месте и использовать их повторно.</li>
              <li className="none">💥 Для их объявления нужно использовать <b>--название_переменной:</b></li>
              <li className="none">💥 Далее указываем цвет, в виде <b>#HEX</b> кода</li>
              <li className="comments">Переменные лучше называть понятными названиями (например, <b>--header-color: #цвет</b>)</li>
            </ul>
            <Console consoles={ consoles } />
            <ul className="cods num-code mt20px">
              <li className="none">🔅Теперь создадим оставшиеся переменные цвета <b>--footer</b> (цвет подвала сайта), <b>--body</b> (цвет основной страницы), <b>--main</b> (цвет основного контейнера), <b>--main-font-color</b> (основной цвет шрифта)</li>
              <li className="none">🔆А ещё создадим тёмную тему, для этого нам нужно объявить корневой селектор с классом (<samp>.dark:root</samp>), в дальнейшем с помощью <b>js</b> будем применять класс <b>.dark</b> к <b>html</b> для смены цвета темы</li>
              <li className="none">💠 Объявляем такие же переменные как в обычном <b>:root</b> (--header, --footer, --body, --main, --main-font-color), только теперь нам нужно инвертировать цвет (например, #000000 ➡ #ffffff) чёрный меняем на белый</li>
              <li className="none">🌐 Применим цвет текста ко всем элементам сайта, сделаем также через <b>*</b> и применим переменную (для того чтобы её применить, нужно написать селектор и <samp>var(--название_переменной)</samp> );
              <p>Мы используем селектор <b>color</b> отвечающий за цвет текста и применим переменную:</p>
              <p><samp>color: var(--main-font-color)</samp></p>
              <p></p>
              </li>
            </ul>
            <h3 className="mt10px">🚀 Пример кода:</h3>
            <Console consoles={ consoless } />
            <h3 className="mt20px">🔥 Итоговый код:</h3>
            <NavLink to="/learnskill/lection/css/itog_code3" className="color link">Посмотреть</NavLink>
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

export default Lec7;