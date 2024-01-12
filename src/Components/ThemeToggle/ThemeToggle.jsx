import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

import './ThemeToggle.css';

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="btn-toggle">
      <div className="btn-toggle-content">
        <div className={`btn-theme ${darkMode ? 'toggle-dark' : ''}`} onClick={toggleTheme}>
          {darkMode ? `🌞 ` : `🌙 `}
        </div>
        <p>
          <b>Set to {darkMode ? `Light ` : `Dark `}</b>
        </p>
      </div>
    </div>
  );
}

export default ThemeToggle;
