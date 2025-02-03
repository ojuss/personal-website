import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#fafafa',
      },
      colors: {
        background: 'hsl(var(--background))',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config

