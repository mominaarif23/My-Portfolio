import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeSection from './components/ResumeSection';
import Resume from './components/Resume';
import {
  FlowerDoodle,
  SmallFlowerDoodle,
  HeartDoodle,
  SparklesDoodle,
  TinySparkle,
  StarDoodle,
  DotDoodle,
  CloudDoodle,
  ArrowDoodle,
  WaveDoodle,
} from './components/DoodleIcons';
import config from './data/config.json';
import { motion } from 'framer-motion';

/* ─── Fixed background doodles spread across viewport ─────────────── */
const BG_DOODLES = [
  // Top area
  { comp: FlowerDoodle,      props: { size: 95, color: 'var(--accent-color)' },          style: { top: '5%',  left: '4%'  } },
  { comp: SparklesDoodle,    props: { size: 60 },                                     style: { top: '3%',  right: '6%' } },
  { comp: HeartDoodle,       props: { size: 52, color: 'var(--accent-color)', fill: 'rgba(101,216,164,0.15)' }, style: { top: '12%', left: '86%' } },
  { comp: TinySparkle,       props: { size: 32 },                                     style: { top: '9%',  left: '72%' } },
  { comp: SmallFlowerDoodle, props: { size: 42, color: 'var(--accent-color)' },           style: { top: '15%', left: '90%' } },
  { comp: WaveDoodle,        props: { width: 140, color: 'var(--accent-color)' }, style: { top: '2%',  left: '40%', opacity: 0.3 } },
  // Middle-upper
  { comp: DotDoodle,         props: { size: 20 },                                     style: { top: '22%', left: '3%'  } },
  { comp: HeartDoodle,       props: { size: 40, fill: 'rgba(101,216,164,0.2)' },      style: { top: '28%', right: '3%' } },
  { comp: CloudDoodle,       props: { size: 110, color: 'var(--accent-color)' },   style: { top: '32%', left: '2%'  } },
  { comp: TinySparkle,       props: { size: 26, color: 'var(--accent-color)' },           style: { top: '19%', right: '8%' } },
  { comp: SmallFlowerDoodle, props: { size: 48 },                                     style: { top: '36%', left: '93%' } },
  // Middle
  { comp: FlowerDoodle,      props: { size: 75 },                                     style: { top: '46%', left: '4%'  } },
  { comp: StarDoodle,        props: { size: 55 },                                     style: { top: '44%', right: '4%' } },
  { comp: HeartDoodle,       props: { size: 36, color: 'var(--accent-color)', fill: 'rgba(101,216,164,0.1)' }, style: { top: '52%', right: '9%' } },
  { comp: WaveDoodle,        props: { width: 120 },                                   style: { top: '58%', left: '88%', transform: 'rotate(90deg)' } },
  { comp: ArrowDoodle,       props: { size: 80 },                                     style: { top: '56%', left: '2%'  } },
  // Middle-lower
  { comp: TinySparkle,       props: { size: 34 },                                     style: { top: '62%', right: '3%' } },
  { comp: SmallFlowerDoodle, props: { size: 45, color: 'var(--accent-color)' },           style: { top: '66%', left: '4%'  } },
  { comp: CloudDoodle,       props: { size: 95 },                                     style: { top: '70%', right: '2%' } },
  { comp: HeartDoodle,       props: { size: 48, fill: 'rgba(101,216,164,0.15)' },      style: { top: '74%', left: '91%' } },
  { comp: SparklesDoodle,    props: { size: 52, color: 'var(--accent-color)' },           style: { top: '78%', left: '3%'  } },
  // Bottom area
  { comp: FlowerDoodle,      props: { size: 85, color: 'var(--accent-color)' },           style: { top: '86%', right: '4%' } },
  { comp: StarDoodle,        props: { size: 48 },                                     style: { top: '84%', left: '4%'  } },
  { comp: WaveDoodle,        props: { width: 160, color: 'var(--accent-color)' },         style: { top: '92%', left: '30%', opacity: 0.2 } },
  { comp: HeartDoodle,       props: { size: 34, color: 'var(--accent-color)', fill: 'rgba(101,216,164,0.2)' }, style: { top: '91%', right: '7%' } },
  { comp: TinySparkle,       props: { size: 30 },                                     style: { top: '95%', left: '10%' } },
];

function App() {
  return (
    <>
      {/* Fixed background doodles — they stay behind everything */}
      <div className="bg-doodles-layer" aria-hidden="true">
        {BG_DOODLES.map(({ comp: Comp, props, style }, i) => (
          <motion.div
            key={i}
            className="bg-doodle-wrap"
            style={style}
            animate={
              i % 3 === 0
                ? { y: [0, -14, 0] }
                : i % 3 === 1
                ? { rotate: [0, 360] }
                : { scale: [1, 1.15, 1] }
            }
            transition={
              i % 3 === 0
                ? { duration: 5 + (i % 4), repeat: Infinity, ease: 'easeInOut' }
                : i % 3 === 1
                ? { duration: 18 + (i % 6), repeat: Infinity, ease: 'linear' }
                : { duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <Comp {...props} />
          </motion.div>
        ))}
      </div>

      <Navigation />

      <motion.div
        className="doodle-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section>
          <Hero personal={config.personal} />
        </section>

        <section>
          <About about={config.about} />
        </section>

        <section>
          <Experience experience={config.experience} certifications={config.certifications} />
        </section>

        <section id="education">
          <Education education={config.education} />
        </section>

        <section>
          <Skills skills={config.skills} interests={config.interests} />
        </section>

        <section id="resume">
          <ResumeSection />
        </section>

        <section>
          <Contact personal={config.personal} />
        </section>

        <footer className="doodle-footer" style={{ borderTop: '4px solid var(--doodle-black)', marginTop: '4rem', paddingTop: '3rem', opacity: 1, fontWeight: 900, color: 'var(--doodle-black)' }}>
          <SmallFlowerDoodle size={32} color="var(--accent-color)" />
          <p style={{ fontSize: '1.4rem' }}>Owned and Made By {config.personal.name}</p>
          <SmallFlowerDoodle size={32} color="var(--accent-color)" />
        </footer>
      </motion.div>

      {/* Printable version only */}
      <Resume />
    </>
  );
}

export default App;
