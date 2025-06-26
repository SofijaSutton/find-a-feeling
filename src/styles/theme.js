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
    light: '#f0e448',  // Should match brand.yellow.light in tailwind.config.js
    medium: '#e6da40',  // Should match brand.yellow.DEFAULT in tailwind.config.js
    dark: '#fdc302'  // Should match brand.yellow.dark in tailwind.config.js
  },
  brown: {
    light: '#2a1c05',
    medium: '#84520d',
    dark: '#1d1203'
  },
  red: {
    light: '#ff0000',
    dark: '#800000',
  },
  white: {
    cream: '#fff1be',
    pure: '#ffffff'
  },
  pink: {
    light: '#f4baef',
    medium: '#f0a3e9'
  },
  green: {
    medium: '#009422',
    dark: '#005a2d'  // Added to match tailwind.config.js
  },
  purple: {
    medium: '#9c2ca0',
    dark: '#821882'  // Added to match tailwind.config.js
  },
  gold: '#f9d93d',
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
    },
    
    // Hover background colors
    hoverBg: {
      active: isDiscoveryMode ? "hover:bg-brand-red-dark" : "hover:bg-brand-brown-light",
      inactive: isDiscoveryMode ? "hover:bg-brand-yellow" : "hover:bg-brand-brown-dark",
    },

    // Text colors
    text: {
      primary: isDiscoveryMode ? "text-brand-brown-dark" : "text-brand-white-cream",
      title: isDiscoveryMode ? "text-brand-red" : "text-brand-white-cream",
      altTitle: isDiscoveryMode ? "text-brand-green" : "text-brand-purple",
      altTitleH2: isDiscoveryMode ? "text-brand-black" : "text-brand-white-cream",
      activeItem: isDiscoveryMode ? "text-white" : "text-brand-gold font-medium",
    },
    
    // Hover text colors
    hoverText: {
      default: isDiscoveryMode ? "hover:text-brand-red-dark" : "hover:text-brand-pink-light",
      active: isDiscoveryMode ? "hover:text-white" : "",
      inactive: isDiscoveryMode ? "hover:text-brand-red" : "",
    },

    // Border colors
    border: {
      primary: "border-brand-brown",
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
    }
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