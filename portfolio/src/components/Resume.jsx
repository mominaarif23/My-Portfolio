import React from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { StarDoodle, HeartDoodle, TinySparkle, SmallFlowerDoodle, SparklesDoodle, DotDoodle } from './DoodleIcons';
import config from '../data/config.json';

const Resume = () => {
  const { personal, about, education, experience, skills, certifications, interests } = config;

  return (
    <div className="printable-resume" style={{
      backgroundColor: 'white',
      color: '#1a1a1a',
      padding: '50px',
      fontFamily: "'Lexend', sans-serif",
      width: '210mm',
      height: '297mm',
      margin: '0 auto',
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      overflow: 'hidden'
    }}>
      {/* Decorative Border */}
      <div style={{
        position: 'absolute',
        inset: '20px',
        border: '3px solid var(--doodle-black)',
        borderRadius: '15px 5px 20px 8px / 8px 18px 8px 15px',
        pointerEvents: 'none',
        zIndex: 10
      }} />

      {/* Header Section */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '40px', 
        borderBottom: '3px solid var(--accent-color)',
        paddingBottom: '30px',
        position: 'relative'
      }}>
        <div style={{ position: 'relative' }}>
          <img 
            src="/avatar.jpeg" 
            alt={personal.name} 
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '4px solid var(--doodle-black)',
              objectFit: 'cover'
            }} 
          />
          <SmallFlowerDoodle size={35} style={{ position: 'absolute', top: '-10px', right: '-10px' }} />
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ 
            fontSize: '42pt', 
            fontFamily: 'var(--font-accent)', 
            margin: '0 0 5px 0', 
            fontWeight: 700,
            color: 'var(--doodle-black)',
            lineHeight: 1
          }}>
            {personal.name}
          </h1>
          <p style={{ 
            fontSize: '18pt', 
            fontFamily: 'var(--font-accent)', 
            color: 'var(--accent-color)', 
            fontWeight: 'bold', 
            margin: '0 0 15px 0' 
          }}>
            {personal.tagline}
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '10px 20px',
            fontSize: '10pt',
            color: '#444'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FiMail size={14} color="var(--accent-color)" /> {personal.email}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FiPhone size={14} color="var(--accent-color)" /> {personal.phone}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FiMapPin size={14} color="var(--accent-color)" /> {personal.location}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FiGithub size={14} color="var(--accent-color)" /> {personal.github.replace('https://', '')}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', gridColumn: 'span 2' }}><FiLinkedin size={14} color="var(--accent-color)" /> {personal.linkedin.replace('https://', '')}</span>
          </div>
        </div>
        <SparklesDoodle size={40} style={{ position: 'absolute', top: 0, right: 0 }} />
      </header>

      {/* Main Content Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', flex: 1 }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Objective */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <HeartDoodle size={24} fill="var(--accent-color)" />
              <h2 style={{ fontSize: '20pt', fontFamily: 'var(--font-accent)', fontWeight: 700, margin: 0 }}>Career Objective</h2>
            </div>
            <p style={{ fontSize: '11.5pt', color: '#333', textAlign: 'justify', lineHeight: '1.6', fontWeight: 300 }}>
              {about.objective}
            </p>
          </section>

          {/* Experience */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <StarDoodle size={24} />
              <h2 style={{ fontSize: '20pt', fontFamily: 'var(--font-accent)', fontWeight: 700, margin: 0 }}>Experience</h2>
            </div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: '20px', paddingLeft: '20px', borderLeft: '3px solid var(--accent-color)', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '5px' }}>
                  <h3 style={{ fontSize: '14pt', fontWeight: 600, margin: 0 }}>{exp.role}</h3>
                  <span style={{ fontSize: '10pt', color: '#666', fontWeight: 400, backgroundColor: '#f5f5f5', padding: '2px 8px', borderRadius: '4px' }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '12pt', color: 'var(--accent-color)', fontWeight: 500, marginBottom: '8px' }}>{exp.company} | {exp.location}</div>
                <p style={{ fontSize: '11pt', color: '#444', margin: 0, fontWeight: 300, lineHeight: '1.5' }}>{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <TinySparkle size={24} />
              <h2 style={{ fontSize: '20pt', fontFamily: 'var(--font-accent)', fontWeight: 700, margin: 0 }}>Education</h2>
            </div>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                  <h3 style={{ fontSize: '13pt', fontWeight: 600, margin: 0 }}>{edu.degree}</h3>
                  <span style={{ fontSize: '10pt', color: '#666', fontWeight: 400 }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '11pt', color: '#444', fontWeight: 400 }}>{edu.school}</div>
                <div style={{ fontSize: '10pt', fontStyle: 'italic', color: '#888', fontWeight: 300 }}>{edu.details}</div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Skills */}
          <section style={{ 
            backgroundColor: 'rgba(255, 182, 193, 0.06)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '2px dashed var(--doodle-black)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <SmallFlowerDoodle size={18} />
              <h2 style={{ fontSize: '16pt', fontFamily: 'var(--font-accent)', fontWeight: 700, margin: 0 }}>My Skills</h2>
            </div>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ marginBottom: '12px' }}>
                <h4 style={{ fontSize: '9pt', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '2px' }}>
                  {category}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {items.map((skill, i) => (
                    <span key={i} style={{ 
                      backgroundColor: 'white', 
                      border: '1.5px solid var(--doodle-black)', 
                      padding: '3px 10px', 
                      borderRadius: '6px', 
                      fontSize: '9pt',
                      color: '#1a1a1a',
                      fontWeight: 500,
                      boxShadow: '2px 2px 0px rgba(0,0,0,0.08)',
                      maxWidth: '100%',
                      wordBreak: 'break-word'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <TinySparkle size={20} style={{ position: 'absolute', bottom: '8px', right: '8px', opacity: 0.2 }} />
          </section>

          {/* Interests */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <HeartDoodle size={16} fill="var(--accent-color)" />
              <h2 style={{ fontSize: '14pt', fontFamily: 'var(--font-accent)', fontWeight: 700, margin: 0 }}>Interests</h2>
            </div>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '4px',
              padding: '0px'
            }}>
              {interests.map((interest, i) => (
                <span key={i} style={{ 
                  fontSize: '8.5pt', 
                  fontFamily: 'var(--font-accent)',
                  backgroundColor: '#fff',
                  border: '1px solid var(--accent-color)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  color: '#444',
                  fontWeight: 600,
                  boxShadow: '1px 1px 0px rgba(0,0,0,0.02)'
                }}>
                  #{interest}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
      
      {/* Footer Details */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '20px',
        borderTop: '2px solid #f0f0f0',
        fontSize: '8pt',
        color: '#aaa',
        fontFamily: 'var(--font-accent)'
      }}>
        <span>Portfolio-Generated Resume</span>
        <span>{new Date().getFullYear()} • {personal.name}</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <StarDoodle size={15} />
          <HeartDoodle size={15} fill="#eee" />
        </div>
      </div>
    </div>
  );
};

export default Resume;




