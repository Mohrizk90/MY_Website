import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaBrain, 
  FaCogs, 
  FaChartLine 
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const coreTechnologies = [
    { name: 'Python', percentage: 95 },
    { name: 'Machine Learning', percentage: 90 },
    { name: 'Deep Learning', percentage: 85 },
    { name: 'Natural Language Processing', percentage: 88 },
    { name: 'Computer Vision', percentage: 82 },
    { name: 'Full-Stack Development', percentage: 87 }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      iconClass: 'programming',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'R']
    },
    {
      title: 'Frontend Development',
      icon: FaLaptopCode,
      iconClass: 'frontend',
      skills: ['React.js', 'React Router', 'Material-UI', 'CSS3', 'HTML5', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      iconClass: 'backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs', 'JWT Authentication', 'CORS']
    },
    {
      title: 'Databases & Storage',
      icon: FaDatabase,
      iconClass: 'database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'SQLAlchemy', 'Cloud Storage']
    },
    {
      title: 'AI & ML Frameworks',
      icon: FaBrain,
      iconClass: 'ai',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Whisper ASR']
    },
    {
      title: 'DevOps & Deployment',
      icon: FaCogs,
      iconClass: 'devops',
      skills: ['Docker', 'Git', 'CI/CD', 'AWS', 'Cloud Deployment', 'Redis', 'Celery']
    },
    {
      title: 'Data & Analytics',
      icon: FaChartLine,
      iconClass: 'data',
      skills: ['Data Visualization', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'Real-time Processing']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Technical Expertise</h2>
          <p>Comprehensive skills across full-stack development, AI/ML, and modern technologies</p>
        </motion.div>
        
        <div className="skills-grid" ref={ref}>
          <motion.div
            className="core-skills-section"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="core-skills-header">
              <h3>Core Competencies</h3>
              <p>My strongest technical areas with proficiency levels</p>
            </div>
            <div className="core-skills-grid">
              {coreTechnologies.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="core-skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="core-skill-name">{skill.name}</div>
                  <div className="core-skill-bar">
                    <motion.div
                      className="core-skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                  <div className="core-skill-percentage">{skill.percentage}%</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <div className="skill-card-header">
                <div className={`skill-icon ${category.iconClass}`}>
                  <category.icon />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 