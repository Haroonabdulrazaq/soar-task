/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          black: 'var(--black)',
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          sharp: 'var(--color-text-sharp)',
          gray: 'var(--color-bg-gray)',
          'not-active': 'var(--not-active)',
        },
      },
      backgroundColor: {
        skin: {
          gray: 'var(--color-bg-gray)',
          muted: 'var(--color-text-muted)',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
