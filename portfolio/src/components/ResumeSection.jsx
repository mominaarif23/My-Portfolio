import React from 'react';
import { motion } from 'framer-motion';
import { SparklesDoodle, StarDoodle, HeartDoodle, SmallFlowerDoodle } from './DoodleIcons';
import { FiDownload } from 'react-icons/fi';

const ResumeSection = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <motion.section
      id="resume-download"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="doodle-box"
      style={{
        textAlign: 'center',
        backgroundColor: 'var(--accent-color)',
        border: '4px solid var(--doodle-black)',
        padding: '3rem',
        marginBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="washi-tape" />
      
      {/* Decorative doodles */}
      <StarDoodle size={45} style={{ position: 'absolute', top: '10px', left: '20px' }} />
      <SparklesDoodle size={50} style={{ position: 'absolute', bottom: '10px', right: '20px' }} />
      <HeartDoodle size={35} fill="var(--white)" style={{ position: 'absolute', top: '20px', right: '30px' }} />
      <SmallFlowerDoodle size={40} style={{ position: 'absolute', bottom: '20px', left: '30px' }} />

      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-accent)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--doodle-black)' }}>
        Need a Paper Version?
      </h2>
      
      <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-accent)', marginBottom: '2rem', color: 'var(--doodle-black)', fontWeight: 'bold' }}>
        Grab my doodle-styled resume to keep or share!
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8rem',
          fontSize: '1.3rem',
          padding: '1rem 2rem',
          backgroundColor: 'var(--white)',
          border: '4px solid var(--doodle-black)',
          borderRadius: '15px',
          boxShadow: '6px 6px 0px var(--doodle-black)',
          cursor: 'pointer',
          fontFamily: 'var(--font-accent)',
          fontWeight: 'bold',
          color: 'var(--doodle-black)'
        }}
      >
        <FiDownload size={24} />
        Download Resume
      </motion.button>
    </motion.section>
  );
};

export default ResumeSection;
