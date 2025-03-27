import React from 'react';

interface Skill {
  name: string;
  level: number;
  levelText: string;
}

interface ToolLogo {
  name: string;
  image: string;
}

const skills: Skill[] = [
  { name: 'React (JavaScript and Typescript)', level: 100, levelText: 'EXCELLENT' },
  { name: 'React Native', level: 100, levelText: 'EXCELLENT' },
  { name: 'C/C++', level: 80, levelText: 'VERY GOOD' },
  { name: 'Web Development: NODE JS, HTML, CSS', level: 100, levelText: 'EXCELLENT' },
  { name: 'Python', level: 80, levelText: 'VERY GOOD' },
  { name: 'Databases', level: 80, levelText: 'VERY GOOD' },
  { name: 'Mechanical Design', level: 100, levelText: 'EXCELLENT' },
  { name: 'Structural Analysis, FEA & CFD', level: 100, levelText: 'EXCELLENT' },
  { name: 'Prototyping: machining, 3D-printing, power tools', level: 100, levelText: 'EXPERT' },
  { name: 'Arduino and other microcontrollers', level: 100, levelText: 'EXCELLENT' },
];

const toolLogos: ToolLogo[] = [
  { name: 'NodeJS', image: '/assets/img/nodejs-logo.png' },
  { name: 'Arduino', image: '/assets/img/arduino-logo.png' },
  { name: 'SQL', image: '/assets/img/sql-logo.png' },
  { name: 'React', image: '/assets/img/rn-logo.png' },
  { name: 'C', image: '/assets/img/c-logo.png' },
  { name: 'Python', image: '/assets/img/python-logo.png' },
  { name: 'JS', image: '/assets/img/js-loog.png' },
  { name: 'Heroku', image: '/assets/img/heroku-logo.png' },
  { name: 'Typescript', image: '/assets/img/ts-logo.png' },
  { name: 'PostgreSQL', image: '/assets/img/postgres-logo.png' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p>
            I've led teams to design and build an airplane, speedbikes, a 3D-printer, and a hyperloop pod, among others.
            I also have several personal projects. Through these projects, I gained skills and learn to use some engineering tools:
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: '5mm' }}>
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index} className="progress">
                <span className="skill">
                  {skill.name}<i className="val">{skill.levelText}</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            {skills.slice(6).map((skill, index) => (
              <div key={index} className="progress">
                <span className="skill">
                  {skill.name}<i className="val">{skill.levelText}</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="row justify-content-md-center center text-center">
            {toolLogos.map((tool, index) => (
              <div key={index} className="skills-icon-container col-lg-1 col-md-2 portfolio-item filter-app">
                <img src={tool.image} alt={tool.name} className="img-fluid rounded-circle skills-icon" />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 