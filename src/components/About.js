import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 2, label: 'Years Experience', suffix: '+' },
    { number: 17, label: 'Certificates Earned', suffix: '+' },
    { number: 10, label: 'Technologies Mastered', suffix: '+' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content" ref={ref}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a dedicated Computer Engineer & AI Specialist with a strong background in AI, Machine Learning, and Full-Stack Development. 
              With hands-on experience in both professional projects and innovative solutions, I have developed expertise in building scalable applications and AI-powered systems.
            </p>
            <p>
              I am passionate about artificial intelligence, particularly in Natural Language Processing and Computer Vision, and always strive to 
              stay updated with the latest trends and technologies in the field of AI and software development to deliver cutting-edge solutions.
            </p>
            <p>
              As a member of TEDx Organization and ALX Arabia, I am committed to continuous learning and contributing to the tech community through innovative projects and knowledge sharing.
            </p>
            
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.number}{stat.suffix}
                  </motion.h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 