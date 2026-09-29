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

        /* Status dos Eventos (CPC/CLT) */
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
