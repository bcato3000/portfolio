import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <ul className="contact-me">
        <li>
          <a href="mailto:bcato3000@gmail.com?subject=Hey%20Cato3000!" target="_self">
            bcato3000@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cato3000/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/assets/img/linkedin.svg`} alt="linkedin" loading="lazy" />
          </a>
        </li>
      </ul>
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/1918.png`}
        alt="amazed 1918 people"
        loading="lazy"
        className="looking-up"
      />
    </section>
  );
};

export default Contact;
