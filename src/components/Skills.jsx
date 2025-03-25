import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Angular', level: 90 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 95 },
    { name: 'SCSS', level: 75 },
    { name: 'Javascript', level: 85 },
    { name: 'Typescript', level: 90 },
    { name: 'React', level: 55 },
    { name: 'Node.js', level: 65 },
    { name: 'Express', level: 55 },
    { name: 'MongoDB', level: 55 },
    { name: 'MySQL', level: 60 },
    { name: 'Java', level: 65 },
  ];

  return (
    <section className="skills-section" id="skills">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        My Skills
      </motion.h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
