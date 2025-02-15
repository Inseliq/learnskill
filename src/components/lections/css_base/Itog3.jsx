import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import Console from '../../Console';

const Itog3 = () => {
  useDocumentTitle('Итоговый код');

  const consoles = [
    {
      title: "css",
      content: `
:root {
  --header: #556B2F;
  --footer: #5C4033;
  --body: #98FB98;
  --main: #FAF0E6;
  --main-font-color: #f5f5f5;
}

.dark:root {
  :root {
  --header: #AA94D0; /* Инверсия #556B2F */
  --footer: #A3BFCB; /* Инверсия #5C4033 */
  --body: #670670;   /* Инверсия #98FB98 */
  --main: #050F19;   /* Инверсия #FAF0E6 */
  --main-font-color: #0A0A0A; /* Инверсия #f5f5f5 */
}

}

* {
  color: var(--main-font-color);
}
      `,
    },
  ];


  return (
    <Layout>
      <div className="LectionPage videoLection">
        <NavLink to="/learnskill/lection/css/lec3" className="back-link back"></NavLink>
        <main className="main_content">
          <Console consoles={ consoles } />
        </main>
        </div>
    </Layout>
  );
};

export default Itog3;