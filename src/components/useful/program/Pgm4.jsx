import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Pgm4 = () => {
  useDocumentTitle('Программа "GitHub Desktop"');
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link back">
          </NavLink>
          <div className='back-link back img git'></div>
          <main className="main_content pgm">
            <h2>Гайд по GitHub Desktop для новичков 🚀</h2>
            <p>GitHub Desktop – это удобная программа для работы с репозиториями Git без командной строки. Если ты новичок в Git и GitHub, это идеальный инструмент для начала!</p>
            <ol>
              <li className='mt20px'>
                <h3>🔹 Установка GitHub Desktop</h3>
                <h4 className='mt10px'>✅ Шаг 1: Скачивание</h4>
                <ol>
                  <li>Открой сайт <a rel="noopener noreferrer" target='_blank' href="https://desktop.github.com/" className="color link">desktop.github.com</a></li>
                  <li>Нажми кнопку "<b>Download for Windows</b>" (или <b>macOS</b>, если у тебя Mac)</li>
                  <li>Установи программу, как обычное приложение</li>
                </ol>
                <h4 className='mt10px'>✅ Шаг 2: Вход в GitHub</h4>
                <ol>
                  <li>Запусти GitHub Desktop</li>
                  <li>Нажми <b>"Sign in to GitHub.com"</b></li>
                  <li>Введи логин и пароль от GitHub (если нет аккаунта, зарегистрируйся на <a rel="noopener noreferrer" target='_blank' href="https://github.com/" className="color link">github.com</a>)</li>
                </ol>
              </li>
              <li className="mt20px">
                <h3>🎨 Интерфейс GitHub Desktop</h3>
                <p className='mt10px'>После входа ты увидишь:</p>
                <ul className="cods num-code">
                  <li className="none">✅ <b>Current Repository</b> – текущий репозиторий (папка с проектом)</li>
                  <li className="none">✅ <b>Changes</b> – изменения в файлах, которые можно зафиксировать</li>
                  <li className="none">✅ <b>History</b> – история коммитов (изменений)</li>
                  <li className="none">✅ <b>Branch</b> – список веток проекта</li>
                </ul>
              </li>
              <li className="mt20px">
                <h3>⌨️ Основные действия в GitHub Desktop</h3>
                <h4 className='mt10px'>🔹 Создание нового репозитория</h4>
                <ol>
                  <li>Нажми File → <b>New Repository</b></li>
                  <li>Введи <b>имя проекта</b> и выбери папку</li>
                  <li>Нажми <b>Create Repository</b></li>
                  <li>Всё! Теперь у тебя есть локальный репозиторий</li>
                  <li>Опублику его → <b>Publish Repository</b></li>
                </ol>
                <h4 className='mt10px'>🔹 Клонирование репозитория с GitHub</h4>
                <p className='mt10px'>Если у тебя уже есть проект на GitHub:</p>
                <ol>
                  <li>Нажми <b>File</b> → <b>Clone Repository</b></li>
                  <li>Выбери нужный репозиторий из списка либо вставь URL репозитория</li>
                  <li>Укажи папку, куда его скачать</li>
                  <li>Нажми <b>Clone</b> – готово!</li>
                </ol>
              </li>
              <li className="mt20px">
                <h3>🚀 Как работать с изменениями</h3>
                <h4 className='mt10px'>✅ Добавить файлы и сделать коммит</h4>
                <ol>
                  <li>Измени или добавь файлы в папке проекта</li>
                  <li>Открой <b>GitHub Desktop</b>, вкладка <b>Changes</b></li>
                  <li>Напиши короткое описание изменений в поле <b>Summary</b></li>
                  <li>Нажми <b>Commit to $branch</b></li>
                  <li className="comments">// $branch - название ветки</li>
                </ol>
              </li>
              <li className="mt20px">
                <h3>🔄 Отправка изменений на GitHub (Push)</h3>
                <p className='mt10px'>Чтобы отправить коммит на сервер GitHub:</p>
                <ol>
                  <li>Нажми <b>Push origin</b></li>
                  <li>Готово! Теперь изменения в репозитории на GitHub</li>
                </ol>
              </li>
              <li className="mt20px">
                <h3>🔄 Получение обновлений с GitHub (Pull)</h3>
                <p className='mt10px'>Если кто-то изменил проект в облаке:</p>
                <ol>
                  <li>Нажми <b>Fetch origin</b>, чтобы проверить обновления</li>
                  <li>Нажми <b>Pull origin</b>, чтобы скачать новые изменения</li>
                </ol>
              </li>
              <li className="mt20px">
                <h3>🌳 Ветки (Branches) – работа в команде</h3>
                <h4>🔹 Создание новой ветки</h4>
                <ol>
                  <li>Нажми <b>Current Branch</b> → <b>New Branch</b></li>
                  <li>Введи название новой ветки</li>
                  <li>Нажми <b>Create Branch</b></li>
                  <li>Теперь ты работаешь в новой ветке, а не в <samp>main</samp></li>
                </ol>
                <h5 className="warp_element">
                  ⚡️ Зачем нужны ветки?
                  <p>Ветки позволяют работать над разными задачами параллельно, не ломая основной код.</p>
                </h5>
              </li>
              <li className="mt20px">
                <h3>⭐ Полезные советы</h3>
                <ul className="cods num-code">
                  <li className="none">✅ Всегда делай <b>Pull</b> если ты работаешь в команде перед началом работы, чтобы получить свежий код</li>
                  <li className="none lh_normal">✅ Пиши <b>осмысленные сообщения</b> в коммитах, например: <samp>Добавил кнопку входа</samp> вместо <samp>Update</samp></li>
                  <li className="none">✅ Используй <b>.gitignore</b>, чтобы не загружать ненужные файлы</li>
                  <li className="none">✅ <b>Создавай ветки</b> для новых фич, а потом объединяй их в <samp>main</samp> через <b>Pull Request</b></li>
                </ul>
              </li>
            </ol>
            <h2 className="mt20px" id="pages">Гайд по GitHub Pages 🚀</h2>
            <h4>GitHub Pages позволяет выложить сайт в открытый доступ, на сервер git-а</h4>
            <p>GitHub Pages позволяет разместить ваш сайт прямо из репозитория на GitHub. Это идеальный способ развернуть свои проекты, например, портфолио или сайт-визитку.</p>
            <ol>
              <li>
                <h3>Что нужно для начала?</h3>
                <ul className='cods num-code'>
                  <li className='none'>🔹 <b>Аккаунт на GitHub</b> – если у вас его нет, создайте</li>
                  <li className='none'>🔹<b>GitHub Desktop</b> (по желанию) – удобный инструмент для работы с репозиториями без командной строки</li>
                </ul>
              </li>
              <li className="mt20px">
                <h3>Создание репозитория</h3>
                <ul className="cods num-code">
                  <li className="none">1️⃣ Перейдите на <b>GitHub</b> → нажмите <b>New repository</b></li>
                  <li className="none">2️⃣ Введите название (например, <b>my-website</b>)</li>
                  <li className="none">3️⃣ Выберите <b>"Public"</b> (публичный)</li>
                  <li className="color red none">❗ ОБЯЗАТЕЛЬНО</li>
                  <li className="none">4️⃣ Нажмите <b>"Create repository"</b></li>
                </ul>
              </li>
              <li className="mt20px">
                <h3>Добавление файлов проекта</h3>
                <h4 className='mt10px'>📌 Способ 1: Через GitHub (вручную)</h4>
                <ol>
                  <li>Перейдите в репозиторий</li>
                  <li>Нажмите <b>"Add file"</b> → <b>"Upload files"</b></li>
                  <li>Загрузите файлы (например, <samp>index.html</samp>)</li>
                  <li>Нажмите <b>"Commit changes"</b></li>
                </ol>
                <h4 className="mt10px">🖥 Способ 2: Через GitHub Desktop (удобно для новичков)</h4>
                <ol>
                  <li>
                    Скачайте и установите GitHub Desktop
                  </li>
                  <li>Войдите в аккаунт</li>
                  <li><b>Клонируйте репозиторий</b> (File → Clone repository)</li>
                  <li>Скопируйте файлы проекта в папку репозитория</li>
                  <li>В GitHub Desktop нажмите <b>"Commit to main"</b> → <b>"Push origin"</b></li>
                </ol>
              </li>
              <li className="mt20px">
                <h3>Включение GitHub Pages</h3>
                <ul className="cods num-code">
                  <li className="none">1️⃣ Откройте репозиторий на GitHub</li>
                  <li className="none">2️⃣ Перейдите во вкладку <b>Settings</b></li>
                  <li className="none">3️⃣ В меню слева найдите <b>Pages</b></li>
                  <li className="none">4️⃣ В разделе <b>"Build and deployment"</b> → <b>"Branch"</b> выберите <samp>main</samp></li>
                  <li className="comments">//Если ветка готовая для пейджес называется по другому, выбирите её (например, gh-pages)</li>
                  <li className="none">5️⃣ Нажмите <b>"Save"</b></li>
                </ul>
                <p className='mt10px'>🔹 <b>Готово!</b> Через 1-2 минуты ваш сайт будет доступен по адресу:</p>
                <h4 className='mt10px'>📌<samp>https://ваше_имя.github.io/название_репозитория/</samp></h4>
              </li>
              <li className="mt20px">
                <h3>Автоматическое обновление сайта</h3>
                <p className='mt10px'>Если нужно обновить сайт:</p>
                <ul>
                  <li>Добавьте новые файлы</li>
                  <li>Сделайте <b>commit</b> и <b>push</b></li>
                  <li><b>GitHub Pages</b> автоматически обновит сайт 🎉</li>
                </ul>
              </li>
            </ol>
          </main>
        </div>
      </Layout>
  );
};

export default Pgm4;