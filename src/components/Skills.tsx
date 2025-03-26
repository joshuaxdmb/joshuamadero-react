import React from 'react';

interface Skill {
  name: string;
  level: number;
  levelText: string;
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
      </div>
    </section>
  );
};

export default Skills; 