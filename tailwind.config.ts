import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bank: {
          navy: '#0F2B46',
          teal: '#0E6B6B',
          gold: '#C79A43',
          slate: '#5B6471',
          ivory: '#F6F8FA',
          white: '#FFFFFF',
          success: '#1D8F5F',
          warning: '#D98B1A',
          danger: '#C43D3D',
          text: '#1A1F2A',
          muted: '#4B5563',
          border: '#D9E1E7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        kannada: ['Noto Sans Kannada', 'Nirmala UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(15, 43, 70, 0.06)',
      },
      maxWidth: {
        container: '1200px',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
