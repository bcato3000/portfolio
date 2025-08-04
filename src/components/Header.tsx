import React from 'react';
import bcLogo from '../assets/img/bc-logo.svg';
import profilePic from '../assets/img/profile-pic-2.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header>
      <span className="bc-logo">
        <img src={bcLogo} alt="BC Logo" />
      </span>
      <div className="hero-wrapper">
        <h1>The Front-end Dev Portfolio</h1>
        <h1>of Benjamin Cato</h1>
        <div className="profile-pic">
          <img src={profilePic} alt="profile pic" />
        </div>
        <p className="hero-blurb">
          Thanks for checking out my little portfolio.
          <br />
          Feel free to hit me up anytime.{" "}
          <a href="mailto:bcato3000@gmail.com?subject=Hey%20Cato3000!" target="_self">
            bcato3000@gmail.com
          </a>{" "}
          Cheers!
        </p>
        <nav className="portfolio-links">
          <ul>
            <li>
              <a href="/Ben-Cato-resume.pdf" download="Ben-Cato-resume">Download Resume</a>
            </li>
            <li><ScrollLink to="work" smooth={true} offset={-70} duration={500}>Work Examples</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} offset={-70} duration={500}>Skills / Expertise</ScrollLink></li>
            <li><ScrollLink to="history" smooth={true} offset={-70} duration={500}>Work History</ScrollLink></li>
            <li><ScrollLink to="education" smooth={true} offset={-70} duration={500}>Education</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} offset={-70} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} offset={-70} duration={500}>Contact</ScrollLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
