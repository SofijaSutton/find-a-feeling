// Global theme colors and styles

// need to fi
const createGlobalStyles = (isDiscoveryMode) => {
  // Base colors - these are direct color values
  const baseColors = {
    yellow: {
      light: '#f0e448',
      medium: '#e6da40',
      dark: '#fdc302'
    },
    brown: {
      light: '#2a1c05',
      lightAlt: '#33210a',
      medium: '#84520d',
      mediumAlt: '#462b07',
      dark: '#1d1203'
    },
    red: {
      light: '#ff0000',
      dark: '#800000',
      asterisk: isDiscoveryMode ? '#ff0000' : '#ff4d4d'
    },
    white: {
      cream: '#fff1be',
      pure: '#ffffff'
    },
    pink: {
      light: '#9c2ca0',
      medium: '#6d1f70',
    },
    green: {
      light: '#009422',
      medium: '#005a2d',
    },
    gold: '#f9d93d',
    black: '#000000',
  };

  // Theme colors based on mode - these are Tailwind classes
  const colors = {
    // Background colors
    bg: isDiscoveryMode ? `bg-[${baseColors.yellow.light}]` : `bg-[${baseColors.brown.dark}]`,
    altBg: isDiscoveryMode ? `bg-[${baseColors.white.cream}]` : `bg-[${baseColors.brown.mediumAlt}]`,
    toggleBg: isDiscoveryMode ? `bg-[${baseColors.black}]` : `bg-[${baseColors.brown.medium}]`,
    activeItemBg: isDiscoveryMode ? `bg-[${baseColors.red.light}]` : "",
    hoverBgActive: isDiscoveryMode ? `hover:bg-[${baseColors.red.dark}]` : `hover:bg-[${baseColors.brown.light}]`,
    hoverBgInactive: isDiscoveryMode ? `hover:bg-[${baseColors.yellow.medium}]` : `hover:bg-[${baseColors.brown.dark}]`,

    // Text colors
    text: isDiscoveryMode ? `text-[${baseColors.brown.dark}]` : `text-[${baseColors.white.cream}]`,
    title: isDiscoveryMode ? `text-[${baseColors.red.light}]` : `text-[${baseColors.white.cream}]`,
    altTitle: isDiscoveryMode ? `text-[${baseColors.green.light}]` : `text-[${baseColors.pink.light}]`,
    titleHex: isDiscoveryMode ? baseColors.green.light : baseColors.gold,
    altTitleH2: isDiscoveryMode ? `text-[${baseColors.black}]` : `text-[${baseColors.white.cream}]`,
    activeItemText: isDiscoveryMode ? "text-white" : `text-[${baseColors.gold}] font-medium`,
    hoverText: isDiscoveryMode ? `hover:text-[${baseColors.red.dark}]` : "hover:text-[#f4baef]",
    hoverTextActive: isDiscoveryMode ? "hover:text-white" : "",
    hoverTextInactive: isDiscoveryMode ? `hover:text-[${baseColors.red.light}]` : "",
  };

  // Combined styles
  const styles = {
    activeItemHover: isDiscoveryMode 
      ? `hover:text-white hover:bg-[${baseColors.red.dark}] rounded-xl` 
      : "font-medium",
    toggleButton: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${colors.toggleBg} hover:scale-110 transition-transform duration-100`,
    toggleIndicator: `pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${isDiscoveryMode ? 'translate-x-5' : 'translate-x-0.5'}`,
    mobileMenuContainer: `lg:hidden border border-[${baseColors.brown.medium}] rounded-lg p-4 shadow-lg overflow-hidden ${colors.altBg} absolute right-4 top-16 p-6`,
    divider: `h-[0.05em] bg-[${colors.toggleBg}] hidden lg:block flex-grow self-end mb-2 ml-12 mr-8`,
    menuButtonBase: "lg:hidden p-2 transition-all duration-100 group",
    menuIcon: "h-8 w-8 group-hover:h-9 group-hover:w-9 transition-all duration-100",
    desktopNav: "hidden lg:flex items-center justify-end",
    mobileMenuShadow: `7px 6px 0px 0px ${baseColors.brown.medium}`,
  };

  // Helper function to generate navigation link classes
  const getNavLinkClass = (isActivePath, isMobile = false) => {
    let classes = `${isActivePath ? colors.activeItemText : colors.text} `;
    if (isMobile) {
      classes += `w-full block text-center py-3 text-xl 
        ${isDiscoveryMode 
          ? (isActivePath ? `${colors.hoverBgActive} hover:text-white rounded-md` : `${colors.hoverTextInactive} ${colors.hoverBgInactive} rounded-md`) 
          :  `${colors.hoverBgInactive} rounded-md`
        } 
        hover:text-2xl transition-all duration-100 ${isActivePath ? 'font-bold' : 'font-light'}`;
    } else {
      classes += `${isActivePath ? styles.activeItemHover : colors.hoverText}`;
    }
    return classes;
  };

  // Navigation item classes
  const getNavItemClass = (isActivePath, isMobile = false) => {
    if (isMobile) {
      return `w-full text-center ${isActivePath ? colors.activeItemBg : ''} rounded-md`;
    } else {
      return `flex items-center ${isActivePath ? 'rounded-xl' : ''} ${isActivePath ? colors.activeItemBg : ''}`;
    }
  };

  return {
    baseColors,
    colors,
    styles,
    getNavLinkClass,
    getNavItemClass
  };
};

export default createGlobalStyles;