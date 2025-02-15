import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Itog1 = () => {
  useDocumentTitle('Итоговый код');

  const consoles = [
    {
      title: "css",
      content: `
@import url(./const.color.css);
@import url(./fonts.css);

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html, body {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

div.container {
  max-width: 1440px;
  width: 100%;
  display: flex;
}

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
        <NavLink to="/learnskill/lection/css/lec1" className="back-link back"></NavLink>
        <main className="main_content">
          <Console consoles={ consoles } />
        </main>
        </div>
    </Layout>
  );
};

export default Itog1;