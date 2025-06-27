import { cn } from "../lib/utils";

/**
 * Global theme configuration for Find-a-Feeling
 * This file centralizes all theme variables and provides helper functions
 * to generate consistent styling across the application
 * 
 * IMPORTANT: These color values should be kept in sync with tailwind.config.js
 * Any changes here should also be reflected in the Tailwind configuration
 */

// Base color palette - raw color values for reference
// These should match the values in tailwind.config.js brand colors
const baseColors = {
  yellow: {
    light: '#fbe600',  // Sunny Yellow - Background color, playful and high contrast
    DEFAULT: '#fbe600', // Using Sunny Yellow as default for primary usage
    medium: '#e6b700',  // Goldenrod - Detail elements and flag colors (kept for accents)
    dark: '#fdc302'  // Should match brand.yellow.dark in tailwind.config.js
  },
  brown: {
    light: '#c99f66', // Clay Tan - Brick and sidewalk variation
    medium: '#8c3f19', // Barn Brown - Roofs and building trims - earthy and rich
    dark: '#1d1203'
  },
  red: {
    light: '#e7661e', // Sunset Orange - Taxi body and accents - warm and punchy
    medium: '#c9241f', // Firetruck Red - Used on buildings, bus, and taxi - strong 70s red
    dark: '#800000',
  },
  white: {
    cream: '#fff5d6', // Cream White - Window trims and soft backgrounds
    pure: '#ffffff'
  },
  pink: {
    light: '#f595a8', // Candy Pink - Seen in clothing and small accents
    medium: '#f0a3e9'
  },
  green: {
    light: '#89b84a', // Apple Green - Tree foliage - vibrant but natural
    medium: '#009422',
    dark: '#005a2d'  // Added to match tailwind.config.js
  },
  purple: {
    light: '#d5c4dc', // Pastel Purple - Seen in some outfits and signs - soft accent
    medium: '#9c2ca0',
    dark: '#821882'  // Added to match tailwind.config.js
  },
  blue: {
    light: '#d9ecf8', // Sky Blue - Streets and sky - calming base color
    medium: '#98b0e1', // Lilac Blue - Clothing, shading
  },
  gray: {
    medium: '#4c4c4c', // Charcoal Gray - Text details and outlines
  },
  gold: '#e6b700', // Goldenrod - Detail elements and flag colors
  black: '#000000',
};

/**
 * Creates theme configuration based on the current mode
 * @param {boolean} isDiscoveryMode - Whether the app is in discovery mode
 * @returns {Object} Theme configuration object
 */
