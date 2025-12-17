
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            light: '#fb923c',
            DEFAULT: '#ea580c',
            dark: '#c2410c',
          },
          purple: {
            light: '#c084fc',
            DEFAULT: '#9333ea',
            dark: '#7e22ce',
          }
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #ea580c, #9333ea)',
        'brand-gradient-hover': 'linear-gradient(to right, #c2410c, #7e22ce)',
      }
    },
  },
  plugins: [],
}
