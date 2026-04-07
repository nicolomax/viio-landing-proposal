/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'page-bg':           '#F3F4F6',
        'hero-base':         '#D0E9FB',
        'viio-blue-cta':     '#3CBDFF',
        'viio-blue-pill':    '#3CBDFF',
        'viio-nav-inactive': '#9ca3af',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      spacing: {
        'hero-mx':            '24px',
        'hero-mt':            '256px',
        'hero-mx-mobile':     '12.5px',
        'hero-mt-mobile':     '14px',
        'hero-gap':           '38.9px',
        'hero-card-pt':       '61px',
        'hero-card-px':       '24px',
        'hero-content-mt':    '142px',
        'hero-btn-px':        '35px',
        'hero-btn-py':        '16px',
        'hero-navbar-height': '57px',
        'hero-navbar-max-w':  '1185px',
        'hero-navbar-pr':     '32.02px',
      },
      fontSize: {
        'hero-btn': ['16px', { lineHeight: '1' }],
      },
      borderRadius: {
        'hero': '24px',
      },
      boxShadow: {
        'navbar': '0px 8px 32px 0px rgba(0,0,0,0.04)',
        'btn':    '0px 25px 50px -12px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
