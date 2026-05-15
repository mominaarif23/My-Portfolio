import React from 'react';
import { motion } from 'framer-motion';
import { SmallFlowerDoodle, TinySparkle, HeartDoodle, SparklesDoodle } from './DoodleIcons';
import './Skills.css';

const Skills = ({ skills, interests }) => {
  const cardColors = [
    'var(--skill-card-1)',
    'var(--skill-card-2)',
    'var(--skill-card-3)',
    'var(--skill-card-4)',
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="doodle-box"
    >
      <div className="washi-tape" />

      {/* Corner doodles */}
      <SparklesDoodle
        size={40}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '-16px', right: '2rem' }}
      />
      <SmallFlowerDoodle
        size={28}
        color="var(--doodle-black)"
        style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}
      />

      <div className="section-doodle-row">
        <h2 className="squiggly" style={{ fontSize: '2.4rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
          Skills
        </h2>
        <SparklesDoodle size={32} color="var(--accent-color)" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            style={{
              padding: '1.6rem',
              border: '4px solid var(--doodle-black)',
              borderRadius: '12px',
              backgroundColor: cardColors[idx % cardColors.length],
              position: 'relative',
              boxShadow: '7px 7px 0px var(--doodle-black)',
            }}
          >
            {/* Small flower in each skill card */}
            <SmallFlowerDoodle
              size={22}
              color="var(--doodle-black)"
              style={{ position: 'absolute', top: '-10px', right: '0.75rem' }}
            />
            <h3 style={{
              marginBottom: '1.2rem',
              color: 'var(--doodle-black)',
              fontSize: '1.7rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
            }}>
              {category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {items.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? -3 : 3 }}
                  className="skill-chip"
                  style={{ border: '3px solid var(--doodle-black)', boxShadow: '3px 3px 0px var(--doodle-black)', fontWeight: 'bold' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Things I Love row */}
      <div style={{ borderTop: '5px solid var(--doodle-black)', paddingTop: '2.5rem', textAlign: 'center' }}>
        <div className="section-doodle-row" style={{ justifyContent: 'center', position: 'relative' }}>
          <HeartDoodle size={28} fill="var(--accent-color)" color="var(--doodle-black)" />
          <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem', fontFamily: 'var(--font-accent)', fontWeight: 900 }}>
            Things I Love
          </h3>
          <HeartDoodle size={28} fill="var(--accent-color)" color="var(--doodle-black)" />
          <span className="scribble" style={{ top: '-1.5rem', right: '15%', transform: 'rotate(-5deg)', color: 'var(--doodle-black)', opacity: 0.9, fontWeight: 'bold', fontSize: '1.3rem' }}>
            Love what I do!
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          {interests.map((interest, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.15, color: 'var(--accent-color)' }}
              style={{
                fontSize: '1.4rem',
                fontWeight: '900',
                fontFamily: 'var(--font-accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--doodle-black)',
              }}
            >
              <TinySparkle size={20} color="var(--accent-color)" />
              {interest}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