const createTheme = (isDiscoveryMode = false) => {
  // Theme colors mapped to Tailwind classes
  const colors = {
    // Background colors
    bg: {
      primary: isDiscoveryMode ? "bg-brand-yellow" : "bg-brand-brown-dark",
      secondary: isDiscoveryMode ? "bg-brand-white-cream" : "bg-brand-brown-light",
      toggle: isDiscoveryMode ? "bg-brand-black" : "bg-brand-brown",
      activeItem: isDiscoveryMode ? "bg-brand-red" : "",
      card: isDiscoveryMode ? "bg-brand-white-cream" : "bg-white",
    },
    
    // Hover background colors
    hoverBg: {
      active: isDiscoveryMode ? "hover:bg-brand-red-dark" : "hover:bg-brand-brown-light",
      inactive: isDiscoveryMode ? "hover:bg-brand-yellow" : "hover:bg-brand-brown-dark",
      button: isDiscoveryMode ? "hover:bg-brand-green-dark" : "hover:bg-brand-purple-dark",
    },

    // Text colors
    text: {
      primary: isDiscoveryMode ? "text-brand-brown-dark" : "text-brand-white-cream",
      title: isDiscoveryMode ? "text-brand-red" : "text-brand-white-cream",
      altTitle: isDiscoveryMode ? "text-brand-green" : "text-brand-purple",
      altTitleH2: isDiscoveryMode ? "text-brand-black" : "text-brand-white-cream",
      activeItem: isDiscoveryMode ? "text-white" : "text-brand-gold font-medium",
      cardTitle: isDiscoveryMode ? "text-brand-green" : "text-brand-purple",
      cardDescription: isDiscoveryMode ? "text-brand-brown-dark" : "text-gray-500",
      cardBody: isDiscoveryMode ? "text-brand-brown-dark" : "text-gray-700",
      headerText: isDiscoveryMode ? "text-gray-600" :  "text-brand-green",
      link: isDiscoveryMode ? "text-brand-green" : "text-purple-600",
    },
    
    // Hover text colors
    hoverText: {
      default: isDiscoveryMode ? "hover:text-brand-red-dark" : "hover:text-brand-pink-light",
      active: isDiscoveryMode ? "hover:text-white" : "",
      inactive: isDiscoveryMode ? "hover:text-brand-red" : "",
      link: isDiscoveryMode ? "hover:text-brand-green-dark" : "hover:underline",
    },

    // Border colors
    border: {
      primary: "border-brand-brown",
      card: isDiscoveryMode ? "border-brand-yellow" : "border-gray-200",
    },
    
    // Raw hex values for non-Tailwind usage
    hex: {
      title: isDiscoveryMode ? baseColors.green.medium : baseColors.gold,
      asterisk: isDiscoveryMode ? baseColors.red.light : '#ff4d4d',
    }
  };

  // Component-specific style combinations
  const components = {
    // Navigation components
    navigation: {
      activeItemHover: isDiscoveryMode 
        ? "hover:text-white hover:bg-brand-red-dark rounded-xl" 
        : "font-medium",
      toggleButton: cn(
        "relative inline-flex h-6 w-11 items-center rounded-full",
        "transition-colors focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ring focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background hover:scale-110",
        "transition-transform duration-100",
        colors.bg.toggle
      ),
      toggleIndicator: cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white",
        "shadow-lg ring-0 transition-transform",
        isDiscoveryMode ? 'translate-x-5' : 'translate-x-0.5'
      ),
      mobileMenuContainer: cn(
        "lg:hidden border rounded-lg p-4 shadow-lg overflow-hidden",
        "absolute right-4 top-16 p-6",
        colors.border.primary,
        colors.bg.secondary
      ),
      divider: "h-[0.05em] bg-brand-brown hidden lg:block flex-grow self-end mb-2 ml-12 mr-8",
      menuButtonBase: "lg:hidden p-2 transition-all duration-100 group",
      menuIcon: "h-8 w-8 group-hover:h-9 group-hover:w-9 transition-all duration-100",
      desktopNav: "hidden lg:flex items-center justify-end",
      mobileMenuShadow: '7px 6px 0px 0px ' + baseColors.brown.medium,
    },
    
    // Button components
    button: {
      primary: cn(
        "px-4 py-2 rounded-md font-medium transition-all duration-200",
        isDiscoveryMode ? "bg-brand-red text-white hover:bg-brand-red-dark" : "bg-brand-brown text-brand-white-cream hover:bg-brand-brown-light"
      ),
      secondary: cn(
        "px-4 py-2 rounded-md font-medium border transition-all duration-200",
        isDiscoveryMode ? "border-brand-red text-brand-red hover:bg-brand-white-cream" : "border-brand-brown text-brand-white-cream hover:bg-brand-brown-dark"
      ),
      cta: cn(
        "px-8 py-4 rounded-lg font-bold transition-all duration-200 text-white",
        isDiscoveryMode ? "bg-brand-green hover:bg-brand-green-dark" : "bg-brand-purple hover:bg-brand-purple-dark"
      ),
      quizStart: cn(
        "w-full py-2 px-4 rounded text-center font-bold transition-all duration-200 text-white",
        isDiscoveryMode ? "bg-brand-green hover:bg-brand-green-dark" : "bg-purple-600 hover:bg-purple-700"
      ),
    },
    
    // Card components
    card: {
      container: cn(
        "rounded-lg overflow-hidden shadow-md",
        isDiscoveryMode ? "bg-brand-white-cream border border-brand-yellow" : "bg-brand-brown-light border border-brand-brown"
      ),
      header: cn(
        "p-4 font-bold",
        isDiscoveryMode ? "bg-brand-yellow-light text-brand-brown-dark" : "bg-brand-brown-light text-brand-white-cream"
      ),
      body: cn(
        "p-4",
        isDiscoveryMode ? "text-brand-brown-dark" : "text-brand-white-cream"
      ),
      // New styles for homepage cards
      homeContainer: cn(
        "rounded-lg border shadow-sm",
        isDiscoveryMode ? "bg-brand-white-cream border-brand-yellow" : "bg-white border-gray-200"
      ),
      homeTitle: cn(
        "text-2xl font-bold",
        isDiscoveryMode ? "text-brand-green" : "text-brand-purple"
      ),
      homeDescription: cn(
        "text-sm",
        isDiscoveryMode ? "text-brand-brown-dark" : "text-gray-500"
      ),
      homeContent: cn(
        "space-y-4",
        isDiscoveryMode ? "text-brand-brown-dark" : "text-gray-700"
      ),
    },
    
    // Form components
    form: {
      input: cn(
        "w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 transition-all duration-200",
        isDiscoveryMode 
          ? "border-brand-yellow bg-white text-brand-brown-dark focus:ring-brand-red" 
          : "border-brand-brown bg-brand-brown-dark text-brand-white-cream focus:ring-brand-gold"
      ),
      label: cn(
        "block mb-2 font-medium",
        isDiscoveryMode ? "text-brand-brown-dark" : "text-brand-white-cream"
      ),
    },
    
    // Link components
    link: {
      default: cn(
        "transition-colors",
        isDiscoveryMode ? "text-brand-green hover:text-brand-green-dark" : "text-purple-600 hover:underline"
      ),
    },
    
    // Text components
    text: {
      header: cn(
        "text-lg",
        isDiscoveryMode ? "text-brand-green" : "text-gray-600"
      ),
      body: cn(
        isDiscoveryMode ? "text-brand-brown-dark" : "text-gray-700"
      ),
      footer: cn(
        "text-sm",
        isDiscoveryMode ? "text-brand-brown-dark" : "text-gray-500"
      ),
    },
    
    // Separator
    separator: cn(
      "my-8",
      isDiscoveryMode ? "bg-brand-yellow-light" : "bg-gray-200"
    ),
  };

  /**
   * Helper function to generate navigation link classes
   * @param {boolean} isActivePath - Whether this link represents the current path
   * @param {boolean} isMobile - Whether this is for mobile view
   * @returns {string} Combined CSS classes
   */
  const getNavLinkClass = (isActivePath, isMobile = false) => {
    // Base classes
    const baseClasses = isActivePath ? colors.text.activeItem : colors.text.primary;
    
    // Mobile-specific classes
    if (isMobile) {
      return cn(
        baseClasses,
        "w-full block text-center py-3 text-xl transition-all duration-100",
        isActivePath ? 'font-bold' : 'font-light',
        isDiscoveryMode 
          ? (isActivePath 
              ? `${colors.hoverBg.active} hover:text-white rounded-md` 
              : `${colors.hoverText.inactive} ${colors.hoverBg.inactive} rounded-md`) 
          : `${colors.hoverBg.inactive} rounded-md`,
        "hover:text-2xl"
      );
    } 
    // Desktop-specific classes
    else {
      return cn(
        baseClasses,
        isActivePath ? components.navigation.activeItemHover : colors.hoverText.default
      );
    }
  };

  /**
   * Helper function to generate navigation item container classes
   * @param {boolean} isActivePath - Whether this item represents the current path
   * @param {boolean} isMobile - Whether this is for mobile view
   * @returns {string} Combined CSS classes
   */
  const getNavItemClass = (isActivePath, isMobile = false) => {
    if (isMobile) {
      return cn(
        "w-full text-center rounded-md",
        isActivePath ? colors.bg.activeItem : ''
      );
    } else {
      return cn(
        "flex items-center",
        isActivePath ? 'rounded-xl' : '',
        isActivePath ? colors.bg.activeItem : ''
      );
    }
  };

  return {
    baseColors,
    colors,
    components,
    getNavLinkClass,
    getNavItemClass
  };
};

export { createTheme, baseColors }