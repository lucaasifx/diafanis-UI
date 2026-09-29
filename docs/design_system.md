# Design System — Diafanís (shadcn/ui)

Padrões de interface, tokens de estilo e componentes para o frontend do **Diafanís**.

---

## 1. Diretrizes de Interface

### 1.1. Evitar Cards Excessivos
- Não aninhe cards dentro de cards.
- Em vez de criar múltiplos retângulos isolados com sombras pesadas, divida a tela em **painéis contínuos** (`GlassPanel`).
- Use divisores de linha sutis de 1px (`border-border`) e espaçamentos semânticos (`space-sm`, `space-md`, `space-lg`) para separar grupos de informação.
- O calendário mensal é uma grade unificada conectada por linhas de 1px, sem caixas individuais soltas.

### 1.2. Efeito de Vidro (Glassmorphism Sutil)
- Aplicado apenas em elementos estruturais da tela:
  - Barra lateral (`AppSidebar`): `bg-background/80 backdrop-blur-xl border-r border-border/40`
  - Barra superior (`AppHeader`): `bg-background/80 backdrop-blur-xl border-b border-border/40`
  - Painéis principais (`GlassPanel`): `bg-card/80 backdrop-blur-xl border border-border/50 shadow-sm rounded-2xl`
  - Modais (`Dialog`) e menus laterais móveis (`Sheet`).
- **Não usar blur** em botões, badges ou células individuais da grade para evitar perda de nitidez e queda de desempenho.

### 1.3. Cores por Tipo de Evento
Os compromissos e prazos possuem 4 estados visuais bem definidos:
1. **Prazo Fatal (`fatal`):** Vermelho. Prazo improrrogável com risco de perda de prazo.
2. **Prazo em Andamento (`in_progress`):** Âmbar / Laranja. Prazo em curso que exige atenção ou elaboração de peça.
3. **Audiência Marcada (`hearing`):** Azul. Audiência presencial ou por videoconferência.
4. **Sem Expediente / Feriado (`holiday`):** Cinza neutro. Feriados e dias de suspensão de expediente forense.

### 1.4. Mobile First
- Telas menores que 768px recolhem a barra lateral para uma gaveta (`Sheet` do shadcn).
- O calendário mensal transiciona para visualização semanal ou lista (agenda) em dispositivos móveis.
- Área de toque mínima de 44x44px para botões e seletores em telas touch.

---

## 2. Tokens de Design (Variáveis CSS)

