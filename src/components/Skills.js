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

  const programmingLanguages = [
    'Python', 'R', 'SQL', 'Java', 'C++', 'C'
  ];

  const webDevelopment = [
    'React.js', 'Node.js', 'Express.js', 'React Router', 'i18next', 'CSS3'
  ];

  const databasesAndAPIs = [
    'MongoDB', 'Mongoose', 'RESTful APIs', 'Google Drive API', 'Cloud Storage'
  ];

  const securityAndAuth = [
    'JWT', 'bcrypt', 'CORS configuration'
  ];

  const devopsAndTools = [
    'Docker', 'Git', 'Multer', 'JSON/CSV handling', 'Streamlit'
  ];

  const machineLearning = [
    'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras'
  ];

  const deepLearning = [
    'Neural Networks', 'CNNs', 'RNNs', 'TTS'
  ];

  const nlp = [
    'Whisper ASR', 'Arabic text comparison', 'RAG', 'LLMs'
  ];

  const computerVision = [
    'OpenCV', 'TensorFlow/Keras', 'PyTorch'
  ];

  const dataVisualization = [
    'Matplotlib', 'Seaborn'
  ];

  const audioProcessing = [
    'Silence detection', 'real-time transcription', 'Voice Activity Detection (VAD)'
  ];

  const otherSkills = [
    'Strong math & statistics', 'critical thinking', 'teamwork', 'leadership'
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
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              {programmingLanguages.map((tool, index) => (
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

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Web Development</h3>
            <div className="skill-tags">
              {webDevelopment.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>Machine Learning</h3>
            <div className="skill-tags">
              {machineLearning.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3>Deep Learning</h3>
            <div className="skill-tags">
              {deepLearning.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3>NLP & Computer Vision</h3>
            <div className="skill-tags">
              {[...nlp, ...computerVision].map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h3>DevOps & Tools</h3>
            <div className="skill-tags">
              {devopsAndTools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h3>Other Skills</h3>
            <div className="skill-tags">
              {otherSkills.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.8 + index * 0.05 }}
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