import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const technicalSkills = [
    { name: 'Python', percentage: 95 },
    { name: 'Machine Learning', percentage: 90 },
    { name: 'Deep Learning', percentage: 85 },
    { name: 'Natural Language Processing', percentage: 88 },
    { name: 'Computer Vision', percentage: 82 },
    { name: 'Embedded Systems', percentage: 80 }
  ];

  const programmingTools = [
    'Python', 'R', 'SQL', 'Java', 'C++', 'C',
    'TensorFlow', 'PyTorch', 'OpenCV', 'React.js',
    'Git', 'AWS', 'Scikit-learn', 'Keras'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="skills-grid" ref={ref}>
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Technical Skills</h3>
            <div className="skill-items">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Programming & Tools</h3>
            <div className="skill-tags">
              {programmingTools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 