### 2.1. Variáveis em `src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Cores Base shadcn - Light */
    --background: 250 100% 99%;         /* #faf8ff */
    --foreground: 222 41% 13%;          /* #131b2e */

    --card: 0 0% 100%;                  /* #ffffff */
    --card-foreground: 222 41% 13%;     /* #131b2e */

    --popover: 0 0% 100%;               /* #ffffff */
    --popover-foreground: 222 41% 13%;  /* #131b2e */

    --primary: 221 100% 35%;            /* #0037b0 */
    --primary-foreground: 0 0% 100%;    /* #ffffff */

    --secondary: 217 100% 42%;          /* #0051d5 */
    --secondary-foreground: 0 0% 100%;  /* #ffffff */

    --muted: 231 43% 96%;               /* #eaedff */
    --muted-foreground: 230 12% 30%;    /* #434655 */

    --accent: 230 100% 97%;             /* #f2f3ff */
    --accent-foreground: 221 100% 35%;  /* #0037b0 */

    --destructive: 0 75% 42%;           /* #ba1a1a */
    --destructive-foreground: 0 0% 100%;

    --border: 235 20% 81%;              /* #c4c5d7 */
    --input: 235 20% 81%;
    --ring: 221 100% 35%;

    --radius: 0.75rem;

    /* Status dos Eventos - Light */
    --status-fatal-bg: rgba(255, 218, 214, 0.75);
    --status-fatal-border: rgba(186, 26, 26, 0.25);
    --status-fatal-text: #93000a;
    --status-fatal-icon: #ba1a1a;

    --status-warning-bg: rgba(255, 221, 184, 0.65);
    --status-warning-border: #ffb95f;
    --status-warning-text: #653e00;
    --status-warning-icon: #623c00;

    --status-hearing-bg: rgba(219, 225, 255, 0.55);
    --status-hearing-border: #b4c5ff;
    --status-hearing-text: #00174b;
    --status-hearing-icon: #0051d5;

    --status-holiday-bg: rgba(226, 231, 255, 0.85);
    --status-holiday-border: rgba(196, 197, 215, 0.40);
    --status-holiday-text: #434655;
    --status-holiday-icon: #747686;
  }

  .dark {
    /* Cores Base shadcn - Dark */
    --background: 223 45% 8%;           /* #0b101e */
    --foreground: 231 100% 97%;         /* #eef0ff */

    --card: 223 43% 10%;                /* #0e1424 */
    --card-foreground: 231 100% 97%;    /* #eef0ff */

    --popover: 223 43% 10%;             /* #0e1424 */
    --popover-foreground: 231 100% 97%; /* #eef0ff */

    /* Azul Real Primário Vibrante para Botões e Itens Ativos */
    --primary: 221 83% 53%;             /* #2563eb */
    --primary-foreground: 0 0% 100%;    /* #ffffff */

    /* Azul Safira / Azure Secundário Límpido */
    --secondary: 213 94% 68%;           /* #60a5fa */
    --secondary-foreground: 222 47% 11%;/* #0f172a */

    --muted: 223 35% 15%;               /* #161f33 */
    --muted-foreground: 218 20% 68%;    /* #94a3b8 */

    --accent: 221 83% 53%;              /* #2563eb */
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;           /* #ef4444 */
    --destructive-foreground: 0 0% 100%;

    --border: 224 25% 18%;              /* #222d42 */
    --input: 224 25% 18%;
    --ring: 221 83% 53%;

    /* Status dos Eventos - Dark */
    --status-fatal-bg: rgba(239, 68, 68, 0.16);
    --status-fatal-border: rgba(239, 68, 68, 0.35);
    --status-fatal-text: #fca5a5;
    --status-fatal-icon: #ef4444;

    --status-warning-bg: rgba(245, 158, 11, 0.16);
    --status-warning-border: rgba(245, 158, 11, 0.35);
    --status-warning-text: #fde68a;
    --status-warning-icon: #f59e0b;

    --status-hearing-bg: rgba(37, 99, 235, 0.20);
    --status-hearing-border: rgba(96, 165, 250, 0.40);
    --status-hearing-text: #bfdbfe;
    --status-hearing-icon: #60a5fa;

    --status-holiday-bg: rgba(148, 163, 184, 0.15);
    --status-holiday-border: rgba(148, 163, 184, 0.30);
    --status-holiday-text: #cbd5e1;
    --status-holiday-icon: #94a3b8;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
}
```

---

## 3. Tipografia

- **Plus Jakarta Sans:** Usada em títulos, meses, contadores, abas e rótulos de botões.
- **Inter:** Usada em parágrafos, tabelas, números de processo (CNJ) e corpo de texto.

| Token | Família | Tamanho | Peso | Uso |
| :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Plus Jakarta Sans | 40px | 700 (Bold) | Telas iniciais e cabeçalhos grandes |
| `headline-xl` | Plus Jakarta Sans | 28px | 600 (Semibold) | Título principal da página ("Calendário de Prazos & Audiências") |
| `headline-lg` | Plus Jakarta Sans | 22px | 600 (Semibold) | Título do mês ("Setembro 2026") |
| `headline-sm` | Plus Jakarta Sans | 18px | 600 (Semibold) | Títulos de seções |
| `label-md` | Plus Jakarta Sans | 13px | 600 (Semibold) | Itens de menu, filtros e botões |
| `label-sm` | Plus Jakarta Sans | 11px | 600 (Semibold) | Tags e pequenos badges ("Você", "Titular") |
| `body-md` | Inter | 14px | 400 (Regular) | Descrições e subtítulos |
| `body-sm` | Inter | 13px | 400 (Regular) | Células do calendário e listas |
| `code-docket` | Inter | 12px | 500 (Medium) | Números de processo CNJ |

---

## 4. Espaçamentos e Bordas

### 4.1. Espaçamentos
- `space-xs`: `4px` (`0.25rem`) — espaço mínimo entre ícone e texto.
- `space-sm`: `8px` (`0.5rem`) — espaçamento interno de badges e listas compactas.
- `space-md`: `16px` (`1.0rem`) — espaçamento padrão de painéis laterais e botões.
- `space-lg`: `24px` (`1.5rem`) — padding interno da grade do calendário.
- `space-xl`: `40px` (`2.5rem`) — margem superior de páginas.
- `gutter`: `24px` (`1.5rem`) — distância entre painéis.

### 4.2. Raios de Borda (Border Radius)
- `rounded-md`: `6px` — badges de eventos no calendário.
- `rounded-lg`: `8px` — botões de navegação (`<`, `>`).
- `rounded-xl`: `12px` — links de menu e segmented control.
- `rounded-2xl`: `16px` — painéis de vidro (`GlassPanel`).
- `rounded-full`: `9999px` — campo de busca e avatares.

---

## 5. Configuração do `tailwind.config.ts`

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        /* Cores de Status dos Eventos */
        status: {
          fatal: {
            bg: 'var(--status-fatal-bg)',
            border: 'var(--status-fatal-border)',
            text: 'var(--status-fatal-text)',
            icon: 'var(--status-fatal-icon)',
          },
          warning: {
            bg: 'var(--status-warning-bg)',
            border: 'var(--status-warning-border)',
            text: 'var(--status-warning-text)',
            icon: 'var(--status-warning-icon)',
          },
          hearing: {
            bg: 'var(--status-hearing-bg)',
            border: 'var(--status-hearing-border)',
            text: 'var(--status-hearing-text)',
            icon: 'var(--status-hearing-icon)',
          },
          holiday: {
            bg: 'var(--status-holiday-bg)',
            border: 'var(--status-holiday-border)',
            text: 'var(--status-holiday-text)',
            icon: 'var(--status-holiday-icon)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        gutter: '1.5rem',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
```

