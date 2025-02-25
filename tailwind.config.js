/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          black: 'var(--black)',
          white: 'var(--white)',
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          accent: 'var(--accent)',
          sharp: 'var(--color-text-sharp)',
          gray: 'var(--color-bg-gray)',
          'not-active': 'var(--not-active)',
        },
      },
      backgroundColor: {
        skin: {
          black: 'var(--black)',
          white: 'var(--white)',
          gray: 'var(--color-bg-gray)',
          muted: 'var(--color-text-muted)',
          lavender: 'var(--color-bg-lavender)',
          brown: 'var(--brown)',
        },
      },
      backgroundImage: {
        'gradient-right-lavender':
          'linear-gradient(to right, var(--color-bg-lavender), var(--black))',
        'gradient-bottom-lavender':
          'linear-gradient(to bottom, var(--color-bg-lavender), var(--black))',
        'gradient-right-dirty-white':
          'linear-gradient(to right, var(--white), var(--white))',
        'gradient-bottom-dirty-white':
          'linear-gradient(to bottom, var(--white), var(--white))',
      },
    },
  },
  plugins: [require('daisyui')],
};
