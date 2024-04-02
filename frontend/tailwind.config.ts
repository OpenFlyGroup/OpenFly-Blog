import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#e0ff4f',
          secondary: '#55e63a',
          accent: '#00ebff',
          neutral: 'white',
          'base-100': '#00272b',
          info: '#00bfd6',
          success: '#47cc55',
          warning: '#ffcc70',
          error: '#ff7d85',
        },
      },
      'dark',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
export default config
