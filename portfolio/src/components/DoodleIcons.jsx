import React from 'react';

// ---- Scattered Background Doodles (fixed position, decorative) ----
// Viewboxes expanded to prevent clipping with thick strokes

export const FlowerDoodle = ({ style, size = 80, color = 'var(--doodle-black)', fillColor = 'none' }) => (
  <svg width={size} height={size} viewBox="-5 -5 90 90" style={style} className="bg-doodle" fill="none">
    <g transform="translate(40 40)">
      {[0, 72, 144, 216, 288].map((rot) => (
        <path
          key={rot}
          d="M0 0 C-12 -22 -18 -28 -8 -38 C-4 -42 4 -42 8 -38 C18 -28 12 -22 0 0"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          fill={fillColor}
          transform={`rotate(${rot})`}
        />
      ))}
    </g>
    <circle cx="40" cy="40" r="5" fill="var(--accent-color)" stroke={color} strokeWidth="4" />
  </svg>
);

export const SmallFlowerDoodle = ({ style, size = 40, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 50 50" style={style} className="bg-doodle" fill="none">
    <g transform="translate(20 20) scale(0.6)">
      {[0, 72, 144, 216, 288].map((rot) => (
        <path
          key={rot}
          d="M0 0 C-10 -20 -15 -25 -5 -35 C-2 -38 2 -38 5 -35 C15 -25 10 -20 0 0"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${rot})`}
        />
      ))}
    </g>
    <circle cx="20" cy="20" r="4" fill="var(--accent-color)" stroke={color} strokeWidth="4" />
  </svg>
);

export const HeartDoodle = ({ size = 40, color = 'var(--doodle-black)', fill = 'none', style }) => (
  <svg width={size} height={size} viewBox="-5 -5 50 50" style={style} className="bg-doodle" fill="none">
    <path
      d="M20 34 C18 32 5 24 5 14 C5 8 10 5 15 7 C18 8 19 11 20 13 C21 11 22 8 25 7 C30 5 35 8 35 14 C35 24 22 32 20 34"
      fill={fill === 'none' ? 'none' : 'var(--accent-color)'}
      fillOpacity={fill === 'none' ? 1 : 0.3}
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparklesDoodle = ({ style, size = 50, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 60 60" style={style} className="bg-doodle" fill="none">
    <path d="M25 5 Q26 22 45 25 Q26 28 25 45 Q24 28 5 25 Q24 22 25 5" stroke={color} strokeWidth="4" strokeLinejoin="round" fill="rgba(101, 216, 164, 0.2)" />
    <circle cx="10" cy="10" r="2.5" fill="var(--accent-color)" stroke={color} strokeWidth="3" />
    <circle cx="40" cy="12" r="2" fill="var(--accent-color)" stroke={color} strokeWidth="3" />
    <circle cx="12" cy="40" r="1.8" fill="var(--accent-color)" stroke={color} strokeWidth="3" />
    <circle cx="38" cy="38" r="2.5" fill="var(--accent-color)" stroke={color} strokeWidth="3" />
  </svg>
);

export const TinySparkle = ({ style, size = 24, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 34 34" style={style} className="bg-doodle" fill="none">
    <path d="M12 2 Q13 11 21 12 Q13 13 12 22 Q11 13 3 12 Q11 11 12 2" stroke={color} strokeWidth="4" strokeLinejoin="round" fill="rgba(101, 216, 164, 0.2)" />
  </svg>
);

export const StarDoodle = ({ style, size = 50, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 60 60" style={style} className="bg-doodle" fill="none">
    <path d="M25 6 L31 19 L44 21 L35 31 L37 44 L25 38 L13 44 L15 31 L6 21 L19 19 Z" fill="rgba(101, 216, 164, 0.2)" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DotDoodle = ({ style, size = 16, color = 'var(--accent-color)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 26 26" style={style} className="bg-doodle" fill="none">
    <path d="M8 2 Q14 2 14 8 Q14 14 8 14 Q2 14 2 8 Q2 2 8 2" stroke={'var(--doodle-black)'} strokeWidth="4" fill="var(--accent-color)" fillOpacity="0.4" />
  </svg>
);

export const WaveDoodle = ({ style, width = 120, color = 'var(--accent-color)' }) => (
  <svg width={width} height={20} viewBox={`-5 -5 ${width + 10} 30`} style={style} className="bg-doodle" fill="none">
    <path d={`M2 10 Q${width / 4} 2 ${width / 2} 10 T${width - 2} 10`}
      fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const CloudDoodle = ({ style, size = 90, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size * 0.6} viewBox="-5 -5 100 65" style={style} className="bg-doodle" fill="none">
    <path d="M15 45 Q8 45 8 37 Q8 24 22 24 Q26 10 45 10 Q64 10 68 24 Q82 24 82 37 Q82 45 75 45 Z"
      fill="rgba(101, 216, 164, 0.15)" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const ArrowDoodle = ({ style, size = 80, color = 'var(--accent-color)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 90 90" style={style} className="bg-doodle" fill="none">
    <path d="M12 55 Q30 20 65 25" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <path d="M52 18 L65 25 L55 38" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ---- Inline Doodles (used inside section components) ----

export const PinDoodle = ({ size = 24, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 34 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21 C12 21 4 15 4 10 A8 8 0 1 1 20 10 C20 15 12 21 12 21 Z" fill="var(--accent-color)" fillOpacity="0.2"></path>
    <path d="M12 13 A3 3 0 1 0 12 7 A3 3 0 1 0 12 13 Z" fill="var(--accent-color)"></path>
  </svg>
);

// ---- Navigation Icons (Replacing Emojis) ----

export const SunDoodle = ({ size = 20, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 34 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" fill="var(--accent-color)" stroke={color} />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

export const MoonDoodle = ({ size = 20, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 34 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--accent-color)" />
  </svg>
);

export const MenuDoodle = ({ size = 24, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 34 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round">
    <path d="M4 7 Q12 6 20 7" />
    <path d="M4 12 Q12 13 20 12" />
    <path d="M4 17 Q12 16 20 17" />
  </svg>
);

export const CloseDoodle = ({ size = 24, color = 'var(--doodle-black)' }) => (
  <svg width={size} height={size} viewBox="-5 -5 34 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round">
    <path d="M6 6 Q12 12 18 18" />
    <path d="M18 6 Q12 12 6 18" />
  </svg>
);