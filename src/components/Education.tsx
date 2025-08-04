import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education">
        <div className="date">
          <h3>Graduated<br />June '13</h3>
        </div>
        <div className="description">
          <h3>
            <a href="http://www.creativecircus.edu/" target="_blank" rel="noopener noreferrer">
              The Creative Circus
            </a>
          </h3>
          <h4>Atlanta, GA<br />Interactive development</h4>
        </div>

        <div className="date">
          <h3>Graduated<br />Dec '03</h3>
        </div>
        <div className="description">
          <h3>
            <a href="http://www.chattahoocheetech.edu/" target="_blank" rel="noopener noreferrer">
              North Metro Technical College
            </a>
          </h3>
          <h4>Acworth, GA<br />Diploma, Computer Information Systems/Microcomputer<br />Specialization GPA 3.97</h4>
        </div>

        <div className="date">
          <h3>Sep '97 - Sep '00</h3>
        </div>
        <div className="description">
          <h3>
            <a href="http://www.kennesaw.edu/" target="_blank" rel="noopener noreferrer">
              Kennesaw State University
            </a>
          </h3>
          <h4>Kennesaw, GA<br />Computer science</h4>
        </div>
      </div>
    </section>
  );
};

export default Education;
