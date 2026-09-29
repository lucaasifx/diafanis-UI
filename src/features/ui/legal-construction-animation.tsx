import * as React from 'react';

interface LegalConstructionAnimationProps {
  className?: string;
}

export const LegalConstructionAnimation: React.FC<LegalConstructionAnimationProps> = ({
  className = 'w-80 h-56 sm:w-96 sm:h-64',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Ilustração animada do guindaste sustentando a balança da justiça com documento e prisma"
        role="img"
      >
        <defs>
          {/* Crane yellow metallic gradient */}
          <linearGradient id="craneYellow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Scale Pillar Column Gradient */}
          <linearGradient id="pillarGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="45%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Diafanís Crystal Prism Gradients */}
          <linearGradient id="prismTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="prismFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="prismSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          {/* Clip path for hoist cable emerging from crane trolley */}
          <clipPath id="craneCableClip">
            <rect x="180" y="37" width="10" height="90" />
          </clipPath>
        </defs>

        <style>{`
          @keyframes syncRightSide {
            0%, 100% {
              transform: translateY(-6.2px);
            }
            50% {
              transform: translateY(6.2px);
            }
          }

          @keyframes syncLeftSide {
            0%, 100% {
              transform: translateY(6.2px);
            }
            50% {
              transform: translateY(-6.2px);
            }
          }

          @keyframes syncScaleBeam {
            0%, 100% {
              transform: rotate(-5.5deg);
            }
            50% {
              transform: rotate(5.5deg);
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.6);
            }
            50% {
              opacity: 1;
              transform: scale(1.15);
            }
          }

          .animate-crane-cable {
            transform-box: view-box;
            animation: syncRightSide 4s ease-in-out infinite;
          }

          .animate-right-pan {
            transform-box: view-box;
            animation: syncRightSide 4s ease-in-out infinite;
          }

          .animate-left-pan {
            transform-box: view-box;
            animation: syncLeftSide 4s ease-in-out infinite;
          }

          .animate-scale-beam {
            transform-box: view-box;
            transform-origin: 120px 86px;
            animation: syncScaleBeam 4s ease-in-out infinite;
          }

          .animate-sparkle-1 {
            animation: twinkle 2.4s ease-in-out infinite;
          }

          .animate-sparkle-2 {
            animation: twinkle 2.4s ease-in-out infinite 1.2s;
          }
        `}</style>

        {/* Blueprint Ground Grid Line */}
        <line
          x1="15"
          y1="195"
          x2="305"
          y2="195"
          stroke="currentColor"
          className="text-border/70"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* ======================================================== */}
        {/* 1. GUINDASTE DE CONSTRUÇÃO (Posicionado à direita)       */}
        {/* ======================================================== */}
        <g id="construction-crane">
          {/* Concrete Footing at Base (Repousando sobre o piso y=195) */}
          <rect x="250" y="185" width="30" height="10" rx="2" fill="#475569" />
          <rect x="254" y="187" width="22" height="6" rx="1" fill="#64748B" />

          {/* Vertical Mast Trellis */}
          <rect x="258" y="26" width="3.5" height="159" fill="url(#craneYellow)" rx="1" />
          <rect x="268" y="26" width="3.5" height="159" fill="url(#craneYellow)" rx="1" />
          {/* Trellis Cross Braces */}
          {[36, 54, 72, 90, 108, 126, 144, 162].map((y, i) => (
            <g key={i} stroke="url(#craneYellow)" strokeWidth="1.5" strokeLinecap="round">
              <line x1="260" y1={y} x2="269" y2={y + 12} />
              <line x1="269" y1={y} x2="260" y2={y + 12} />
            </g>
          ))}

          {/* Crane Top Apex & Warning Light */}
          <polygon points="265,16 258,26 272,26" fill="url(#craneYellow)" />
          <circle cx="265" cy="14" r="3" fill="#EF4444" opacity="0.9" />

          {/* Horizontal Boom (Lança horizontal ancorada na torre x=258..272) */}
          {/* Espessura uniforme de 11px: topo em y=26, base em y=37 */}
          <rect x="182" y="26" width="106" height="3" fill="url(#craneYellow)" rx="0.8" />
          <rect x="182" y="34" width="106" height="3" fill="url(#craneYellow)" rx="0.8" />
          {/* Boom Bracing no vão aberto entre o carrinho (x=192) e o mastro (x=258) */}
          {[196, 212, 228, 244].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1="26"
              x2={x + 12}
              y2="37"
              stroke="#D97706"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}

          {/* Counterweight Block on the far right (Mesma espessura de 11px da lança: y=26 a y=37) */}
          <rect x="286" y="26" width="16" height="11" rx="1.5" fill="#334155" stroke="#1E293B" strokeWidth="0.8" />
          <rect x="288" y="28" width="12" height="7" rx="1" fill="#475569" />

          {/* Tension Stay Cables (Tirantes do Guindaste) */}
          {/* Tirante direito conectando o topo ao contrapeso nivelado em y=26 */}
          <line x1="265" y1="16" x2="292" y2="26" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1.2" />
          {/* Tirante superior esquerdo conectando o topo do guindaste ao carrinho nivelado em y=26 */}
          <line x1="265" y1="16" x2="185" y2="26" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1.2" />

          {/* ======================================================== */}
          {/* CARRINHO MECÂNICO INTEGRADO NO FIM DA LANÇA (x=185)      */}
          {/* Mesma espessura uniforme de 11px da lança: y=26 a y=37   */}
          {/* ======================================================== */}
          {/* Corpo estrutural do carrinho perfeitamente nivelado com a lança */}
          <rect x="178" y="26" width="14" height="11" rx="1.5" fill="#1E293B" stroke="#0F172A" strokeWidth="0.8" />
          {/* Rebaixo interno industrial */}
          <rect x="180" y="27.5" width="10" height="8" rx="1" fill="#334155" />

          {/* Placa central dourada Diafanís com rebite de montagem */}
          <rect x="182" y="28.5" width="6" height="6" rx="0.8" fill="#F59E0B" />
          <circle cx="185" cy="31.5" r="1.2" fill="#1E293B" />

          {/* Rodízios nos trilhos superior e inferior */}
          <circle cx="180.5" cy="27.5" r="1" fill="#94A3B8" />
          <circle cx="189.5" cy="27.5" r="1" fill="#94A3B8" />
          <circle cx="180.5" cy="35.5" r="1" fill="#94A3B8" />
          <circle cx="189.5" cy="35.5" r="1" fill="#94A3B8" />

          {/* Ponto de ancoragem do cabo superior */}
          <circle cx="185" cy="26" r="0.9" fill="#FEF3C7" />

          {/* Bocal inferior discreto de saída do cabo */}
          <rect x="183.5" y="37" width="3" height="1.5" rx="0.5" fill="#0F172A" />
        </g>

        {/* ======================================================== */}
        {/* 2. CABO DO GUINDASTE CONECTADO DIRETAMENTE À HASTE      */}
        {/* ======================================================== */}
        <g id="crane-hoist-assembly" clipPath="url(#craneCableClip)">
          <g className="animate-crane-cable">
            {/* Cabo contínuo de aço saindo perfeitamente da base do carrinho até a balança */}
            <line
              x1="185"
              y1="20"
              x2="185"
              y2="84.5"
              stroke="currentColor"
              className="text-foreground/85"
              strokeWidth="1.6"
            />
            {/* Terminal metálico dourado engatado no anel da haste */}
            <rect x="183.5" y="82" width="3" height="3" rx="0.8" fill="#F59E0B" />
            <circle cx="185" cy="83.5" r="0.9" fill="#FEF3C7" />
          </g>
        </g>

        {/* ======================================================== */}
        {/* 3. A BALANÇA DA JUSTIÇA (Pedestal + Coluna + Trave)      */}
        {/* ======================================================== */}
        <g id="scales-of-justice">
          {/* Base Pedestal on the ground (x=120, repousando em y=195) */}
          <rect x="94" y="190.5" width="52" height="4.5" rx="1.5" fill="#1E293B" />
          <rect x="102" y="185.5" width="36" height="5" rx="1.2" fill="#334155" />
          <rect x="109" y="181.5" width="22" height="4" rx="1" fill="#F59E0B" />
          <rect x="114" y="178.5" width="12" height="3" rx="0.8" fill="#D97706" />

          {/* Classical Vertical Central Column / Pillar */}
          <rect x="117" y="88" width="6" height="90.5" rx="1" fill="url(#pillarGradient)" />
          <rect x="119" y="90" width="1.8" height="86.5" fill="#93C5FD" opacity="0.6" />

          {/* Decorative Mid-Collar and Capital */}
          <rect x="115" y="132" width="10" height="3" rx="1" fill="#F59E0B" />
          <rect x="114" y="87" width="12" height="3.5" rx="1" fill="#D97706" />

          {/* ====================================================== */}
          {/* TRAVE HORIZONTAL OSCILANTE (Conectada ao guindaste)     */}
          {/* ====================================================== */}
          <g className="animate-scale-beam">
            {/* The Balance Beam (Trave da balança) */}
            <path
              d="M55 85 L120 83.5 L185 85 L185 87 L120 88.5 L55 87 Z"
              fill="#2563EB"
            />

            {/* Left suspension ring */}
            <circle cx="55" cy="86" r="3.5" stroke="#F59E0B" strokeWidth="1.8" fill="none" />
            <circle cx="55" cy="86" r="1.5" fill="#1D4ED8" />

            {/* Right suspension ring (Engatado pelo cabo do guindaste!) */}
            <circle cx="185" cy="86" r="3.5" stroke="#F59E0B" strokeWidth="1.8" fill="none" />
            <circle cx="185" cy="86" r="1.5" fill="#1D4ED8" />
          </g>

          {/* Central Pivot Jewel (Pivô central fixo no topo da coluna) */}
          <circle cx="120" cy="86" r="4.5" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
          <circle cx="120" cy="86" r="1.8" fill="#FEF3C7" />

          {/* ------------------------------------------------------ */}
          {/* PRATO ESQUERDO: DOCUMENTO PROCESSUAL FORENSE          */}
          {/* ------------------------------------------------------ */}
          <g className="animate-left-pan">
            {/* 3 Suspension Cords */}
            <line x1="55" y1="88" x2="38" y2="145" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
            <line x1="55" y1="88" x2="55" y2="145" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
            <line x1="55" y1="88" x2="72" y2="145" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />

            {/* Dish */}
            <path
              d="M36 145 Q55 156 74 145 Q55 152 36 145 Z"
              fill="currentColor"
              className="text-foreground/80"
            />
            <ellipse cx="55" cy="145" rx="19" ry="3.5" fill="#2563EB" opacity="0.25" />

            {/* Legal Document / Processo Judicial com Dobra e Selo */}
            <g transform="translate(44, 126)">
              {/* Document Sheet with Shadow */}
              <rect x="0" y="0" width="22" height="19" rx="1.5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              {/* Folded Top-Right Corner */}
              <polygon points="17,0 22,5 17,5" fill="#E2E8F0" />
              <polygon points="17,0 22,5 17,0" fill="#94A3B8" opacity="0.4" />
              {/* Document Text Lines */}
              <line x1="3" y1="4" x2="14" y2="4" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
              <line x1="3" y1="8" x2="18" y2="8" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
              <line x1="3" y1="12" x2="13" y2="12" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
              {/* Official Gold Seal Stamp */}
              <circle cx="16" cy="14" r="2.5" fill="#F59E0B" />
              <circle cx="16" cy="14" r="1.2" fill="#FEF3C7" />
            </g>

            {/* Sparkle near Document */}
            <g className="animate-sparkle-1" style={{ transformOrigin: '36px 124px' }}>
              <path d="M36 121 L37 123.5 L39.5 124.5 L37 125.5 L36 128 L35 125.5 L32.5 124.5 L35 123.5 Z" fill="#3B82F6" />
            </g>
          </g>

          {/* ------------------------------------------------------ */}
          {/* PRATO DIREITO: PRISMA GEOMÉTRICO DIAFANÍS             */}
          {/* ------------------------------------------------------ */}
          <g className="animate-right-pan">
            {/* 3 Suspension Cords */}
            <line x1="185" y1="88" x2="168" y2="145" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
            <line x1="185" y1="88" x2="185" y2="145" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />
            <line x1="185" y1="88" x2="202" y2="145" stroke="currentColor" className="text-muted-foreground/70" strokeWidth="1" />

            {/* Dish */}
            <path
              d="M166 145 Q185 156 204 145 Q185 152 166 145 Z"
              fill="currentColor"
              className="text-foreground/80"
            />
            <ellipse cx="185" cy="145" rx="19" ry="3.5" fill="#3B82F6" opacity="0.25" />

            {/* Diafanís Faceted Crystal Prism */}
            <g transform="translate(185, 134)">
              {/* Top Face */}
              <polygon points="0,-12 12,-5 0,2 -12,-5" fill="url(#prismTop)" stroke="#93C5FD" strokeWidth="0.8" />
              {/* Left Front Face */}
              <polygon points="-12,-5 0,2 0,15 -12,8" fill="url(#prismFront)" stroke="#3B82F6" strokeWidth="0.8" />
              {/* Right Front Face */}
              <polygon points="0,2 12,-5 12,8 0,15" fill="url(#prismSide)" stroke="#2563EB" strokeWidth="0.8" />
              {/* Reflection and Shimmer Highlights */}
              <line x1="-7" y1="-2" x2="-2" y2="10" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.75" strokeLinecap="round" />
              <circle cx="0" cy="2" r="1.5" fill="#FFFFFF" opacity="0.9" />
            </g>

            {/* Sparkle near Prism */}
            <g className="animate-sparkle-2" style={{ transformOrigin: '203px 124px' }}>
              <path d="M203 121 L204 123.5 L206.5 124.5 L204 125.5 L203 128 L202 125.5 L199.5 124.5 L202 123.5 Z" fill="#F59E0B" />
            </g>
          </g>
        </g>

        {/* ======================================================== */}
        {/* 4. ADEREÇOS DE CONSTRUÇÃO NO CHÃO (Todos no solo y=195)  */}
        {/* ======================================================== */}
        {/* Architect Triangle Ruler (Esquadro no chão y=195) */}
        <polygon points="26,195 46,195 26,177" fill="#38BDF8" opacity="0.85" />
        <polygon points="29,193 40,193 29,183" fill="currentColor" className="text-background" />

        {/* Yellow Safety Hardhat (Capacete repousando perfeitamente no chão y=195) */}
        <g transform="translate(72, 183.5)">
          <path d="M1 9.5 C1 4 4.5 2 9 2 C13.5 2 17 4 17 9.5 Z" fill="#F59E0B" />
          <path d="M7.5 2.5 C7.5 2 10.5 2 10.5 2.5 L10.5 9.5 L7.5 9.5 Z" fill="#D97706" opacity="0.6" />
          <ellipse cx="9" cy="9.5" rx="9" ry="2" fill="#D97706" />
          <circle cx="9" cy="5.5" r="1.2" fill="#FEF3C7" />
        </g>

        {/* Orange & White Traffic Cone (Cone no chão y=195) */}
        <g transform="translate(225, 177.5)">
          <polygon points="7,0 2,15.5 12,15.5" fill="#F97316" />
          <polygon points="5,5 3.5,10.5 10.5,10.5 9,5" fill="#FFFFFF" />
          <rect x="0" y="15" width="14" height="2.5" rx="0.8" fill="#C2410C" />
        </g>
      </svg>
    </div>
  );
};


