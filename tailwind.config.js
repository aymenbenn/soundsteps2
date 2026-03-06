
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        yellow: 'var(--color-yellow)',
        success: 'var(--color-success)',
        light: 'var(--color-bg-light)',
        dark: 'var(--color-text-dark)',
        muted: 'var(--color-text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(26, 26, 46, 0.05)',
        'card': '0 4px 20px -2px rgba(26, 26, 46, 0.03)',
      }
    },
  },
  plugins: [],
}
