import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import { logoData } from '../data/logoData';

const About: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      new Flickity(carouselRef.current, {
        freeScroll: true,
        autoPlay: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      });
    }
  }, []);

  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-me">
        <p>
          I <span className="highlight-blueC">Love</span> front-end/UI development, interactive design,
          latest technologies, <span className="highlight-orangeC">burritos</span>, the 80's (movies & music),
          anything vintage / retro, American History, 90's hip-hop / rap, classic rock, oldies, 20's jazz,
          modern blue grass, and <strong>my family</strong>. I <span className="highlight-purpleC">Like</span> to be
          courteous, punctual, to laugh, to look out windows, people watching, binge watching a series.&nbsp;
          <span className="highlight-greenC">Everything else </span>is fine.
        </p>
        <div className="carousel" ref={carouselRef}>
          {logoData.map((logo, index) => (
            <img
              key={index}
              className="carousel-cell"
              src={`/assets/img/${logo.src}`}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
