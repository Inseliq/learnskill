import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Lec8 = () => {
  useDocumentTitle('Лекция "Стилизация шапки"');

  const [activeTab, setActiveTab] = useState('text');

  const consoles = [
    {
      title: "css",
      content: `
header.head {
  background: var(--header);
}

main {
  background: var(--body);
  height: 100%;

  & div.container {
    background: var(--main);
  }
}

footer.bottom {
  background: var(--footer);
}
      `,
    },
  ];

  const consoless = [
    {
      title: "css",
      content: `
header.head {
  background: var(--header);

  & .container {
    justify-content: space-between;
  }

  & .logo {
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    & img {
      width: clamp(2rem, 1.3723rem + 2.9197vw, 4rem);
      height: clamp(2rem, 1.3723rem + 2.9197vw, 4rem);
    }
  }

  & .navbar__top {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
  }
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
            <h2>🎨 Стилизация шапки</h2>
            <h3 className='mt10px'>✅ Применим все наши знания, чтобы стилизовать шапку и цвета для страницы, переходим в <samp>root.css</samp></h3>
            <ul className="cods num-code mt10px">
              <li className="none"><h3>Добавим цвета для header, main, footer</h3>
              <ol>
                <li>
                  Для <b>header</b>, обращаемся к элементу <strong>header.head</strong> и указываем цвет <b>background: цвет</b>, т.к. цвет у нас указан в виде переменной, то мы пишем <b>background: var(--header);</b>
                </li>
                <li>Для <b>main</b>, обращаемся к элементу <strong>main</strong> и указываем цвет <b>background: цвет</b>, т.к. цвет у нас указан в виде переменной, то мы пишем <b>background: var(--body);</b>
                </li>
                <li>Для <b>footer</b>, обращаемся к элементу <strong>footer.bottom</strong> и указываем цвет <b>background: цвет</b>, т.к. цвет у нас указан в виде переменной, то мы пишем <b>background: var(--footer);</b>
                </li>
                <li>
                  Для того чтобы дать цвет <b>контейнеру в main</b>, обращаемся к элементу <strong>main через дочерний элемент "&"</strong> задаём цвет контейнеру, далее указываем цвет <b>background: цвет</b>, т.к. цвет у нас указан в виде переменной, то мы пишем <b>background: var(--main);</b>
                </li>
              </ol>
              </li>
            </ul>
            <h3 className="mt10px">🔻Пример кода</h3>
            <Console consoles={ consoles } />
            <ul className="cods num-code mt10px">
              <li className="none">
                <h3>Поработаем над основным контейнером и шапкой 👁‍🗨</h3>
                <h4>Основной контейнер</h4>
                <p>Зададим ему параметр <b>height: 100%</b>, чтобы быть одного размера с main</p>
              </li>
              <li className="none">
                <h4 className="mt10px">Шапка 🧢</h4>
                <ol>
                  <li>
                    Сделаем чтобы контейнеры <b>navbar__top</b> и <b>logo</b> были в разных сторонах, для этого с помощью <b>"&"</b> зададим классу <b>.container</b> <strong>justify-content: space-between;</strong>, так как мы до этого указывали <strong>flex</strong> для контейнера, они расположутся в разные стороны.
                  </li>
                  <li>Стили контейнера <b>.logo</b> сделаем такие: внешний отступ слева 10px, flex, расположение по высоте: центр, отступ между элементами 10px. Обращаемся с помощью <b>"&"</b> к <b>.logo</b> и задаём <b>display:flex</b>, <b>align-items: center</b>, <b>gap: 10px</b>, <b>margin-left: 10px</b>, где <strong>gap: 10px</strong> - отступ 10px между элементами и <strong>margin-left: 10px</strong> - внешний отступ слева 10px</li>
                  <li>В этом же классе <b>.logo</b> с помощью <b>"&"</b> обращаемся к тегу <b>img</b> и задаём ему размеры, я делал это с помощью функции clamp, через сайт <b>FontsClampGenerator</b></li>
                  <p className="comments">Задав максимальный размер шрифта 64px и минимальный размер шрифта 32px, для адаптации</p>
                  <li>Теперь сделаем класс <b>navbar__top</b>, в селекторе <b>header.head</b> с помощью <b>"&"</b> обращаемся к классу <strong>navbar__top</strong> и задаём параметры: <b>flex</b>, <b>align-items: center</b>, <b>gap: 10px</b> и <b>margin-right</b>, где <b>margin-right</b> - внешний отступ справа</li>
                </ol>
              </li>
            </ul>
            <h3 className="mt10px">Вот так должно было получиться 🚀</h3>
            <Console consoles={ consoless } />
            <h3 className="mt20px">💧 Итоговый код, как должно было получиться 🔥</h3>
            <NavLink to="/learnskill/lection/css/itog_code4" className="color link">Посмотреть</NavLink>
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

export default Lec8;