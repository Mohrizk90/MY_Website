import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTimes, FaEye } from 'react-icons/fa';
import './Certificates.css';

const Certificates = memo(() => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Your actual certificate data
  const certificates = [
    {
      id: 1,
      title: "Data Structures",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Data_Structures_Coursera.png`,
      category: "Programming"
    },
    {
      id: 2,
      title: "Applying Data Structures to Manipulate Cleansed Data",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Applying_Data_Structures_To_Manipulate_Cleansed_Data_Coursera.png`,
      category: "Programming"
    },
    {
      id: 3,
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Databases_And_Sql_For_Data_Science_With_Python_IBM.png`,
      category: "Data Science"
    },
    {
      id: 4,
      title: "Introduction to Databases",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Introduction_To_Databases_Coursera.png`,
      category: "Data Science"
    },
    {
      id: 5,
      title: "Relational Database Systems",
      issuer: "UNAM",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Relational_Database_Systems_UNAM.png`,
      category: "Data Science"
    },
    {
      id: 6,
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Neural_Networks_And_Deep_Learning_DeepLearning_AI.png`,
      category: "AI/ML"
    },
    {
      id: 7,
      title: "Generative Adversarial Networks",
      issuer: "DeepLearning.AI",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Generative_Adversarial_Networks_DeepLearning_AI.png`,
      category: "AI/ML"
    },
    {
      id: 8,
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "DeepLearning.AI",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Natural_Language_Processing_With_Classification_And_Vector_Spaces_DeepLearning_AI.png`,
      category: "AI/ML"
    },
    {
      id: 9,
      title: "Natural Language Processing with Sequence Models",
      issuer: "DeepLearning.AI",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Natural_Language_Processing_With_Sequence_Models_DeepLearning_AI.png`,
      category: "AI/ML"
    },
    {
      id: 10,
      title: "Introduction to Computer Vision",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Introduction_To_Computer_Vision_Coursera.png`,
      category: "AI/ML"
    },
    {
      id: 11,
      title: "Object Tracking and Motion Detection with Computer Vision",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Object_Tracking_And_Motion_Detection_With_Computer_Coursera.png`,
      category: "AI/ML"
    },
    {
      id: 12,
      title: "Intelligent Recommender Systems",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Intelligent_Recommender_Systems_Coursera.png`,
      category: "AI/ML"
    },
    {
      id: 13,
      title: "Practical Python for AI Coding 1",
      issuer: "KAIST",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Practical_Python_For_Ai_Coding_1_KAIST.png`,
      category: "Programming"
    },
    {
      id: 14,
      title: "Practical Python for AI Coding 2",
      issuer: "KAIST",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Practical_Python_For_Ai_Coding_2_KAIST.png`,
      category: "Programming"
    },
    {
      id: 15,
      title: "Programming for Everybody",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Programming_For_Everybody_Coursera.png`,
      category: "Programming"
    },
    {
      id: 16,
      title: "Using Efficient Sorting Algorithms in Java",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Using_Efficient_Sorting_Algorithms_In_Java_Coursera.png`,
      category: "Programming"
    },
    {
      id: 17,
      title: "Unix System Basics",
      issuer: "Coursera",
      date: "2024",
      image: `${process.env.PUBLIC_URL}/certificates/Unix_System_Basics_Coursera.png`,
      category: "Programming"
    }
  ];

  const categories = ['All', 'Programming', 'AI/ML', 'Cloud', 'Data Science'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertificates = certificates.filter(cert => 
    selectedCategory === 'All' || cert.category === selectedCategory
  );

  const displayedCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 6);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleImageLoad = (imageId) => {
    console.log(`Image loaded successfully: ${imageId}`);
  };

  const handleImageError = (imageId) => {
    console.log(`Image failed to load: ${imageId}`);
  };

  // Debug: Log the first certificate image path
  console.log('First certificate image path:', certificates[0]?.image);
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaCertificate className="section-icon" />
          Certificates
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional certifications and achievements in software development and AI
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="certificate-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {displayedCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="certificate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="certificate-image-container">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  loading="lazy"
                  onLoad={() => handleImageLoad(certificate.id)}
                  onError={() => handleImageError(certificate.id)}
                />
                <div className="certificate-placeholder" style={{ display: 'none' }}>
                  <FaCertificate />
                  <span>Certificate Image</span>
                </div>
                <div className="certificate-overlay">
                  <motion.button
                    className="view-btn"
                    onClick={() => openCertificate(certificate)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEye />
                  </motion.button>
                </div>
              </div>
              <div className="certificate-info">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
                <span className="certificate-date">{certificate.date}</span>
                <span className="certificate-category">{certificate.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCertificates.length > 6 && (
          <motion.div
            className="show-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show More (${filteredCertificates.length - 6} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Modal */}
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-image-container">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="modal-placeholder" style={{ display: 'none' }}>
                  <FaCertificate />
                  <span>Certificate Image Not Available</span>
                </div>
              </div>
              <div className="modal-info">
                <h3>{selectedCertificate.title}</h3>
                <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
                <p><strong>Date:</strong> {selectedCertificate.date}</p>
                <p><strong>Category:</strong> {selectedCertificate.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
});

Certificates.displayName = 'Certificates';

export default Certificates;
