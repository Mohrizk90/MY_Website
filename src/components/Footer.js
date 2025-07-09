import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          &copy; 2024 Mohamed Yasser. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 