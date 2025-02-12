import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Pgm2 = () => {
  useDocumentTitle('Программа "Visual Studio Code"');

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const text = "div>h1{Title}+p{Description}";
  const text_2 = "ul>li*5";
  const text_3 = "div.container>ul>li*3";

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link back">
          </NavLink>
          <div className='back-link back img vsc'></div>
          <main className="main_content pgm">
            <h2>Visual Studio Code - Информация</h2>
            <h3>Это легкий и мощный текстовый редактор с поддержкой множества языков программирования и расширений. Он бесплатный, кросс-платформенный и обладает следующими ключевыми особенностями:</h3>
            <ol>
              <li>
                <b>Поддержка множества языков:</b> поддерживает такие языки, как JavaScript, Python, C++, Java, HTML, CSS и другие.
              </li>
              <li>
                <b>Расширяемость:</b> можно устанавливать расширения для различных языков, тем, линтеров, отладчиков и т.д.
              </li>
              <li>
                <b>Интегрированный терминал:</b> позволяет работать с командной строкой прямо в редакторе.
              </li>
              <li>
                <b>Подсветка синтаксиса и автодополнение:</b> помогает ускорить процесс написания кода.
              </li>
              <li>
                <b>Поддержка Git:</b> позволяет интегрировать систему контроля версий Git для работы с репозиториями.
              </li>
              <li>
                <b>Отладка:</b> предоставляет инструменты для отладки кода прямо из редактора.
              </li>
            </ol>
            <h2 className="mt20px">Visual Studio Code - Гайд</h2>
            <ol>
              <li>
                <h3>Компоненты VSC</h3>
                <ul className='components'>
                  <li className='explorer'>
                    Explorer или же проводник, тут хранятся файлы
                  </li>
                  <li className="source">
                    Source или же контроль версий, тут можно сделать комит или посмотреть изменения
                  </li>
                  <li className='debug'>
                    Debug или же режим проверки на ошибку, тут можно поставить точку остановы и посмотреть как работает код, найти ошибку
                  </li>
                </ul>
              </li>
              <li className='mt20px'>
                <h3>Горячие клавишы</h3>
                <ol>
                  <li>
                    <b>Открытие командной палитры:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + Shift + P</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + Shift + P</samp> (Mac)
                      </li>
                      <li className="none">
                        Это открывает командную палитру для быстрого поиска и выполнения команд.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Открытие терминала:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + ~</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + ~</samp> (Mac)
                      </li>
                      <li className="none">
                        Быстрое открытие встроенного терминала.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Переключение между файлами:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + P</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + P</samp> (Mac)
                      </li>
                      <li className="none">
                        Открывает диалог для быстрого поиска и открытия файлов.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Перейти к строке:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + G</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + G</samp> (Mac)
                      </li>
                      <li className="none">
                        Быстро перейти к строке в открытом файле.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Множественный курсор:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Alt + Click</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Option + Click</samp> (Mac)
                      </li>
                      <li className="none">
                        Позволяет вставить курсоры в несколько мест для редактирования.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Форматирование кода:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Shift + Alt + F</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Shift + Option + F</samp> (Mac)
                      </li>
                      <li className="none">
                        Форматирует текущий файл согласно установленным правилам.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Поиск по файлу:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + F</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + F</samp> (Mac)
                      </li>
                      <li className="none">
                        Открывает строку поиска для текущего файла.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Перейти к определению/функции:</b>
                    <ul className='cods'>
                      <li>
                        <samp>F12</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>F12</samp> (Mac)
                      </li>
                      <li className="none">
                        Переход к определению функции, переменной или классу.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Закрыть текущий файл:</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + W</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + W</samp> (Mac)
                      </li>
                      <li className="none">
                        Закрывает текущий файл.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Удалить строку (без копирования в буфер обмена):</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + Shift + K</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + Shift + K</samp> (Mac)
                      </li>
                      <li className="none">
                        Позволяет быстро убрать ненужную строку кода без выделения.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Комментирование</b>
                    <ul className='cods'>
                      <li>
                        <samp>Ctrl + /</samp> (Windows/Linux)
                      </li>
                      <li>
                        <samp>Cmd + /</samp> (Mac)
                      </li>
                      <li className="none">
                        Позволяет быстро закомментировать СТРОЧКУ кода
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li className='mt20px'>
                <h3>Горячие клавиши для Emmet (для HTML и CSS):</h3>
                <ol>
                  <li>
                    <b>Развернуть сокращение:</b>
                    <ul className="cods">
                      <li>
                        <samp>Tab</samp>
                      </li>
                      <li>
                        <samp>Enter</samp>
                      </li>
                      <li className="none">
                        Используется для быстрого развертывания сокращений Emmet, например, <samp>{text_3}</samp> превратится в HTML-код.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Развернуть сокращение в атрибуте:</b>
                    <ul className="cods">
                      <li>
                        <samp>Ctrl + E</samp>
                      </li>
                      <li>
                        <samp>Cmd + E</samp>
                      </li>
                      <li className="none">
                        Разворачивает сокращение в атрибуте элемента.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Краткое сокращение для списка:</b>
                    <ul className="cods">
                      <li>
                        <samp>{text_2}</samp>
                      </li>
                      <li className="none">
                        Это создаст список с пятью элементами <samp>li</samp>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Добавить несколько элементов в одну строку:</b>
                    <ul className="cods">
                      <li>
                        <samp>{text}</samp>
                      </li>
                      <li className="none">
                        Развернется в HTML с элементами<samp>&lt;div&gt;&gt;&lt;h1&gt;Title&lt;/h1&gt;+&lt;p&gt;Description&lt;/p&gt;</samp>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>CSS-сокращения:</b>
                    <ul className="cods">
                      <li>
                        <samp>m10px → margin: 10px;</samp>
                      </li>
                      <li>
                        <samp>p20px → padding: 20px;</samp>
                      </li>
                      <li>
                        <samp>w100% → width: 100%;</samp>
                      </li>
                      <li className="none">
                        Используется для быстрого добавления стилей в CSS..
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Добавление классов или ID к элементу:</b>
                    <ul className="cods">
                      <li>
                        <samp>a:link → &lt;a href=""&gt;&lt;/a&gt;</samp>
                      </li>
                      <li className="none">
                        Это добавляет ссылку с атрибутом <samp>href</samp>.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li className="mt20px">
                <h3 id='extensions'>Установка VSC и его расширений</h3>
                <ol>
                  <li>
                    <b>Установка VS-Code</b>
                    <ul>
                      <li>
                        <a href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" className='color link'>Скачать VSC</a>
                      </li>
                      <li>
                        Установить VS-Code
                      </li>
                      <li>
                        Можно пользоваться!
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Установка расширений для VS-Code</b>
                    <p>Необходимо установить:</p>
                    <ul>
                      <li>
                        Git Graph
                      </li>
                      <li>
                        Live Server
                      </li>
                      <li>
                        HTML CSS Support
                      </li>
                      <li>
                        vscode-icons
                      </li>
                      <li>
                        HTML Boilerplate
                      </li>
                      <li>
                        HTML to CSS autocompletion
                      </li>
                      <li>
                        HTML/CSS/JavaScript Snippets
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Для того чтобы установить нужно:</b>
                    <ol>
                      <li>
                        Найдите слевой стороны кнопку <strong>"Extensions"</strong>
                      </li>
                      <li>
                        Сверху есть поисковик <strong>"Search"</strong>
                      </li>
                      <li>В поиске находим необходимые расширения (например, <strong>Git Graph</strong>)</li>
                      <li>Нажимаем кнопку <samp className="btn">Install</samp></li>
                      <li>Всё расширение установленно!</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
            <h2 className='mt20px'>УРААА, МОЖНО ПОЛЬЗОВАТЬСЯ! 😎</h2>
          </main>
        </div>
      </Layout>
  );
};

export default Pgm2;