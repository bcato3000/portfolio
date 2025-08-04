import React from 'react';
import bcLogo from '../assets/img/bc-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>2025</p>
      <span className="bc-logo">
        <img src={bcLogo} alt="BC logo" />
      </span>
    </footer>
  );
};

export default Footer;
