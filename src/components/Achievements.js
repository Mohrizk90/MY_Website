import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaTimes, FaEye, FaFileAlt, FaCertificate } from 'react-icons/fa';
import './Achievements.css';

const Achievements = memo(() => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const achievements = [
    {
      id: 1,
      title: 'Conference Participation Certificate - RATTEL',
      type: 'Conference Certificate',
      description: 'Certificate of participation in conference for RATTEL project presentation',
      date: '2024',
      image: `${process.env.PUBLIC_URL}/achievements/RATTEL_Conference_Cert.png`,
      category: 'Conference'
    }
  ];

  const categories = ['All', 'Conference'];

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const openAchievement = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeAchievement = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <FaTrophy className="section-icon" />
            Achievements
          </h2>
          <p className="section-subtitle">
            Conference participations and academic accomplishments
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="achievement-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-image-container">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="achievement-placeholder" style={{ display: 'none' }}>
                  {achievement.category === 'Research' ? <FaFileAlt /> : <FaCertificate />}
                  <span>Achievement Image</span>
                </div>
                <div className="achievement-overlay">
                  <motion.button
                    className="view-btn"
                    onClick={() => openAchievement(achievement)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEye />
                  </motion.button>
                </div>
              </div>
              <div className="achievement-info">
                <div className="achievement-type-badge">
                  {achievement.category === 'Research' ? <FaFileAlt /> : <FaCertificate />}
                  <span>{achievement.type}</span>
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <span className="achievement-date">{achievement.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Modal */}
        {selectedAchievement && (
          <motion.div
            className="achievement-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAchievement}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeAchievement}>
                <FaTimes />
              </button>
              <div className="modal-image-container">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="achievement-placeholder" style={{ display: 'none' }}>
                  {selectedAchievement.category === 'Research' ? <FaFileAlt /> : <FaCertificate />}
                  <span>Image not available</span>
                </div>
              </div>
              <div className="modal-info">
                <div className="achievement-type-badge">
                  {selectedAchievement.category === 'Research' ? <FaFileAlt /> : <FaCertificate />}
                  <span>{selectedAchievement.type}</span>
                </div>
                <h3>{selectedAchievement.title}</h3>
                <p>{selectedAchievement.description}</p>
                <span className="achievement-date">{selectedAchievement.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
});

Achievements.displayName = 'Achievements';

export default Achievements;

