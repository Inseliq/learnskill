import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Pgm4 = () => {
  useDocumentTitle('Программа ""');

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link back">
          </NavLink>
          <div className='back-link back img'></div>
          <main className="main_content pgm">
            <h2>Visual Studio - Информация</h2>
            <h3>Это мощная среда разработки, которая идеально подходит для разработки приложений на C# и ASP.NET благодаря своим функциям, таким как автодополнение кода, отладка, поддержка серверных технологий и интеграция с различными сервисами и инструментами.</h3>

          </main>
        </div>
      </Layout>
  );
};

export default Pgm4;