import React from 'react';
import { motion } from 'framer-motion';
import { SmallFlowerDoodle, StarDoodle, HeartDoodle } from './DoodleIcons';

const Education = ({ education }) => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="doodle-box"
    >
      <div className="washi-tape" />

      {/* Corner doodles */}
      <StarDoodle
        size={45}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '-20px', left: '1.5rem', zIndex: 10 }}
      />

      <div className="section-doodle-row" style={{ marginBottom: '2rem' }}>
        <h2 className="squiggly" style={{ fontSize: '2.4rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
          Education
        </h2>
        <SmallFlowerDoodle size={30} color="var(--accent-color)" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
      }}>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="doodle-sub-card doodle-sub-card-hover"
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ position: 'absolute', top: '-10px', right: '15px', background: 'var(--card-bg)', borderRadius: '50%', padding: '2px' }}>
              <HeartDoodle size={20} color="var(--accent-color)" fill="var(--accent-color)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, fontFamily: 'var(--font-accent)', marginBottom: '0.5rem', color: 'var(--accent-color)', lineHeight: 1.2 }}>
              {edu.degree}
            </h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem', flexGrow: 1 }}>{edu.school}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2.5px dashed var(--doodle-black)', paddingTop: '0.8rem', fontFamily: 'var(--font-accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <span>{edu.period}</span>
              <span style={{ color: 'var(--accent-color)' }}>{edu.details}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
