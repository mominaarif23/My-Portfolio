import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PinDoodle, HeartDoodle, TinySparkle, SmallFlowerDoodle } from './DoodleIcons';

const Hero = ({ personal }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="doodle-box"
      style={{
        textAlign: 'center',
        backgroundColor: 'var(--accent-color)',
        marginBottom: '2.5rem',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Washi tape decoration */}
      <div className="washi-tape" />

      {/* Corner sparkles */}
      <TinySparkle
        size={28}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '1rem', left: '1.2rem' }}
      />
      <SmallFlowerDoodle
        size={36}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '0.8rem', right: '1.2rem' }}
      />
      <HeartDoodle
        size={30}
        fill="var(--accent-color)"
        style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}
      />
      <TinySparkle
        size={24}
        style={{ position: 'absolute', bottom: '1.2rem', right: '1.5rem' }}
      />

      <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem', width: '180px', height: '180px' }}>
        {/* Loading State */}
        {!imgLoaded && !imgError && (
          <div style={{
            width: '180px', height: '180px', borderRadius: '50%',
            backgroundColor: 'var(--white)', border: '4px dashed var(--doodle-black)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
              <TinySparkle size={30} color="var(--doodle-black)" />
            </motion.div>
          </div>
        )}

        {/* Error/Fallback State */}
        {imgError && (
          <div style={{
            width: '180px', height: '180px', borderRadius: '50%',
            backgroundColor: 'var(--white)', border: '4px solid var(--doodle-black)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <HeartDoodle size={40} color="var(--doodle-black)" />
          </div>
        )}

        <img 
          src="/avatar.jpeg" 
          alt="Momina" 
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid var(--doodle-black)',
            backgroundColor: 'var(--white)',
            display: imgLoaded && !imgError ? 'block' : 'none'
          }} 
        />
        {/* Doodle decorations for the avatar */}
        <SmallFlowerDoodle 
          size={32} 
          color="var(--doodle-black)" 
          style={{ position: 'absolute', top: '-10px', right: '10px' }} 
        />
        <TinySparkle 
          size={24} 
          color="var(--doodle-black)" 
          style={{ position: 'absolute', bottom: '10px', left: '-10px' }} 
        />
      </div>

      <motion.h1
        style={{ fontSize: '4rem', marginBottom: '0.4rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        Hi, I'm <span className="squiggly">{personal.name.split(' ')[0]}</span>!
      </motion.h1>

      <h2 style={{ fontSize: '1.7rem', marginBottom: '1.5rem', fontWeight: 'normal', fontFamily: 'var(--font-accent)' }}>
        {personal.tagline}
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', fontSize: '1.15rem', marginBottom: '2rem' }}>
        <PinDoodle size={20} color="var(--hot-pink)" />
        <span>{personal.location}</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
      >
        Let's Doodle!
      </motion.button>
    </motion.section>
  );
};

export default Hero;
