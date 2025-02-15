import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Itog4 = () => {
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
}

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

main {
  background: var(--body);
  height: 100%;

  & div.container {
    height: 100%;
    background: var(--main);
  }
}

footer.bottom {
  background: var(--footer);
}
      `,
    },
  ];


  return (
    <Layout>
      <div className="LectionPage videoLection">
        <NavLink to="/learnskill/lection/css/lec4" className="back-link back"></NavLink>
        <main className="main_content">
          <Console consoles={ consoles } />
        </main>
        </div>
    </Layout>
  );
};

export default Itog4;