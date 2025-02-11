import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/root.css';



const LecBtn = ( { path_lec } ) => {
  return (
      <NavLink
        to={path_lec}
        className="back-link lec">
          🎓
      </NavLink>
  );
};

export default LecBtn;