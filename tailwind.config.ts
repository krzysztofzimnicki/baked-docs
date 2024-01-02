import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,mdx,ts,tsx}',
    './_components/**/*.{jsx,js,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

