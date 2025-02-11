import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/root.css';



const NextBtn = ( { path } ) => {
  return (
      <NavLink
        to={path}
        className="back-link next">
           NEXT
      </NavLink>
  );
};

export default NextBtn;