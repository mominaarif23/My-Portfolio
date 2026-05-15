import React from 'react';
import { motion } from 'framer-motion';
import { HeartDoodle, SmallFlowerDoodle, TinySparkle } from './DoodleIcons';

const About = ({ about }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="doodle-box"
    >
      {/* Washi tape corner */}
      <div className="washi-tape" />

      {/* Corner accent doodles */}
      <SmallFlowerDoodle
        size={34}
        color="var(--hot-pink)"
        style={{ position: 'absolute', top: '-14px', right: '2rem' }}
      />
      <HeartDoodle
        size={26}
        fill="rgba(255,105,180,0.25)"
        color="var(--hot-pink)"
        style={{ position: 'absolute', bottom: '1.2rem', right: '1.5rem' }}
      />

      {/* Section heading row */}
      <div className="section-doodle-row">
        <h2 className="squiggly" style={{ fontSize: '2.4rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
          About Me
        </h2>
        <HeartDoodle size={32} color="var(--hot-pink)" fill="rgba(255,105,180,0.2)" />
        <TinySparkle size={22} color="var(--hot-pink)" />
      </div>

      <h3 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: 'var(--accent-color)', fontFamily: 'var(--font-accent)', fontWeight: 'bold' }}>
        Momina Arif
      </h3>

      <p style={{ fontSize: '1.2rem', marginBottom: '1.8rem', lineHeight: '1.85', position: 'relative' }}>
        {about.bio}
        <span className="scribble" style={{ bottom: '-1.5rem', right: '1rem', transform: 'rotate(2deg)', color: 'var(--accent-color)', opacity: 1 }}>
          Keep growing!
        </span>
      </p>

      <div style={{
        border: '3px solid var(--doodle-black)',
        padding: '1.4rem 1.8rem',
        borderRadius: '12px 5px 10px 5px',
        backgroundColor: 'var(--accent-color)',
        boxShadow: '4px 4px 0px var(--doodle-black)',
        position: 'relative',
      }}>
        {/* Tiny flower in quote block */}
        <SmallFlowerDoodle
          size={24}
          color="var(--doodle-black)"
          style={{ position: 'absolute', top: '-12px', left: '1.5rem' }}
        />
        <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-accent)', fontSize: '1.25rem', color: 'var(--doodle-black)' }}>
          "{about.objective}"
        </p>
      </div>
    </motion.section>
  );
};

export default About;