---

## 6. Componentes Reutilizáveis (`./src/features/ui`)

### 6.1. `glass-panel.tsx`
Painel principal unificado com efeito translúcido sutil:

```tsx
import * as React from 'react';
import { cn } from '@/shared/cn';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border border-border/40 bg-card/80 backdrop-blur-xl shadow-sm transition-all',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassPanel.displayName = 'GlassPanel';
```

### 6.2. `status-badge.tsx`
Badge para identificação dos 4 status de eventos do calendário:

```tsx
import * as React from 'react';
import { AlertCircle, Clock, Gavel, CalendarOff } from 'lucide-react';
import { cn } from '@/shared/cn';

export type EventStatus = 'fatal' | 'in_progress' | 'hearing' | 'holiday';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: EventStatus;
  label: string;
  onClick?: () => void;
  className?: string;
}

const statusConfig = {
  fatal: {
    bg: 'bg-status-fatal-bg border-status-fatal-border text-status-fatal-text',
    icon: AlertCircle,
    iconColor: 'text-status-fatal-icon',
  },
  in_progress: {
    bg: 'bg-status-warning-bg border-status-warning-border text-status-warning-text',
    icon: Clock,
    iconColor: 'text-status-warning-icon',
  },
  hearing: {
    bg: 'bg-status-hearing-bg border-status-hearing-border text-status-hearing-text',
    icon: Gavel,
    iconColor: 'text-status-hearing-icon',
  },
  holiday: {
    bg: 'bg-status-holiday-bg border-status-holiday-border text-status-holiday-text',
    icon: CalendarOff,
    iconColor: 'text-status-holiday-icon',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  onClick,
  className,
  ...props
}) => {
  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        'px-2 py-1 rounded-md border flex items-center gap-1.5 text-[11px] font-semibold leading-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] select-none transition-transform active:scale-95 cursor-pointer',
        config.bg,
        className
      )}
      {...props}
    >
      <IconComponent className={cn('w-3.5 h-3.5 shrink-0', config.iconColor)} />
      <span className="truncate">{label}</span>
    </div>
  );
};
```

### 6.3. `theme-toggle.tsx`
Botão de alternância claro/escuro com `next-themes`:

```tsx
import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/features/ui/button';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Alternar tema"
      className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
```

---

## 7. Responsividade

| Tamanho | Barra Lateral | Filtros de Exibição | Grade do Calendário |
| :--- | :--- | :--- | :--- |
| **Mobile (`< 768px`)** | Oculta. Acionada por botão no topo que abre gaveta lateral (`Sheet`). | Botão retrátil ou gaveta inferior de filtros. | Transição para visualização semanal ou lista (agenda). |
| **Tablet (`768px - 1023px`)** | Barra lateral recolhida apenas com ícones. | Painel superior retrátil. | Grade de 7 colunas mantida com badges compactos. |
| **Desktop (`>= 1024px`)** | Barra lateral fixa (`w-72`) com links e perfil no rodapé. | Coluna esquerda com mini calendário, filtros e equipe. | Grade completa com 7 colunas e altura mínima de 115px por célula. |
