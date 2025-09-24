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
          I have 12 years of experience building front-end applications with <span className="highlight-blueC">React</span>, <span className="highlight-orangeC">Next.js</span>, <span className="highlight-purpleC">Vue</span>, and <span className="highlight-greenC">TypeScript</span>. I specialize in creating responsive, accessible, and high-performing UIs, and I’ve led projects from prototype to production across e-commerce, fintech, and enterprise CMS platforms. I’ve worked closely with design teams in Figma to deliver pixel-perfect interfaces, integrated with REST and GraphQL APIs, and optimized applications for Core Web Vitals. I also have experience mentoring developers, conducting code reviews, and setting standards to ensure scalability and maintainability.
        </p>
        <div className="carousel" ref={carouselRef}>
          {logoData.map((logo, index) => (
            <img
              key={index}
              className="carousel-cell"
              src={`${process.env.PUBLIC_URL}/assets/img/${logo.src}`}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
