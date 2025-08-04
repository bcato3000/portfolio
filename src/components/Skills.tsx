import React from 'react';

const skillGroups = [
  [
    'HTML5',
    'CSS3',
    'Sass',
    'Javascript (ES6)',
    'Typescript',
    'Storybook',
    'Single Page Applications and components (React, Vue)',
    'RESTful APIs',
    'Node',
    'Web Animation',
    'Responsive Web Development',
    'Cross-browser',
    'Accessibility',
  ],
  [
    'User Interface Design',
    'User Experience',
    'Adobe Creative Suite',
    'Figma',
    'Git',
    'Agile Methodology',
    'UI Team Lead',
    'UI Class Instructor for Software Training',
    'Expansive Enterprise Sites',
    'Client Facing Contributor',
    'Collaboration w/ Internal and 3rd Party Agencies',
    'PC Windows',
    'Mac iOS',
  ]
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Skills / Expertise / Experience</h2>
      <div className="skills-expertise">
        {skillGroups.map((group, index) => (
          <ul key={index}>
            {group.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Skills;
