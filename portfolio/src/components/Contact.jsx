import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { PinDoodle, HeartDoodle, SmallFlowerDoodle, TinySparkle, SparklesDoodle } from './DoodleIcons';

const contactLinks = [
  {
    href: (p) => `mailto:${p.email}`,
    icon: FiMail,
    label: 'Write Me',
    bg: 'var(--accent-color)',
    rotate: -5,
    doodle: HeartDoodle,
    doodleProps: { size: 18, fill: 'var(--accent-color)', color: 'var(--doodle-black)' },
  },
  {
    href: (p) => p.github,
    icon: FiGithub,
    label: 'GitHub',
    bg: 'var(--white)',
    rotate: 5,
    doodle: TinySparkle,
    doodleProps: { size: 18, color: 'var(--doodle-black)' },
    external: true,
  },
  {
    href: (p) => p.linkedin,
    icon: FiLinkedin,
    label: 'LinkedIn',
    bg: 'rgba(101, 216, 164, 0.2)',
    rotate: -5,
    doodle: SmallFlowerDoodle,
    doodleProps: { size: 20, color: 'var(--doodle-black)' },
    external: true,
  },
];

const Contact = ({ personal }) => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="doodle-box"
      style={{ textAlign: 'center', backgroundColor: 'var(--white)', border: '4px solid var(--doodle-black)' }}
    >
      <div className="washi-tape" />

      {/* Corner doodles */}
      <SmallFlowerDoodle
        size={38}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '-16px', left: '2rem' }}
      />
      <SparklesDoodle
        size={40}
        color="var(--doodle-black)"
        style={{ position: 'absolute', top: '-14px', right: '2rem' }}
      />
      <HeartDoodle
        size={28}
        fill="var(--accent-color)"
        color="var(--doodle-black)"
        style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem' }}
      />
      <TinySparkle
        size={24}
        color="var(--doodle-black)"
        style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}
      />

      <div className="section-doodle-row" style={{ justifyContent: 'center' }}>
        <HeartDoodle size={30} fill="var(--accent-color)" color="var(--doodle-black)" />
        <h2 className="squiggly" style={{ fontSize: '2.8rem', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
          Let's Be Friends!
        </h2>
        <HeartDoodle size={30} fill="var(--accent-color)" color="var(--doodle-black)" />
      </div>

      <p style={{ marginBottom: '2.5rem', opacity: 0.8, fontFamily: 'var(--font-accent)', fontSize: '1.3rem', color: 'var(--doodle-black)', fontWeight: 'bold' }}>
        Say hi, collab, or just send doodles
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '3rem' }}>
        {contactLinks.map(({ href, icon: Icon, label, bg, rotate, doodle: Doodle, doodleProps, external }) => (
          <a
            key={label}
            href={href(personal)}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <motion.div
              whileHover={{ y: -10, rotate }}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}
            >
              <div style={{
                width: '82px',
                height: '82px',
                border: '3.5px solid var(--doodle-black)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bg,
                position: 'relative',
                boxShadow: '6px 6px 0px var(--doodle-black)',
              }}>
                <Icon size={38} />
                {/* Tiny doodle badge on each icon circle */}
                <div style={{ position: 'absolute', top: '-8px', right: '-6px' }}>
                  <Doodle {...doodleProps} />
                </div>
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'var(--font-accent)', color: 'var(--doodle-black)' }}>{label}</p>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Phone / location pill */}
      <a 
        href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Momina! I saw your portfolio and would like to connect.")}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            border: '3.5px solid var(--doodle-black)',
            padding: '0.9rem 1.8rem',
            borderRadius: '50px',
            backgroundColor: 'var(--accent-color)',
            boxShadow: '5px 5px 0px var(--doodle-black)',
            cursor: 'pointer'
          }}
        >
          <PinDoodle size={22} color="var(--doodle-black)" />
          <p style={{ fontSize: '1.3rem', fontFamily: 'var(--font-accent)', fontWeight: 'bold', color: 'var(--doodle-black)' }}>{personal.phone}</p>
        </motion.div>
      </a>
    </motion.section>
  );
};

export default Contact;
