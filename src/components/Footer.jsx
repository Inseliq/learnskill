import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className='bottom'>
      <p>© 2025 <b>LearnSkill</b>. Все права защищены.</p>
      <NavLink
        id="politic"
        to="/learnskill/politic"
        className={location.pathname === '/learnskill/politic' ? 'on-this link' : 'link'}>
          Политика конфиденциальности
        </NavLink>
    </footer>
  );
};

export default Footer;