import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand Color Palette
      colors: {
        // Maple Red Primary Scale
        'maple-red': {
          50: 'var(--maple-red-50)',
          100: 'var(--maple-red-100)',
          200: 'var(--maple-red-200)',
          300: 'var(--maple-red-300)',
          400: 'var(--maple-red-400)',
          500: 'var(--maple-red-500)',
          600: 'var(--maple-red-600)',
          700: 'var(--maple-red-700)',
          800: 'var(--maple-red-800)',
          900: 'var(--maple-red-900)',
          950: 'var(--maple-red-950)',
        },
        // Deep Charcoal Secondary Scale
        charcoal: {
          50: 'var(--charcoal-50)',
          100: 'var(--charcoal-100)',
          200: 'var(--charcoal-200)',
          300: 'var(--charcoal-300)',
          400: 'var(--charcoal-400)',
          500: 'var(--charcoal-500)',
          600: 'var(--charcoal-600)',
          700: 'var(--charcoal-700)',
          800: 'var(--charcoal-800)',
          900: 'var(--charcoal-900)',
          950: 'var(--charcoal-950)',
        },
        // Semantic Colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        // Surface System (Paper Design)
        surface: {
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
          4: 'var(--surface-4)',
        },
        // Status Colors
        success: {
          100: 'var(--success-100)',
          500: 'var(--success-500)',
          700: 'var(--success-700)',
        },
        warning: {
          100: 'var(--warning-100)',
          500: 'var(--warning-500)',
          700: 'var(--warning-700)',
        },
        error: {
          100: 'var(--error-100)',
          500: 'var(--error-500)',
          700: 'var(--error-700)',
        },
        gold: 'var(--gold)',
      },
      // Typography System
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      // Border Radius System
      borderRadius: {
        xs: 'calc(var(--radius) - 6px)',
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      // Box Shadow / Elevation System
      boxShadow: {
        'elevation-0': 'var(--elevation-0)',
        'elevation-1': 'var(--elevation-1)',
        'elevation-2': 'var(--elevation-2)',
        'elevation-3': 'var(--elevation-3)',
        'elevation-4': 'var(--elevation-4)',
        'elevation-5': 'var(--elevation-5)',
        'elevation-6': 'var(--elevation-6)',
      },
      // Animation System
      transitionDuration: {
        fast: 'var(--motion-duration-fast)',
        base: 'var(--motion-duration-base)',
        slow: 'var(--motion-duration-slow)',
        slower: 'var(--motion-duration-slower)',
      },
      transitionTimingFunction: {
        'ease-spring': 'var(--motion-ease-spring)',
      },
      // Animation Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in var(--motion-duration-base) var(--motion-ease-out)',
        'slide-in-up': 'slide-in-up var(--motion-duration-base) var(--motion-ease-out)',
        'slide-in-down': 'slide-in-down var(--motion-duration-base) var(--motion-ease-out)',
        'slide-in-left': 'slide-in-left var(--motion-duration-base) var(--motion-ease-out)',
        'slide-in-right': 'slide-in-right var(--motion-duration-base) var(--motion-ease-out)',
        'scale-in': 'scale-in var(--motion-duration-base) var(--motion-ease-spring)',
      },
      // Spacing Scale (extends default)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config