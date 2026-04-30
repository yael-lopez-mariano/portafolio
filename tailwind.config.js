/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#172026',
        coral: '#e85d4f',
        mint: '#56c7a3',
        skydeep: '#166c8f',
        paper: '#f7f3ea',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 38, 0.12)',
      },
    },
  },
  plugins: [],
};
