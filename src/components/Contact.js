import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mohrizk90@gmail.com',
      link: 'mailto:mohrizk90@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Alamein, Egypt'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'mohamed-yasser-4203032b6',
      link: 'https://www.linkedin.com/in/mohamed-yasser-4203032b6'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'Mohrizk90',
      link: 'https://github.com/Mohrizk90'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mohamed-yasser-4203032b6',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/Mohrizk90',
      label: 'GitHub'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content" ref={ref}>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <contact.icon />
                <div>
                  <h3>{contact.title}</h3>
                  {contact.link ? (
                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                      {contact.value}
                    </a>
                  ) : (
                    <p>{contact.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 