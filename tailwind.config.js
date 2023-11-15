export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Baloo 2"', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        introText: '36.75rem',
      },
      fontSize: {
        tag: [
          '0.625rem',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],
        buttonG: [
          '0.875rem',
          {
            lineHeight: '160%',
            fontWeight: 700,
          },
        ],
        buttonM: [
          '0.75rem',
          {
            lineHeight: '160%',
            fontWeight: 700,
          },
        ],
        '3.1xl': '2rem',
        titleXl: [
          '3rem',
          {
            lineHeight: '130%',
            fontWeight: 800,
          },
        ],
        titleL: [
          '2rem',
          {
            lineHeight: '130%',
            fontWeight: 800,
          },
        ],
        titleM: [
          '1.5rem',
          {
            lineHeight: '130%',
            fontWeight: 800,
          },
        ],
        titleS: [
          '1.25rem',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],
        titleXS: [
          '1.125rem',
          {
            lineHeight: '130%',
            fontWeight: 700,
          },
        ],
        bodyL: [
          '1.25rem',
          {
            lineHeight: '130%',
          },
        ],
        bodyM: [
          '1rem',
          {
            lineHeight: '130%',
          },
        ],
        bodyS: [
          '0.875rem',
          {
            lineHeight: '130%',
          },
        ],
        bodyXS: [
          '0.75rem',
          {
            lineHeight: '130%',
          },
        ],
      },
      gridTemplateColumns: {
        intro: 'minmax(38rem, 1fr) 1fr',
        form: 'minmax(7.5rem, 10rem) 1fr minmax(3.5rem, 4rem)',
        form2: 'minmax(7.5rem, 10rem) 1fr',
        formCheckoutCards: 'minmax(38rem, 40rem) 1fr',
        formCards: '1fr 1fr 1fr',
      },
      opacity: {
        15: '.15',
      },
      blur: {
        intro: '80px',
      },
      lineHeight: {
        13: '1.3',
      },
      colors: {
        yellowDark: '#C47F17',
        yellow: '#DBAC2C',
        yellowLight: '#F1E9C9',
        purpleDark: '#4B2995',
        purple: '#8047F8',
        purpleLight: '#EBE5F9',
        baseTitle: '#272221',
        baseSubtitle: '#403937',
        baseText: '#574F4D',
        baseLabel: '#8D8686',
        baseHover: '#D7D5D5',
        baseButton: '#E6E5E5',
        baseInput: '#EDEDED',
        baseCard: '#F3F2F2',
        background: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
