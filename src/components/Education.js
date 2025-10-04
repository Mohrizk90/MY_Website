import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Debug: Log the logo path
  console.log('University logo path:', `${process.env.PUBLIC_URL}/logos/latest_AIU_logo.png`);

  const education = [
    {
      type: 'Bachelor of Computer Science',
      institution: 'Alamein International University',
      date: '2020 - 2025',
      field: 'AI Science',
      icon: FaGraduationCap,
      logo: `${process.env.PUBLIC_URL}/logos/latest_AIU_logo.png`
    },
    {
      type: 'Embedded Systems Certification',
      institution: 'Information Technology Institute',
      date: '2024',
      field: 'Alexandria, Egypt',
      icon: FaCertificate,
      logo: `${process.env.PUBLIC_URL}/logos/ITI.png`
    },
    {
      type: 'Advanced Java Socket Programming',
      institution: 'Information Technology Institute',
      date: '2024',
      field: 'Alexandria, Egypt',
      icon: FaCertificate,
      logo: `${process.env.PUBLIC_URL}/logos/ITI.png`
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="education-grid" ref={ref}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {edu.logo ? (
                <div className="education-logo">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`}
                    onLoad={() => console.log('University logo loaded successfully')}
                    onError={(e) => {
                      console.log('University logo failed to load:', edu.logo);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div className="education-header">
                  <div className="education-icon">
                    <edu.icon />
                  </div>
                </div>
              )}
              <div className="education-content">
                <h3>{edu.type}</h3>
                <h4>{edu.institution}</h4>
                <p className="education-date">{edu.date}</p>
                <p>{edu.field}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 