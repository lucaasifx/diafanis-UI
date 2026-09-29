import * as React from 'react';

interface LegalConstructionAnimationProps {
  className?: string;
}

export const LegalConstructionAnimation: React.FC<LegalConstructionAnimationProps> = ({
  className = 'w-72 h-52 sm:w-80 sm:h-56',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Ilustração animada da balança da justiça em construção"
        role="img"
      >
        <style>{`
          @keyframes swayBeam {
            0%, 100% {
              transform: rotate(-5deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }

          @keyframes swayLeftPan {
            0%, 100% {
              transform: translateY(6px) rotate(5deg);
            }
            50% {
              transform: translateY(-6px) rotate(-5deg);
            }
          }

          @keyframes swayRightPan {
            0%, 100% {
              transform: translateY(-6px) rotate(5deg);
            }
            50% {
              transform: translateY(6px) rotate(-5deg);
            }
          }

          @keyframes craneCable {
            0%, 100% {
              transform: translateY(-6px);
            }
            50% {
              transform: translateY(6px);
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.6);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }

          .animate-beam {
            transform-origin: 140px 55px;
            animation: swayBeam 3.6s ease-in-out infinite;
          }

          .animate-left-pan {
            transform-origin: 65px 55px;
            animation: swayLeftPan 3.6s ease-in-out infinite;
          }

          .animate-right-pan {
            transform-origin: 215px 55px;
            animation: swayRightPan 3.6s ease-in-out infinite;
          }

          .animate-crane {
            animation: craneCable 3.6s ease-in-out infinite;
          }

          .animate-sparkle-1 {
            animation: twinkle 2.2s ease-in-out infinite;
          }

          .animate-sparkle-2 {
            animation: twinkle 2.6s ease-in-out infinite 1.1s;
          }
        `}</style>

        {/* Blueprint Floor Grid line */}
        <line
          x1="30"
          y1="172"
          x2="250"
          y2="172"
          stroke="currentColor"
          className="text-border/70"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Crane Arm at Top Right (Construção) */}
        <g className="text-amber-500">
          {/* Main Crane Boom Truss */}
          <rect x="180" y="16" width="75" height="3" fill="#F59E0B" rx="1" />
          <rect x="180" y="24" width="75" height="2.5" fill="#D97706" rx="1" />
          {/* Diagonal Bracing */}
          {[188, 202, 216, 230, 244].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1="16"
              x2={x + 10}
              y2="24"
              stroke="#D97706"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}

          {/* Pulley block at crane tip */}
          <circle cx="215" cy="27" r="4" fill="#475569" />
          <circle cx="215" cy="27" r="1.5" fill="#E2E8F0" />
        </g>

        {/* Crane Hoist Cable & Hook (animating with right pan) */}
        <g className="animate-crane">
          <line
            x1="215"
            y1="31"
            x2="215"
            y2="76"
            stroke="currentColor"
            className="text-muted-foreground/80"
            strokeWidth="1.2"
            strokeDasharray="2 1"
          />
          {/* Hook */}
          <circle cx="215" cy="78" r="3.5" fill="#64748B" />
          <path
            d="M215 81.5 C215 86 212 87 210 87 C208 87 207 85 208 83"
            stroke="#475569"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* SCALES OF JUSTICE - Central Pillar & Pedestal (Direito) */}
        <g>
          {/* Base Tier 1 */}
          <rect
            x="112"
            y="166"
            width="56"
            height="6"
            rx="2"
            fill="currentColor"
            className="text-foreground/80"
          />
          {/* Base Tier 2 */}
          <rect
            x="120"
            y="160"
            width="40"
            height="6"
            rx="1.5"
            fill="currentColor"
            className="text-foreground/60"
          />

          {/* Scaffolding support bracket on pillar */}
          <line x1="126" y1="160" x2="137" y2="125" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="154" y1="160" x2="143" y2="125" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Classical Law Column / Pillar */}
          <rect
            x="137"
            y="60"
            width="6"
            height="100"
            rx="1.5"
            fill="currentColor"
            className="text-foreground/85"
          />
          {/* Column Fluting */}
          <line x1="140" y1="65" x2="140" y2="155" stroke="currentColor" className="text-background" strokeWidth="1" opacity="0.4" />

          {/* Column Capital / Decorative Top */}
          <rect
            x="133"
            y="55"
            width="14"
            height="5"
            rx="1"
            fill="currentColor"
            className="text-foreground/75"
          />
          {/* Golden Center Pivot Jewel */}
          <circle cx="140" cy="55" r="5" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
          <circle cx="140" cy="55" r="2" fill="#FEF3C7" />
        </g>

        {/* SWAYING BALANCE BEAM (Haste da Balança) */}
        <g className="animate-beam">
          {/* Main Horizontal Arm */}
          <path
            d="M65 54 L140 52 L215 54 L215 56 L140 58 L65 56 Z"
            fill="#3B82F6"
          />
          {/* Left attachment ring */}
          <circle cx="65" cy="55" r="3.5" fill="#2563EB" />
          <circle cx="65" cy="55" r="1.5" fill="#EFF6FF" />
          {/* Right attachment ring */}
          <circle cx="215" cy="55" r="3.5" fill="#2563EB" />
          <circle cx="215" cy="55" r="1.5" fill="#EFF6FF" />
        </g>

        {/* LEFT PAN: LAW / DIREITO (Holding Law Book) */}
        <g className="animate-left-pan">
          {/* Suspension cords */}
          <line x1="65" y1="56" x2="48" y2="114" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
          <line x1="65" y1="56" x2="65" y2="114" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
          <line x1="65" y1="56" x2="82" y2="114" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />

          {/* Curved Pan Dish */}
          <path
            d="M44 114 Q65 125 86 114 Q65 121 44 114 Z"
            fill="currentColor"
            className="text-foreground/80"
          />
          <ellipse cx="65" cy="114" rx="21" ry="3.5" fill="#3B82F6" opacity="0.25" />

          {/* Law Book (Vade Mecum / Código de Leis) */}
          <g transform="translate(53, 98)">
            {/* Book Base */}
            <rect x="0" y="2" width="24" height="13" rx="1.5" fill="#1E40AF" />
            {/* Book Pages */}
            <rect x="2" y="3" width="20" height="4" fill="#F8FAFC" rx="0.5" />
            <rect x="2" y="8" width="20" height="4" fill="#F8FAFC" rx="0.5" />
            {/* Red bookmark ribbon hanging down */}
            <path d="M12 12 L14 17 L12 16 L10 17 Z" fill="#EF4444" />
            {/* Scales icon emblem on book cover */}
            <circle cx="12" cy="7" r="1.5" fill="#FBBF24" />
          </g>
        </g>

        {/* RIGHT PAN: CONSTRUCTION (Holding Building Block) */}
        <g className="animate-right-pan">
          {/* Suspension cords */}
          <line x1="215" y1="56" x2="198" y2="114" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
          <line x1="215" y1="56" x2="215" y2="114" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
          <line x1="215" y1="56" x2="232" y2="114" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />

          {/* Curved Pan Dish */}
          <path
            d="M194 114 Q215 125 236 114 Q215 121 194 114 Z"
            fill="currentColor"
            className="text-foreground/80"
          />
          <ellipse cx="215" cy="114" rx="21" ry="3.5" fill="#F59E0B" opacity="0.25" />

          {/* Construction Crystal Brick / Cube being fitted */}
          <g transform="translate(204, 96)">
            {/* Isometric Block Top */}
            <polygon points="11,0 22,6 11,12 0,6" fill="#FDE68A" stroke="#F59E0B" strokeWidth="0.8" />
            {/* Isometric Block Left */}
            <polygon points="0,6 11,12 11,22 0,16" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />
            {/* Isometric Block Right */}
            <polygon points="11,12 22,6 22,16 11,22" fill="#D97706" stroke="#B45309" strokeWidth="0.8" />
          </g>
        </g>

        {/* CUTE CONSTRUCTION PROPS ON THE GROUND */}
        {/* Yellow Hard Hat (Capacete de Engenharia) */}
        <g transform="translate(94, 156)">
          <path d="M1 9 C1 4 4 2 8 2 C12 2 15 4 15 9 Z" fill="#F59E0B" />
          <ellipse cx="8" cy="9.5" rx="8.5" ry="2" fill="#D97706" />
          <circle cx="8" cy="5" r="1.2" fill="#FEF3C7" />
        </g>

        {/* Orange Traffic Cone (Cone de Obra) */}
        <g transform="translate(172, 152)">
          <polygon points="7,0 2,16 12,16" fill="#F97316" />
          <polygon points="5,5 3.5,11 10.5,11 9,5" fill="#FFFFFF" />
          <rect x="0" y="15" width="14" height="2.5" rx="0.8" fill="#C2410C" />
        </g>

        {/* Architect Ruler / Esquadro on Ground */}
        <polygon points="50,169 68,169 50,154" fill="#38BDF8" opacity="0.8" />
        <polygon points="53,167 63,167 53,159" fill="currentColor" className="text-background" />

        {/* Sparkles of Construction / Calibration Magic */}
        <g className="animate-sparkle-1" style={{ transformOrigin: '78px 85px' }}>
          <path d="M78 81 L79.2 83.8 L82 85 L79.2 86.2 L78 89 L76.8 86.2 L74 85 L76.8 83.8 Z" fill="#3B82F6" />
        </g>
        <g className="animate-sparkle-2" style={{ transformOrigin: '202px 82px' }}>
          <path d="M202 78 L203.2 80.8 L206 82 L203.2 83.2 L202 86 L200.8 83.2 L198 82 L200.8 80.8 Z" fill="#F59E0B" />
        </g>
      </svg>
    </div>
  );
};
