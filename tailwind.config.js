
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
          yellow: {
            light: '#fde047',
            DEFAULT: '#facc15',
            dark: '#eab308',
          }
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #ea580c, rgba(250, 204, 21, 0.6))',
        'brand-gradient-hover': 'linear-gradient(to right, #c2410c, rgba(234, 179, 8, 0.6))',
        'flame-pattern': 'radial-gradient(ellipse at bottom, #ea580c 0%, rgba(250, 204, 21, 0.6) 50%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
