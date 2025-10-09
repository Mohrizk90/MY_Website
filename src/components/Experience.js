import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'AI Automation Intern',
      company: 'AI Superheroes',
      date: 'Sep 2025 - Present',
      location: 'Remote',
      logo: `${process.env.PUBLIC_URL}/logos/ai-superheroes.png`,
      achievements: [
        'Built an AI-driven chatbot workflow in n8n integrating Google Gemini (PaLM API), Gmail, and Google Drive',
        'Automated product search, quotations, PDF sharing, and order creation with conversational context using memory buffers',
        'Applied API integration, workflow orchestration, and AI automation to streamline customer support and sales processes'
      ]
    },
    {
      title: 'Full-Stack Developer (Medical E-commerce Platform)',
      company: 'Promed for Medical Manufacturing',
      date: 'Nov 2023 - Mar 2024',
      location: 'Remote, Cairo, Egypt',
      logo: `${process.env.PUBLIC_URL}/logos/promed.png`,
      achievements: [
        'Built a production-ready full-stack e-commerce platform using React 17, Node.js, Express.js, MongoDB, integrating Cloudinary for cloud storage and deploying via Docker on Render with 85/100 production readiness score',
        'Implemented secure JWT authentication, comprehensive admin dashboard with CRUD operations, and 26+ RESTful API endpoints, featuring multi-language support (EN/AR), responsive design, and professional medical UI/UX'
      ]
    },
    {
      title: 'Embedded Systems Intern',
      company: 'Promed for Medical Manufacturing',
      date: 'Jul 2023 - Oct 2023',
      location: 'Hybrid, Cairo, Egypt',
      logo: `${process.env.PUBLIC_URL}/logos/promed.png`,
      achievements: [
        'Designed and developed a medical washing machine control system using Arduino (C++), integrating sensors, actuators, LCD, and relays',
        'Implemented real-time feedback mechanisms and validated system reliability through edge case testing, including power failure recovery'
      ]
    },
    {
      title: 'Web, Software & Cloud Developer Intern',
      company: 'Alamein International University',
      date: 'Apr 2023 - Jun 2023',
      location: 'Onsite, Alamein, Egypt',
      logo: `${process.env.PUBLIC_URL}/logos/latest_AIU_logo.png`,
      achievements: [
        'Built a web-based program for course material management using PHP, MySQL, HTML, and BLOB files',
        'Developed a serverless cloud-based file upload solution using AWS (S3, Lambda in Python, API Gateway, IAM)'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="timeline" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-header">
                  <div className="company-logo">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="logo-placeholder" style={{ display: 'none' }}>
                      <span>{exp.company.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="timeline-title-info">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>
                <p className="timeline-date">{exp.date}</p>
                <p className="timeline-location">{exp.location}</p>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 