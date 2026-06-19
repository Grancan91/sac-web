/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* SAC — Azul primario */
        blue: {
          50:  '#eef3fb',
          100: '#d7e1f3',
          200: '#abc1e6',
          300: '#7193d4',
          400: '#3f6dbd',
          500: '#1b4ea3',
          600: '#0a3a87',
          700: '#00296f', /* marca */
          800: '#001f52',
          900: '#001738',
        },
        /* SAC — Verde secundario */
        green: {
          50:  '#f0f9f4',
          100: '#e0f2e9',
          200: '#b9e0cd',
          300: '#86c9a7',
          400: '#54b083',
          500: '#339966', /* marca */
          600: '#2a8055',
          700: '#1f6b45',
          800: '#14502f',
        },
        /* SAC — Naranja accent */
        orange: {
          50:  '#fef6ed',
          100: '#fceddb',
          200: '#f8d6b3',
          300: '#f3b980',
          400: '#ed9a4f',
          500: '#e67e22', /* marca */
          600: '#cf7020',
          700: '#b5611a',
        },
        /* SAC — Grises */
        gray: {
          50:  '#f7f7f8',
          100: '#f0f0f0',
          200: '#e3e3e4',
          300: '#cfcfd0',
          400: '#adadae',
          500: '#8b8b8b',
          600: '#5f5f61',
          700: '#4a4a4a',
          800: '#2e2e30',
          900: '#1d1d1f',
        },
        /* Alias semánticos */
        brand: {
          primary:   '#00296f',
          secondary: '#339966',
          accent:    '#e67e22',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Montserrat', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)', 'Source Sans 3', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem',   { lineHeight: '1rem' }],
        sm:    ['0.875rem',  { lineHeight: '1.25rem' }],
        md:    ['1rem',      { lineHeight: '1.5rem' }],
        lg:    ['1.125rem',  { lineHeight: '1.75rem' }],
        xl:    ['1.375rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.75rem',   { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem',   { lineHeight: '2.5rem' }],
        '4xl': ['2.875rem',  { lineHeight: '3.25rem' }],
        '5xl': ['3.75rem',   { lineHeight: '1.12' }],
      },
      borderRadius: {
        xs:   '4px',
        sm:   '6px',
        md:   '10px',
        lg:   '14px',
        xl:   '20px',
        '2xl':'28px',
        pill: '999px',
      },
      boxShadow: {
        xs:   '0 1px 2px rgba(0, 41, 111, 0.06)',
        sm:   '0 1px 3px rgba(0, 41, 111, 0.08), 0 1px 2px rgba(0, 41, 111, 0.06)',
        md:   '0 4px 12px rgba(0, 41, 111, 0.10), 0 2px 4px rgba(0, 41, 111, 0.06)',
        lg:   '0 12px 28px rgba(0, 41, 111, 0.12), 0 4px 8px rgba(0, 41, 111, 0.06)',
        xl:   '0 24px 56px rgba(0, 41, 111, 0.16), 0 8px 16px rgba(0, 41, 111, 0.08)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        container: '1120px',
        wide:      '1320px',
      },
      animation: {
        'fade-up':  'fadeUp 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in':  'fadeIn 0.4s cubic-bezier(0.4,0,0.2,1) both',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.4,0,0.2,1) both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to:   { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
