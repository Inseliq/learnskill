import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Itog2 = () => {
  useDocumentTitle('Итоговый код');

  const consoles = [
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

h1 {
  font-size: clamp(1.25rem, 1.0146rem + 1.0949vw, 2rem);
  font-weight: 700;
}

h2 {
  font-size: clamp(1.125rem, 1.0073rem + 0.5474vw, 1.5rem);
  font-weight: 600;
}

h3 {
  font-size: clamp(1rem, 0.9215rem + 0.365vw, 1.25rem);
  font-weight: 500;
}

h4 {
  font-size: clamp(0.875rem, 0.7965rem + 0.365vw, 1.125rem);
  font-weight: 400;
}
      `,
    },
  ];


  return (
    <Layout>
      <div className="LectionPage videoLection">
        <NavLink to="/learnskill/lection/css/lec2" className="back-link back"></NavLink>
        <main className="main_content">
          <Console consoles={ consoles } />
        </main>
        </div>
    </Layout>
  );
};

export default Itog2;