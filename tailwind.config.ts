import type { Config } from 'tailwindcss'
import { emerald, amber, violet, neutral } from 'tailwindcss/colors'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#fff',
        green: emerald,
        yellow: amber,
        purple: violet,
        gray: neutral,
        'gray-150': '#EEEFF2',
        'gray-1000': '#050505',
        black: '#050505',
        'design-details': '#458886',
        'design-details-light': '#EEF3F3',
        'design-details-dark': '#273F3F',
        'hacker-news': '#FF965A',
        twitter: '#479BEA',
        current: 'currentColor',
        jet: '#37352f',
        primary: {
          light: '#000000',
          dark: '#ffffff'
        },
        background: {
          light: '#ffffff',
          dark: '#000000'
        },
        surface: {
          light: '#f3f4f6',
          dark: '#111827'
        },
        border: {
          light: '#e5e7eb',
          dark: '#374151'
        }
      }
    }
  },
  plugins: []
} satisfies Config
