import React from 'react';
import './css/style/checkbox.css';

const Checkbox = ({ id, checked, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      <div className="d-cbx">
        <input id={id} type="checkbox" checked={checked} onChange={() => onChange(id)} />
        <label htmlFor={id}></label>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
