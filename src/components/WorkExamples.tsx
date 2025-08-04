import React from 'react';
import { workExamples } from '../data/portfolioData';

interface WorkExample {
  title: string;
  url: string;
  image: string;
  description: string;
  details: string[];
}

const WorkExamples: React.FC = () => {
  return (
    <section id="work">
      <h2>Work Examples</h2>
      <ul className="work-list">
        {workExamples.map((item: WorkExample, index: number) => (
          <li key={index}>
            <div
              className="background"
              style={{ backgroundImage: `url(/assets/img/${item.image})` }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="foreground"
              >
                <h3>{item.title}:</h3>
                <ul>
                  <li>
                    {item.description}
                    <ul>
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExamples;
