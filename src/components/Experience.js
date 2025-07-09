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
      title: 'Web, Software, and Cloud Developer Intern',
      company: 'Alamein International University',
      date: 'July 2023 - Present',
      achievements: [
        'Designed a program to handle courses material and data on a simple website for university IT department using PHP native, MySQL, HTML, and BLOB files',
        'Built a serverless cloud-based solution for file uploads utilizing AWS services (S3, Lambda, API Gateway) with IAM roles for secure file handling',
        'Developed backend code execution in Python for efficient cloud-based file management'
      ]
    },
    {
      title: 'Embedded Systems Intern',
      company: 'Promed for Manufacturing',
      date: 'April 2023 - Present',
      achievements: [
        'Developed a medical incubation device from scratch using C language on Atmega processor, integrating sensors and actuators',
        'Simulated the system using Proteus for complete control and process automation',
        'Designed and developed a washing machine control system using Arduino (C++) with sensors, actuators, LCD, and relays',
        'Conducted comprehensive testing including edge cases like power failure recovery'
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