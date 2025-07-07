import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: 'hsl(var(--primary-light))',
          dark: 'hsl(var(--primary-dark))',
          hover: 'hsl(var(--primary-hover))',
          glow: 'hsl(var(--primary-glow))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'corporate-black': {
          DEFAULT: 'hsl(var(--corporate-black))',
          foreground: 'hsl(var(--corporate-black-foreground))',
        },
        'corporate-white': {
          DEFAULT: 'hsl(var(--corporate-white))',
          foreground: 'hsl(var(--corporate-white-foreground))',
        },
        'accent-blue': {
          DEFAULT: 'hsl(var(--accent-blue))',
          foreground: 'hsl(var(--accent-blue-foreground))',
          light: 'hsl(var(--accent-blue-light))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        // New gradient colors
        gradient: {
          start: 'hsl(var(--gradient-start))',
          end: 'hsl(var(--gradient-end))',
          mid: 'hsl(var(--gradient-mid))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: 'calc(var(--radius) - 6px)',
        full: '9999px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'carousel-infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-advanced': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        // New sexy animations
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'wave': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(5deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(5px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'text-gradient': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'border-pulse': {
          '0%, 100%': { 'border-color': 'hsl(var(--primary))' },
          '50%': { 'border-color': 'hsl(var(--primary-light))' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.3s ease-out',
        'scroll': 'scroll 30s linear infinite',
        'carousel-infinite-scroll': 'carousel-infinite-scroll 40s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float-advanced': 'float-advanced 8s ease-in-out infinite',
        // New animations
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'text-gradient': 'text-gradient 6s ease infinite',
        'border-pulse': 'border-pulse 3s ease-in-out infinite',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'dm-sans': ['DM Sans', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        // New font stacks
        'mono': ['IBM Plex Mono', 'Menlo', 'monospace'],
        'serif': ['Georgia', 'serif'],
        'fancy': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-corporate': 'var(--gradient-corporate)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-elite': 'var(--gradient-elite)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-footer': 'var(--gradient-footer)',
        // New gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
      },
      boxShadow: {
        'corporate': 'var(--shadow-corporate)',
        'card': 'var(--shadow-card)',
        'hover': 'var(--shadow-hover)',
        'elite': 'var(--shadow-elite)',
        'glow': 'var(--shadow-glow)',
        // New shadows
        'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'hard': '0 4px 12px rgba(0, 0, 0, 0.16)',
        'inner-lg': 'inset 0 4px 12px rgba(0, 0, 0, 0.12)',
        'neon': '0 0 10px hsl(var(--primary-glow)), 0 0 20px hsl(var(--primary-glow))',
        'depth': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      // New extensions
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'smooth': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      zIndex: {
        '1': '1',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '98': '0.98',
        '97': '0.97',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function({ addUtilities }) {
      addUtilities({
        // Text utilities
        '.text-gradient': {
          background: 'linear-gradient(to right, var(--tw-gradient-stops))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.hyphens-auto': {
          'hyphens': 'auto',
          '-webkit-hyphens': 'auto',
          '-ms-hyphens': 'auto',
        },
        // Border utilities
        '.border-gradient': {
          borderImage: 'linear-gradient(to right, var(--tw-gradient-stops)) 1',
        },
        '.border-dotted-gradient': {
          borderImage: 'repeating-linear-gradient(to right, var(--tw-gradient-stops)) 1',
          borderImageSlice: '1',
        },
        // Scroll utilities
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-default': {
          '-ms-overflow-style': 'auto',
          'scrollbar-width': 'auto',
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
        // 3D effects
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective': {
          'perspective': '1000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        // Glass morphism
        '.glass': {
          background: 'rgba(255, 255, 255, 0.08)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
        // Special effects
        '.shadow-text': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.shadow-text-lg': {
          'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.3)',
        },
      });
    }),
  ],
} satisfies Config;