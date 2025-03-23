import React from 'react';
import { motion } from 'framer-motion';
import dashboardImage from '../images/dashboard.png';
const Projects = () => {
  const projects = [
    {
      title: 'Vanilla Dashboard',
      description: 'Basic Dasboard UI uisng HTML, CSS, and JavaScript',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: dashboardImage,
      link: 'https://umar2104.github.io/Vanilla-Dashboard/',
      github: 'https://github.com/umar2104/Vanilla-Dashboard.git'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics',
      tech: ['Angular', 'Chart.js', 'Firebase'],
      image: '/images/project2.jpg',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Kanban-style task management application',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: '/images/project3.jpg',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;