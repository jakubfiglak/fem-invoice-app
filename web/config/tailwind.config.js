const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: [
          '2rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.03125em',
            fontWeight: '700',
          },
        ],
        h2: [
          '1.25rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '-0.0315em',
            fontWeight: '700',
          },
        ],
        h3: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.05em',
            fontWeight: '700',
          },
        ],
        h4: [
          '0.75rem',
          {
            lineHeight: '0.9375rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        body1: [
          '0.75rem',
          {
            lineHeight: '0.9375rem',
            letterSpacing: '-0.02em',
            fontWeight: '500',
          },
        ],
        body2: [
          '0.6875rem',
          {
            lineHeight: '1.125rem',
            letterSpacing: '-0.02em',
            fontWeight: '500',
          },
        ],
      },
    },
    colors: {
      black: '#0C0E16',
      purple: {
        dark: '#7C5DFA',
        DEFAULT: '#9277FF',
        light: '#7E88C3',
        extraLight: '#DFE3FA',
      },
      gray: {
        extraDark: '#141625',
        dark: '#1E2139',
        DEFAULT: '#252945',
        light: '#888EB0',
        extraLight: '#F8F8F8',
      },
      red: {
        DEFAULT: '#EC5757',
        light: '#FF9797',
      },
      green: '#33D69F',
      orange: '#FF8F00',
    },
  },
  plugins: [],
}
