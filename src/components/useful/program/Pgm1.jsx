import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Pgm1 = () => {
  useDocumentTitle('Программа "Visual Studio"');

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link back">
          </NavLink>
          <div className='back-link back img vs'></div>
          <main className="main_content pgm">
            <h2>Visual Studio - Информация</h2>
            <h3>Это мощная среда разработки, которая идеально подходит для разработки приложений на C# и ASP.NET благодаря своим функциям, таким как автодополнение кода, отладка, поддержка серверных технологий и интеграция с различными сервисами и инструментами.</h3>
            <ol>
              <li>
                <b>Создание проектов ASP.NET:</b> В Visual Studio вы можете создать различные типы проектов для разработки веб-приложений с использованием ASP.NET, включая ASP.NET Core, Web API, и MVC.
              </li>
              <li>
                <b>Шаблоны проектов:</b> Visual Studio предлагает шаблоны для быстрого старта с использованием ASP.NET, таких как шаблоны для MVC, Web API, Razor Pages и т.д.
              </li>
              <li>
                <b>Интеграция с Entity Framework:</b> Встроенная поддержка для работы с базами данных через Entity Framework, включая миграции и доступ к данным.
              </li>
              <li>
                <b>Razor Pages и Views:</b> Для создания динамических веб-страниц Visual Studio поддерживает Razor для генерации HTML на стороне сервера.
              </li>
              <li>
                <b>Отладка веб-приложений:</b> Встроенный сервер для локальной отладки, который позволяет тестировать веб-приложения прямо в браузере.
              </li>
              <li>
                <b>Развертывание:</b> Легкое развертывание на различные платформы, включая IIS, Azure и другие.
              </li>
            </ol>
            <h2 className='mt20px'>Visual Studio - Гайд</h2>
            <ol>
              <li><b>VS</b> нам понадобится в качестве создателя шаблона ASP.NET(MVC) модели.</li>
              <li>
                А так же <b>в качестве сервера</b>.
              </li>
              <li>
                <a href="https://visualstudio.microsoft.com/ru/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false" className="color link">Скачать VS по ссылке</a>
              </li>
              <li>
                <b>Во время установки выберите Workload:</b> ASP.NET and web development. Это добавит необходимые инструменты для разработки веб-приложений.
              </li>
              <li>
                <h3>Создание нового проекта</h3>
                <ol>
                  <li>
                    В стартовом окне выберите Create a new project.
                  </li>
                  <li>
                    В окне Create a new project выберите тип проекта ASP.NET Core Web Application.
                  </li>
                  <li>
                    Нажмите Next.
                  </li>
                </ol>
              </li>
              <li>
                <h3>Настройка проекта</h3>
                <ol>
                  <li>
                    Введите имя проекта и путь к папке, где он будет сохранен.
                  </li>
                  <li>
                    Нажмите Create.
                  </li>
                </ol>
              </li>
              <li>
                <h3>Выбор шаблона приложения</h3>
                <ol>
                  <li>
                    В окне выбора шаблона выберите один из следующих:
                    <ul>
                      <li>
                        <b>Web Application (Model-View-Controller)</b> — для использования архитектуры MVC.
                      </li>
                      <li>
                        <b>Web API</b> — для создания RESTful API.
                      </li>
                      <li>
                        <b>Razor Pages</b> — для создания веб-приложений с Razor страницами.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Выберите также:
                    <ul>
                      <li>
                        <b>ASP.NET Core version:</b> выберите нужную версию (например, .NET 6 или .NET 7).
                      </li>
                      <li>
                        <b>Authentication:</b> выберите тип аутентификации (например, No Authentication, если аутентификация не требуется на данном этапе).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Нажмите Create.
                  </li>
                </ol>
              </li>
              <li>
                <h3>Структура проекта</h3>
                <ul>
                  <li>
                    <b>Controllers:</b> Папка для контроллеров в MVC-приложении.
                  </li>
                  <li>
                    <b>Views:</b> Папка для Razor страниц и представлений.
                  </li>
                  <li>
                    <b>Models:</b> Папка для моделей данных.
                  </li>
                  <li>
                    <b>wwwroot:</b> Папка для статических файлов (CSS, JS, изображения и т. д.).
                  </li>
                </ul>
              </li>
              <li>
                <h3>Запуск приложения</h3>
                <ol>
                  <li>
                    Для запуска приложения нажмите <b>Ctrl + F5</b> или нажмите кнопку <b>Run</b> в верхней панели.
                  </li>
                  <li>
                    Visual Studio откроет браузер с локальной версией вашего приложения, обычно на адресе <samp>http://localhost:5000</samp> или <samp>https://localhost:5001.</samp>
                  </li>
                </ol>
              </li>
              <li>
                <h3>
                  Разработка приложения
                </h3>
                <ul>
                  <li>
                    <b>Добавление контроллеров:</b> Для создания новых страниц или логики добавляйте контроллеры в папку <samp>Controllers</samp>. Например, создайте новый контроллер <samp>HomeController.cs.</samp>
                  </li>
                  <li>
                    <b>Добавление моделей:</b> В папке <samp>Models</samp> можно создать классы, которые будут представлять данные для отображения в представлениях.
                  </li>
                  <li>
                    <b>Работа с базой данных:</b> Для работы с данными мы будем использовать <samp>Entity Framework Core.</samp> Создайте контекст базы данных и модели для работы с данными.
                  </li>
                </ul>
              </li>
            </ol>
          </main>
        </div>
      </Layout>
  );
};

export default Pgm1;