import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';
import useDocumentTitle from './huks.js/useDocumentTitle';
import './css/style/saved.css';

const Saved = () => {
  useDocumentTitle('Записи вебинаров');

  return (
      <Layout>
        <div className="SavedPage">
          <NavLink
          id="useful"
          to="/learnskill/"
          className="back-link">
          </NavLink>
          <div className="main__content">
            Test Content
            <div className="test-video card-video">
              <div className="content-card-video-prehover">Вебинар $test</div>
              <div className="content-card-video-onhover">
                <a href="#" target="_blank" rel="noopener noreferrer" className="link-bg vk-video"></a>
                <a href="" className="link-bg youtube"></a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Saved;