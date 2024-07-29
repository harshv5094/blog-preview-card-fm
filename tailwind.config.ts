import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'cus-yellow': 'hsl(47, 88%, 63%)',
        'cus-gray-500': 'hsl(0, 0%, 42%)',
        'cus-gray-950': 'hsl(0, 0%, 7%)'
      }
    }
  },
  plugins: []
}
export default config
