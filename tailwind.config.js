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
          yellow: {
            light: '#fbe600',  // Sunny Yellow - Background color, playful and high contrast
            DEFAULT: '#fbe600',  // Using Sunny Yellow as default for primary usage
            medium: '#e6b700',  // Goldenrod - Detail elements and flag colors (kept for accents)
            dark: '#fdc302'
          },
          brown: {
            light: '#c99f66', // Clay Tan - Brick and sidewalk variation
            DEFAULT: '#8c3f19', // Barn Brown - Roofs and building trims - earthy and rich
            dark: '#1d1203'
          },
          red: {
            light: '#e7661e', // Sunset Orange - Taxi body and accents - warm and punchy
            DEFAULT: '#c9241f', // Firetruck Red - Used on buildings, bus, and taxi - strong 70s red
            dark: '#800000',
          },
          white: {
            cream: '#fff5d6', // Cream White - Window trims and soft backgrounds
            pure: '#ffffff'
          },
          pink: {
            light: '#f595a8', // Candy Pink - Seen in clothing and small accents
            DEFAULT: '#f0a3e9'
          },
          green: {
            light: '#89b84a', // Apple Green - Tree foliage - vibrant but natural
            DEFAULT: '#009422',
            dark: '#005a2d'
          },
          purple: {
            light: '#d5c4dc', // Pastel Purple - Seen in some outfits and signs - soft accent
            DEFAULT: '#9c2ca0',
            dark: '#821882'
          },
          blue: {
            light: '#d9ecf8', // Sky Blue - Streets and sky - calming base color
            DEFAULT: '#98b0e1', // Lilac Blue - Clothing, shading
          },
          gray: {
            DEFAULT: '#4c4c4c', // Charcoal Gray - Text details and outlines
          },
          gold: '#e6b700', // Goldenrod - Detail elements and flag colors
          black: '#000000',
        },
      },
      fontFamily: {
        slab: ['Roboto Slab', 'serif'],
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