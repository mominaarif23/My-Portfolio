import React from 'react';
import { motion } from 'framer-motion';
import { SmallFlowerDoodle, StarDoodle, PinDoodle } from './DoodleIcons';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="doodle-box cert-section"
    >
      <div className="washi-tape cert-tape" />

      {/* Corner doodles */}
      <StarDoodle
        size={45}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '-20px', left: '1.5rem', zIndex: 10 }}
      />

      <div className="section-doodle-row cert-header-row">
        <h2 className="squiggly cert-title">
          Certifications
        </h2>
        <SmallFlowerDoodle size={30} color="var(--accent-color)" />
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card-link"
            whileHover={{ scale: 1.02 }}
          >
            <div className="cert-sub-card">
              <div className="cert-pin">
                <PinDoodle size={20} color="var(--doodle-black)" />
              </div>
              <h3 className="cert-name">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-footer">
                <span className="cert-date">{cert.date}</span>
                <span className="cert-view">View ↗</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
