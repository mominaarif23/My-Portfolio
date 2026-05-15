import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmallFlowerDoodle, TinySparkle, HeartDoodle, StarDoodle, MenuDoodle, CloseDoodle } from './DoodleIcons';
import './Navigation.css';

const NAV_ITEMS = [
  { name: 'About',          href: '#about'          },
  { name: 'Experience',     href: '#experience'      },
  { name: 'Skills',         href: '#skills'          },
  { name: 'Certifications', href: '#certifications'  },
  { name: 'Contact',        href: '#contact'         },
];

const Navigation = () => {
  const [theme, setTheme]       = useState(() => localStorage.getItem('theme') || 'pink');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'pink' ? 'mint' : 'pink');

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: '0.75rem',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 0.5rem',
      }}
    >
      <div style={{
        backgroundColor: 'var(--card-bg)',
        border: '3.5px solid var(--doodle-black)',
        borderRadius: '50px 18px 45px 18px / 18px 45px 18px 45px',
        padding: '0.55rem 1.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        boxShadow: '6px 6px 0px 0px var(--doodle-black)',
        width: '92%',
        maxWidth: '820px',
      }}>

        {/* Logo / brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginRight: 'auto' }}>
          <SmallFlowerDoodle size={28} color="var(--doodle-black)" />
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontWeight: 900,
            fontSize: '1.5rem',
            color: 'var(--accent-color)',
          }}>
            Momina
          </span>
        </div>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '1.6rem', listStyle: 'none', margin: 0 }} className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="nav-link" style={{ fontWeight: 900, color: 'var(--doodle-black)', fontSize: '1.3rem' }}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label="Toggle theme"
          style={{ flexShrink: 0, border: '3px solid var(--doodle-black)', backgroundColor: 'var(--card-bg)' }}
        >
          <div className="toggle-pill" style={{ border: '2.5px solid var(--doodle-black)' }}>
            {theme === 'pink' ? <HeartDoodle size={14} fill="var(--accent-color)" /> : <StarDoodle size={14} fill="var(--accent-color)" />}
          </div>
        </button>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Open menu"
        >
          {menuOpen ? <CloseDoodle size={28} color="var(--doodle-black)" /> : <MenuDoodle size={28} color="var(--doodle-black)" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1     }}
            exit={{ opacity: 0, y: -10,  scale: 0.95  }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 0.75rem)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '88%',
              backgroundColor: 'var(--card-bg)',
              border: '3.5px solid var(--doodle-black)',
              borderRadius: '15px 5px 15px 5px',
              boxShadow: '7px 7px 0px var(--doodle-black)',
              padding: '1.2rem 1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 999,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 900, color: 'var(--doodle-black)' }}
              >
                <TinySparkle size={20} color="var(--accent-color)" />
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
