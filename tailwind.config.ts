import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Noto Sans Japanese'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
