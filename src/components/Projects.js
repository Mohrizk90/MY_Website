import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaSmile } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Quran Recitation Assistant using AI',
      status: 'A Grade',
      description: 'Built an AI-powered application with Whisper ASR, Python, RAG, and LLMs for real-time Quran recitation feedback. Integrated silence detection, Arabic TTS, and interactive UI (Streamlit → React).',
      technologies: ['Whisper ASR', 'Python', 'RAG', 'LLMs', 'Arabic TTS', 'Streamlit', 'React'],
      icon: FaBrain
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-icon">
                <project.icon />
              </div>
              <h3>{project.title}</h3>
              <p className="project-grade">Status: {project.status}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 