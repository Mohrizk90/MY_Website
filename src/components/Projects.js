import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye, FaTimes, FaFileAlt, FaCertificate, FaTrophy } from 'react-icons/fa';
import { useScrollToSection } from '../hooks/useScrollOptimized';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollToSection = useScrollToSection();

  const projects = [
    {
      title: 'PROMED - Medical Equipment E-commerce Website',
      status: 'Deployed',
      description: 'A professional medical equipment e-commerce website with comprehensive admin panel for product management. Features include product catalog with detailed specifications, admin panel to manage products and gallery, contact form with email notifications, image gallery for equipment display, and fully responsive design optimized for medical equipment sales.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Render'],
      images: [
        {
          src: `${process.env.PUBLIC_URL}/projects/Promed_website.png`,
          alt: 'PROMED Medical Equipment Website',
          title: 'E-commerce Interface'
        }
      ],
      liveUrl: 'https://promedeg.onrender.com',
      githubUrl: '#'
    },
    {
      title: 'RATTEL - AI-Powered Quran Recitation Assistant',
      status: 'A Grade',
      description: 'Built a comprehensive AI application using Tarteel Quran Whisper model, FastAPI, and React for real-time Arabic recitation feedback and analysis. Integrated advanced speech recognition with Arabic TTS, voice activity detection, and intelligent feedback system using Gemini AI.',
      technologies: ['Tarteel Quran Whisper', 'FastAPI', 'React', 'Arabic TTS', 'Gemini AI', 'Voice Activity Detection', 'Speech Recognition'],
      images: [
        {
          src: `${process.env.PUBLIC_URL}/projects/RATTEL.png`,
          alt: 'RATTEL Main Interface',
          title: 'Main Interface'
        }
      ],
      liveUrl: '#',
      githubUrl: '#',
      hasConferenceCert: true
    },
    {
      title: 'UCF101 Video Action Recognition - CNN-RNN Deep Learning System',
      status: 'A Grade',
      description: 'Built a comprehensive video action recognition system using hybrid CNN-RNN architecture with ResNet-18 backbone and bidirectional LSTM, achieving 58.39% accuracy. Implemented advanced temporal attention mechanisms, progressive fine-tuning strategies, and mixed precision training.',
      technologies: ['PyTorch', 'ResNet-18', 'Bidirectional LSTM', 'Temporal Attention', 'Mixed Precision Training', 'Flask', 'OpenCV'],
      images: [
        {
          src: `${process.env.PUBLIC_URL}/projects/UCF.png`,
          alt: 'Video Action Recognition Interface',
          title: 'Classification Interface'
        }
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Smart Pharmacy Automation System - AI-Powered Inquiry Handler',
      status: 'Completed',
      description: 'Developed a smart automation system using n8n, Google Gemini AI, Gmail, and Google Drive to handle pharmacy product inquiries. The system auto-responds to users, analyzes messages via AI, sends PDFs and price quotes, and creates orders automatically. It maintains conversation context per user and integrates with external APIs (e.g., WhatsApp). Fully hands-free, scalable, and ideal for customer service, sales, or product ordering workflows.',
      technologies: ['n8n', 'JavaScript', 'API Integration', 'AI Agent Development', 'Google Gemini AI', 'Gmail API', 'Google Drive API'],
      images: [
        {
          src: `${process.env.PUBLIC_URL}/projects/Flow1.png`,
          alt: 'Smart Pharmacy Automation System Flow',
          title: 'Automation Workflow'
        }
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  // Debug: Log the image path
  console.log('Image path:', `${process.env.PUBLIC_URL}/projects/screen2.png`);
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };


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
        
        <div className="projects-container" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-content">
                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-status">{project.status}</span>
                  </div>

                  {project.images && project.images.length > 0 && (
                    <motion.div
                      className="project-gallery"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                      onClick={() => openImageModal(project.images[0])}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        loading="lazy"
                        onLoad={(e) => {
                          console.log('Image loaded successfully:', project.images[0].src);
                          e.target.nextSibling.style.display = 'none';
                        }}
                        onError={(e) => {
                          console.log('Image failed to load:', project.images[0].src);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="gallery-placeholder">
                        <FaEye />
                        <span>Loading Screenshot...</span>
                      </div>
                      <div className="gallery-overlay">
                        <FaEye />
                        <span>{project.images[0].title}</span>
                      </div>
                    </motion.div>
                  )}
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                    {(project.hasResearchPaper || project.hasConferenceCert) && (
                      <a 
                        href="#achievements" 
                        className="project-link project-link-achievement"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('#achievements', 80);
                        }}
                      >
                        <FaTrophy />
                        View Achievements
                      </a>
                    )}
                  </div>
                  {(project.hasResearchPaper || project.hasConferenceCert) && (
                    <div className="project-achievements-info">
                      {project.hasResearchPaper && (
                        <span className="achievement-badge">
                          <FaFileAlt />
                          Research Paper Published
                        </span>
                      )}
                      {project.hasConferenceCert && (
                        <span className="achievement-badge">
                          <FaCertificate />
                          Conference Participation
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeImageModal}>
                <FaTimes />
              </button>
              
              
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <h3>{selectedImage.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 