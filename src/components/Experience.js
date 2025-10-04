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
      achievements: [
        'Built an AI-driven chatbot workflow in n8n integrating Google Gemini (PaLM API), Gmail, and Google Drive',
        'Automated product search, quotations, PDF sharing, and order creation with conversational context using memory buffers',
        'Applied API integration, workflow orchestration, and AI automation to streamline customer support and sales processes'
      ]
    },
    {
      title: 'Full-Stack ERP System Developer',
      company: 'Promed for Medical Manufacturing',
      date: '2025',
      location: 'Remote, Cairo, Egypt',
      achievements: [
        'Architected and developed a comprehensive ERP system for medical device manufacturing using FastAPI (Python), React 18 with TypeScript, and PostgreSQL',
        'Built modular backend API with SQLAlchemy ORM, JWT authentication, and RESTful endpoints supporting inventory, production planning, quality control, financial transactions, and document management',
        'Designed responsive React frontend with Material-UI, implementing BOM (Bill of Materials), work order tracking, quality inspection workflows, and integrated financial reporting with visualizations via Recharts',
        'Implemented automated deployment with Docker, Redis caching, Celery background tasks, and robust error handling, achieving scalable real-time architecture for concurrent users',
        'Developed quality control module with Device History Records (DHR), non-conformance tracking, and regulatory compliance features, plus integrated Google APIs for document management and automated reporting'
      ]
    },
    {
      title: 'Full-Stack Developer (Medical E-commerce Platform)',
      company: 'Promed for Medical Manufacturing',
      date: 'Nov 2023 - Mar 2024',
      location: 'Remote, Cairo, Egypt',
      achievements: [
        'Developed a full-stack e-commerce platform using React 17, Node.js, Express.js, and MongoDB, integrating Google Drive API for scalable cloud storage',
        'Built a responsive application with dynamic product catalog, admin dashboard (CRUD operations), and contact management system, achieving an 85/100 production readiness score',
        'Implemented secure authentication with JWT tokens, bcrypt password hashing, protected admin routes, and CORS configuration',
        'Designed and deployed RESTful APIs with 15+ endpoints for product management, authentication, file uploads, and contact handling via Mongoose ODM and MongoDB Atlas',
        'Deployed using Docker containerization and optimized pipelines on Render/Heroku/Vercel'
      ]
    },
    {
      title: 'Web, Software & Cloud Developer Intern',
      company: 'Alamein International University',
      date: 'Apr 2023 - Jun 2023',
      location: 'Onsite, Alamein, Egypt',
      achievements: [
        'Built a web-based program for course material management using PHP, MySQL, HTML, and BLOB files',
        'Developed a serverless cloud-based file upload solution using AWS (S3, Lambda in Python, API Gateway, IAM)'
      ]
    },
    {
      title: 'Embedded Systems Intern',
      company: 'Promed for Medical Manufacturing',
      date: 'Jul 2023 - Oct 2023',
      location: 'Hybrid, Cairo, Egypt',
      achievements: [
        'Designed and developed a medical washing machine control system using Arduino (C++), integrating sensors, actuators, LCD, and relays',
        'Implemented real-time feedback mechanisms and validated system reliability through edge case testing, including power failure recovery'
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
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
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