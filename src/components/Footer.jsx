import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import pay_img from './assets/icon/other/pay_img.png';

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
        <a rel="noopener noreferrer" target='_blank' href="https://www.donationalerts.com/r/ncuxoseeliq" className="link-img">
          <img src={ pay_img } alt="pay" />
        </a>
    </footer>
  );
};

export default Footer;