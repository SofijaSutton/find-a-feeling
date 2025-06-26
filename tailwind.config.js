/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        brand: {
          // Brown palette
          brown: {
            light: "#2a1c05",
            DEFAULT: "#84520d", // This is your brand-brown
            dark: "#1d1203",
          },
          // Yellow palette
          yellow: {
            light: "#f0e448",
            DEFAULT: "#e6da40",
            dark: "#fdc302",
          },
          // Red palette
          red: {
            light: "#ff0000",
            DEFAULT: "#ff0000",
            dark: "#800000",
          },
          // White variants
          white: {
            cream: "#fff1be",
            DEFAULT: "#ffffff",
          },
          // Pink palette
          pink: {
            light: "#f4baef",
            DEFAULT: "#f0a3e9",
          },
          // Green palette
          green: {
            DEFAULT: "#009422",
            dark: "#005a2d",
          },
          // Purple palette
          purple: {
            DEFAULT: "#9c2ca0",
            dark: "#821882",
          },
          gold: "#f9d93d",
          black: "#000000",
        },
      },
      fontFamily: {
        slab: ['"Alfa Slab One"', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [
    'border-border',
    // Add commonly used brand color classes to safelist to ensure they're generated
    'bg-brand-brown',
    'bg-brand-brown-light',
    'bg-brand-brown-dark',
    'bg-brand-yellow',
    'bg-brand-red',
    'bg-brand-gold',
    'text-brand-brown',
    'text-brand-yellow',
    'text-brand-red',
    'text-brand-gold',
    'border-brand-brown',
    'bg-brand-green',
    'bg-brand-green-dark',
    'bg-brand-purple',
    'bg-brand-purple-dark',
  ],
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.radix-nav-wrapper': {
          width: '50% !important',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}