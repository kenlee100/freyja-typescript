/** @type {import('tailwindcss').Config} */
const colors = require('./src/tailwindcss/color.ts')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // sm: '576px',
      // md: '768px',
      // lg: '992px',
      // xl: '1200px',
      // '2xl': '1760px'
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      '2xl': '1320px'
    },
    extend: {
      colors,
      fontSize: {
        display: [
          '6.25rem', // font-size: 100px;
          {
            lineHeight: '7.5rem', // 120px
            fontWeight: '700'
            // letterSpacing: '0.5rem'
          }
        ],
        h1: [
          '3rem', // font-size: 48px;
          {
            lineHeight: '3.625rem', // 58px
            fontWeight: '700'
            // letterSpacing: '0.5rem'
          }
        ],
        h2: [
          '2.5rem', // font-size: 40px;
          {
            lineHeight: '3rem', // 48px
            fontWeight: '700'
            // letterSpacing: '0.5rem'
          }
        ],
        h3: [
          '2rem', // font-size: 32px;
          {
            lineHeight: '2.4375rem', // 39px
            fontWeight: '700'
            // letterSpacing: "0.5rem"
          }
        ],
        h4: [
          '1.75rem', // font-size: 28px;
          {
            lineHeight: '2.125rem', // 34px
            fontWeight: '700'
            // letterSpacing: '0.5rem'
          }
        ],
        h5: [
          '1.5rem', // font-size: 24px;
          {
            lineHeight: '1.8125rem', // 29px
            fontWeight: '700'
            // letterSpacing: '0.5rem'
          }
        ],
        h6: [
          '1.25rem',
          {
            lineHeight: '1.5rem', // 20px
            fontWeight: '700'
            // letterSpacing: '0.5rem'
          }
        ], // font-size: 20px;
        title: [
          '1rem', // font-size: 16px
          {
            lineHeight: '1.5rem', // 24px
            fontWeight: '700'
            // letterSpacing: '0.2rem'
          }
        ],
        subtitle: [
          '0.875rem', // font-size: 14px
          {
            lineHeight: '1.3125rem', // 21px
            fontWeight: '700'
            // letterSpacing: '0.2rem'
          }
        ],
        body: [
          '1rem', // font-size: 16px;
          {
            lineHeight: '1.5rem', // 24px
            fontWeight: '500'
            // letterSpacing: "0.2rem"
          }
        ],
        body2: [
          '0.875rem', // font-size: 14px
          {
            lineHeight: '1.3125rem', // 21px
            fontWeight: '500'
            // letterSpacing: '0.2rem'
          }
        ],
        tiny: [
          '0.75rem', // font-size: 12px;
          {
            lineHeight: '1.125rem', // 18px
            fontWeight: '500'
            // letterSpacing: '0.2rem'
          }
        ]
      }
      // lineHeight: {
      //   120: "1.2", // line-height: 1.2
      // },
    }
  },
  plugins: []
}
