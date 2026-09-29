import * as React from 'react';
import { motion } from 'framer-motion';

interface ConstructionVectorProps {
  className?: string;
  moduleColor?: string;
}

export const ConstructionVector: React.FC<ConstructionVectorProps> = ({
  className = 'w-72 h-44',
  moduleColor = '#3B82F6',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
        aria-label="Ilustração de canteiro de obras em construção"
        role="img"
      >
        <defs>
          {/* Subtle sun glow */}
          <radialGradient id="sunBackdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>

          {/* Block crystal gradient */}
          <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={moduleColor} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="cubeFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={moduleColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="cubeSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#172554" stopOpacity="0.95" />
          </linearGradient>

          {/* Crane metal gradient */}
          <linearGradient id="craneMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Ambient Warm Sun Glow */}
        <circle cx="160" cy="100" r="90" fill="url(#sunBackdrop)" />

        {/* Soft Background Clouds */}
        <motion.g
          animate={{ x: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          opacity={0.35}
        >
          <path
            d="M50 70 C50 62 58 56 66 56 C71 48 83 48 89 54 C95 52 102 56 102 62 C107 63 110 67 110 72 C110 77 106 80 100 80 L56 80 C50 80 50 75 50 70 Z"
            fill="currentColor"
            className="text-muted-foreground/30"
          />
        </motion.g>

        <motion.g
          animate={{ x: [8, -8, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          opacity={0.3}
        >
          <path
            d="M210 50 C210 44 216 40 222 40 C226 34 236 34 240 38 C245 37 251 40 251 45 C255 46 258 49 258 53 C258 57 254 60 249 60 L215 60 C210 60 210 55 210 50 Z"
            fill="currentColor"
            className="text-muted-foreground/30"
          />
        </motion.g>

        {/* Blueprint Construction Grid Lines on Floor */}
        <g stroke="currentColor" className="text-border/60" strokeWidth="1" strokeDasharray="3 3">
          <line x1="20" y1="175" x2="300" y2="175" />
          <line x1="50" y1="160" x2="270" y2="160" opacity="0.6" />
          <line x1="80" y1="145" x2="240" y2="145" opacity="0.3" />
        </g>

        {/* Floor Construction Platform */}
        <rect
          x="35"
          y="173"
          width="250"
          height="7"
          rx="3.5"
          fill="currentColor"
          className="text-muted/80"
        />
        <rect
          x="40"
          y="175"
          width="240"
          height="3"
          rx="1.5"
          fill="currentColor"
          className="text-primary/20"
        />

        {/* Left Crane Tower Base */}
        <g>
          {/* Concrete Footing */}
          <rect
            x="70"
            y="160"
            width="34"
            height="14"
            rx="2"
            fill="currentColor"
            className="text-muted-foreground/40"
          />
          <rect
            x="74"
            y="162"
            width="26"
            height="10"
            rx="1"
            fill="currentColor"
            className="text-muted-foreground/20"
          />

          {/* Vertical Crane Mast (Trellis) */}
          <rect x="80" y="35" width="4" height="126" fill="url(#craneMetal)" rx="1" />
          <rect x="90" y="35" width="4" height="126" fill="url(#craneMetal)" rx="1" />

          {/* Mast Cross Braces (X patterns) */}
          {[42, 60, 78, 96, 114, 132, 150].map((y, i) => (
            <g key={i} stroke="url(#craneMetal)" strokeWidth="1.5" strokeLinecap="round">
              <line x1="83" y1={y} x2="91" y2={y + 14} />
              <line x1="91" y1={y} x2="83" y2={y + 14} />
              <line x1="83" y1={y} x2="91" y2={y} />
            </g>
          ))}

          {/* Rotating Motor Cog at the base */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '87px 150px' }}
          >
            <circle cx="87" cy="150" r="7" fill="#F59E0B" opacity={0.9} />
            <circle cx="87" cy="150" r="3" fill="#FFF" />
            <path
              d="M87 141 L87 159 M78 150 L96 150 M81 144 L93 156 M81 156 L93 144"
              stroke="#B45309"
              strokeWidth="2"
            />
          </motion.g>
        </g>

        {/* Top Crane Mast Apex & Blinking Warning Light */}
        <polygon points="87,20 80,35 94,35" fill="url(#craneMetal)" />
        <motion.circle
          cx="87"
          cy="18"
          r="3"
          fill="#EF4444"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Horizontal Crane Jib (Boom) */}
        <g>
          {/* Main Top Horizontal Arm */}
          <rect x="45" y="32" width="185" height="4" fill="url(#craneMetal)" rx="1" />
          <rect x="45" y="42" width="185" height="3" fill="url(#craneMetal)" rx="1" />

          {/* Jib Internal Bracing */}
          {[50, 70, 95, 120, 145, 170, 195, 215].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1="34"
              x2={x + 15}
              y2="43"
              stroke="url(#craneMetal)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}

          {/* Counterweight Block on the Left */}
          <rect x="46" y="27" width="18" height="20" rx="3" fill="#475569" stroke="#334155" strokeWidth="1" />
          <rect x="49" y="31" width="12" height="12" rx="1.5" fill="#64748B" />
          {/* Tension Cable from Apex to ends */}
          <line x1="87" y1="20" x2="48" y2="32" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1" />
          <line x1="87" y1="20" x2="225" y2="34" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1" />
        </g>

        {/* Crane Trolley & Cable Assembly with Motion */}
        <motion.g
          animate={{ x: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Trolley Cart on Jib */}
          <rect x="168" y="30" width="16" height="7" rx="2" fill="#1E293B" />
          <circle cx="172" cy="31" r="2" fill="#94A3B8" />
          <circle cx="180" cy="31" r="2" fill="#94A3B8" />

          {/* Hoist Cable Going Down with Gentle Swing */}
          <motion.line
            x1="176"
            y1="37"
            x2="176"
            y2="78"
            stroke="currentColor"
            className="text-foreground/70"
            strokeWidth="1.2"
            strokeDasharray="2 1"
          />

          {/* Hook Pulley Block */}
          <motion.g
            animate={{
              y: [-5, 5, -5],
              rotate: [-1.2, 1.2, -1.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '176px 78px' }}
          >
            {/* Pulley and Hook */}
            <circle cx="176" cy="80" r="4.5" fill="#475569" />
            <circle cx="176" cy="80" r="2" fill="#CBD5E1" />
            <path
              d="M176 84.5 C176 89 173 90 171 90 C169 90 168 88 169 86"
              stroke="#334155"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Slings Attaching to Feature Cube */}
            <line x1="172" y1="89" x2="162" y2="98" stroke="currentColor" className="text-muted-foreground" strokeWidth="1" />
            <line x1="180" y1="89" x2="190" y2="98" stroke="currentColor" className="text-muted-foreground" strokeWidth="1" />

            {/* THE FEATURE CRYSTAL CUBE (Being Hoisted) */}
            <g transform="translate(176, 116)">
              {/* Isometric Cube (Center at 0,0) */}
              {/* Top Face */}
              <polygon points="0,-16 20,-6 0,4 -20,-6" fill="url(#cubeTop)" stroke="#60A5FA" strokeWidth="0.8" />
              {/* Left Front Face */}
              <polygon points="-20,-6 0,4 0,26 -20,16" fill="url(#cubeFront)" stroke="#3B82F6" strokeWidth="0.8" />
              {/* Right Front Face */}
              <polygon points="0,4 20,-6 20,16 0,26" fill="url(#cubeSide)" stroke="#2563EB" strokeWidth="0.8" />

              {/* Sparkle Highlights on Crystal Cube */}
              <circle cx="0" cy="4" r="2" fill="#FFFFFF" opacity={0.8} />
              <line x1="-12" y1="6" x2="-6" y2="18" stroke="#FFFFFF" strokeWidth="1" opacity={0.5} strokeLinecap="round" />
            </g>
          </motion.g>
        </motion.g>

        {/* Sparkles / Magic Sparks around the hoisted block */}
        <motion.g
          animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2, ease: 'easeOut' }}
          style={{ transformOrigin: '215px 95px' }}
        >
          <path
            d="M215 90 L216.5 93.5 L220 95 L216.5 96.5 L215 100 L213.5 96.5 L210 95 L213.5 93.5 Z"
            fill="#FBBF24"
          />
        </motion.g>

        <motion.g
          animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1.1, ease: 'easeOut' }}
          style={{ transformOrigin: '140px 105px' }}
        >
          <path
            d="M140 100 L141.5 103.5 L145 105 L141.5 106.5 L140 110 L138.5 106.5 L135 105 L138.5 103.5 Z"
            fill="#60A5FA"
          />
        </motion.g>

        {/* Cute Construction Cones on Ground */}
        {/* Left Cone */}
        <g transform="translate(130, 155)">
          <ellipse cx="8" cy="18" rx="10" ry="3" fill="currentColor" className="text-black/15" />
          <polygon points="8,0 2,17 14,17" fill="#F97316" />
          <polygon points="6,6 4,12 12,12 10,6" fill="#FFFFFF" />
          <rect x="0" y="16" width="16" height="3" rx="1" fill="#EA580C" />
        </g>

        {/* Right Cone */}
        <g transform="translate(245, 155)">
          <ellipse cx="8" cy="18" rx="10" ry="3" fill="currentColor" className="text-black/15" />
          <polygon points="8,0 2,17 14,17" fill="#F97316" />
          <polygon points="6,6 4,12 12,12 10,6" fill="#FFFFFF" />
          <rect x="0" y="16" width="16" height="3" rx="1" fill="#EA580C" />
        </g>

        {/* Cute Blueprint Tube & Tool Roll on Ground */}
        <g transform="translate(210, 163)">
          {/* Rolled Blueprint */}
          <rect x="0" y="5" width="22" height="7" rx="3.5" fill="#38BDF8" transform="rotate(-15 0 5)" />
          <circle cx="2" cy="7" r="3" fill="#0284C7" transform="rotate(-15 0 5)" />
          {/* Small Wrench */}
          <path
            d="M10 9 L24 2"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9.5" r="2.5" fill="#64748B" />
        </g>

        {/* Hard Hat (Cute Yellow Construction Helmet) on the Mast Base */}
        <g transform="translate(98, 160)">
          <ellipse cx="8" cy="8" rx="8" ry="5.5" fill="#F59E0B" />
          <path d="M1 8 C1 4 4 2 8 2 C12 2 15 4 15 8 Z" fill="#FBBF24" />
          <rect x="1" y="7" width="14" height="2" rx="1" fill="#D97706" />
          <circle cx="8" cy="5" r="1.5" fill="#FEF3C7" />
        </g>
      </svg>
    </div>
  );
};
