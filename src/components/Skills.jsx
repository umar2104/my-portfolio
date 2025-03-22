import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'MySQL', level: 75 },
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
