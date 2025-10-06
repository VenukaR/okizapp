import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3aa5dd', // Logo color
          light: '#3fc0f0',   // Lighter hover / highlight
		  lightdark: '#0d8ecf', // Slightly darker variant
          dark: '#2a85b1',    // Darker hover / active
		  verydark: '#1c5f7f', // Even darker variant
          foreground: '#ffffff',
		  transparent: '#b0dbf1',
      footer:'#113142'
        },
        background: '#ffffff', // Page background
		
        text: {
          DEFAULT: '#111111',   // Main text
          secondary: '#333333', // Subtitles / secondary info
          light: '#555555',     // Optional light gray text
        },
        accent: {
          DEFAULT: '#ff6b35',   // CTA or small highlights
          foreground: '#ffffff',
        },
        success: '#28a745',
        warning: '#ffc107',
        destructive: '#dc3545',
        muted: '#f0f0f0',       // Cards, borders, subtle dividers
        border: '#e5e7eb',      // Neutral border
        input: '#f9fafb',       // Input background
        ring: '#3aa5dd',        // Focus ring (same as primary)
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
