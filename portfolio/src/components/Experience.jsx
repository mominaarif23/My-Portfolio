import React from 'react';
import { motion } from 'framer-motion';
import { TinySparkle, SmallFlowerDoodle, PinDoodle } from './DoodleIcons';
import './Experience.css';

const Experience = ({ experience, certifications }) => {
  return (
    <div className="journey-grid">
      {/* ── Experience ── */}
      <motion.section
        id="experience"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="doodle-box"
        style={{ margin: 0 }}
      >
        <div className="washi-tape" />
        <TinySparkle
          size={24}
          color="var(--doodle-black)"
          style={{ position: 'absolute', top: '-10px', right: '1.5rem' }}
        />

        <div className="section-doodle-row">
          <h2 className="squiggly" style={{ fontSize: '2.2rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
            Experience
          </h2>
          <TinySparkle size={20} color="var(--accent-color)" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="doodle-sub-card doodle-sub-card-hover"
              style={{ padding: '1.25rem' }}
            >
              <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontFamily: 'var(--font-accent)', fontWeight: '900' }}>
                {exp.role}
              </h3>
              <p style={{ fontWeight: '900', fontSize: '1.1rem', color: 'var(--doodle-black)' }}>{exp.company}</p>
              <p style={{ fontSize: '0.95rem', opacity: 0.75, marginBottom: '0.6rem', color: 'var(--doodle-black)', fontWeight: 'bold' }}>
                {exp.period} | {exp.location}
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--doodle-black)' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Certifications ── */}
      <motion.section
        id="certifications"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="doodle-box"
        style={{ margin: 0 }}
      >
        <div className="washi-tape" />
        <SmallFlowerDoodle
          size={30}
          color="var(--doodle-black)"
          style={{ position: 'absolute', top: '-14px', right: '1.5rem' }}
        />

        <div className="section-doodle-row">
          <h2 className="squiggly" style={{ fontSize: '2.2rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
            Certifications
          </h2>
          <SmallFlowerDoodle size={24} color="var(--accent-color)" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {certifications && certifications.length > 0 ? (
            certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link && cert.link !== '#' ? cert.link : undefined}
                target={cert.link && cert.link !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="doodle-sub-card-wrap"
                style={{ cursor: cert.link && cert.link !== '#' ? 'pointer' : 'default' }}
              >
                <div className="doodle-sub-card" style={{ padding: '1.25rem' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '15px', background: 'var(--card-bg)', borderRadius: '50%', padding: '2px' }}>
                    <PinDoodle size={20} color="var(--doodle-black)" />
                  </div>
                  <h3 style={{ color: 'var(--accent-color)', fontSize: '1.4rem', fontFamily: 'var(--font-accent)', fontWeight: '900', lineHeight: 1.2, marginBottom: '0.3rem' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontWeight: 'bold', fontSize: '1.05rem', color: 'var(--doodle-black)', marginBottom: '1rem', flexGrow: 1 }}>{cert.issuer}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed var(--doodle-black)', paddingTop: '0.6rem', fontFamily: 'var(--font-accent)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    <span style={{ color: 'var(--doodle-black)' }}>{cert.date}</span>
                    {cert.link && cert.link !== '#' && <span style={{ color: 'var(--accent-color)' }}>View ↗</span>}
                  </div>
                </div>
              </motion.a>
            ))
          ) : (
            <p style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem', fontFamily: 'var(--font-accent)', color: 'var(--doodle-black)', fontWeight: 'bold', opacity: 0.6 }}>
              No certificates yet
            </p>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
