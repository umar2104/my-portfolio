
// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About Me
      </motion.h2>
      
      <div className="about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-wrapper">
            {/* Replace with your actual image */}
            <img src="/images/profile.jpg" alt="Your Name" />
            <div className="image-bg"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Frontend Developer & UI Enthusiast</h3>
          
          <p>
            Hi there! I'm a passionate frontend developer with expertise in creating 
            responsive, interactive web applications. I love turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
          
          <p>
            My journey in web development started in 2021, and since then, I've been 
            constantly learning and improving my skills. I specialize in modern JavaScript 
            frameworks like React and Angular, and have experience with Node.js and Express 
            for backend development.
          </p>
          
          <div className="personal-info">
            <div className="info-item">
              <span className="info-title">Name:</span>
              <span className="info-value">Your Full Name</span>
            </div>
            
            <div className="info-item">
              <span className="info-title">Email:</span>
              <span className="info-value">your.email@example.com</span>
            </div>
            
            <div className="info-item">
              <span className="info-title">From:</span>
              <span className="info-value">Your City, Country</span>
            </div>
            
            <div className="info-item">
              <span className="info-title">Availability:</span>
              <span className="info-value available">Available for work</span>
            </div>
          </div>
          
          <motion.a 
            href="/your-resume.pdf" 
            download
            className="download-cv"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <i className="fas fa-download"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;