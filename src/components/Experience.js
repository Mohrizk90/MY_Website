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
      title: 'Software Engineer',
      company: 'Alamein International University',
      date: 'July 2023 - Present',
      achievements: [
        'Designed and developed a comprehensive course management system for university IT department using PHP, MySQL, and modern web technologies',
        'Built scalable serverless cloud-based solutions utilizing AWS services (S3, Lambda, API Gateway) with secure IAM roles and automated deployment',
        'Implemented backend code execution systems in Python for efficient cloud-based file management and processing'
      ]
    },
    {
      title: 'Embedded Systems Engineer',
      company: 'Promed for Manufacturing',
      date: 'April 2023 - Present',
      achievements: [
        'Developed a complete medical incubation device from scratch using C language on Atmega processor with integrated sensors and actuators',
        'Created comprehensive system simulations using Proteus for complete control and process automation validation',
        'Designed and implemented a washing machine control system using Arduino (C++) with sensors, actuators, LCD, and relay integration',
        'Conducted extensive testing and validation including edge cases like power failure recovery and system resilience'
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