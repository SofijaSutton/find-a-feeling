// Navigation menu theme colors and styles
const createNavigationStyles = (isDiscoveryMode) => {
  // Base colors - these are direct color values
  const baseColors = {
    yellow: {
      light: '#f0e448',
      medium: '#e6da40',
      dark: '#fdc302'
    },
    brown: {
      light: '#2a1c05',
      medium: '#84520d',
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
      light: '#f4baef',
      medium: '#f0a3e9'
    },
    gold: '#f9d93d',
    black: '#000000',
  };

  // Theme colors based on mode - these are Tailwind classes
  const colors = {
    // Background colors
    bg: isDiscoveryMode ? "bg-[#f0e448]" : "bg-[#1d1203]",
    altBg: isDiscoveryMode ? "bg-[#fff1be]" : "bg-[#462b07]",
    toggleBg: isDiscoveryMode ? "bg-[#000]" : "bg-[#84520d]",
    activeItemBg: isDiscoveryMode ? "bg-[#ff0000]" : "",
    hoverBgActive: isDiscoveryMode ? "hover:bg-[#800000]" : "hover:bg-[#2a1c05]",
    hoverBgInactive: isDiscoveryMode ? "hover:bg-[#e6da40]" : "hover:bg-[#1d1203]",

    // Text colors
    text: isDiscoveryMode ? "text-[#1d1203]" : "text-[#fff1be]",
    title: isDiscoveryMode ? "text-[#ff0000]" : "text-[#fff1be]",
    altTitle: isDiscoveryMode ? "text-[#009422]" : "text-[#9c2ca0]",
    titleHex: isDiscoveryMode? "#009422" : "#f9d93d",  // will want to recategorize this
    altTitleH2: isDiscoveryMode ? "text-[#000]" : "text-[#fff1be]",  // update and organize names and values
    activeItemText: isDiscoveryMode ? "text-white" : "text-[#f9d93d] font-medium",
    hoverText: isDiscoveryMode ? "hover:text-[#800000]" : "hover:text-[#f4baef]",
    hoverTextActive: isDiscoveryMode ? "hover:text-white" : "",
    hoverTextInactive: isDiscoveryMode ? "hover:text-[#ff0000]" : "",
  };

  // Combined styles
  const styles = {
    activeItemHover: isDiscoveryMode 
      ? "hover:text-white hover:bg-[#800000] rounded-xl" 
      : "font-medium",
    toggleButton: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${colors.toggleBg} hover:scale-110 transition-transform duration-100`,
    toggleIndicator: `pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${isDiscoveryMode ? 'translate-x-5' : 'translate-x-0.5'}`,
    mobileMenuContainer: `lg:hidden border border-[#84520d] rounded-lg p-4 shadow-lg overflow-hidden ${colors.altBg} absolute right-4 top-16 p-6`,
    divider: "h-[0.05em] bg-[#84520d] hidden lg:block flex-grow self-end mb-2 ml-12 mr-8",
    menuButtonBase: "lg:hidden p-2 transition-all duration-100 group",
    menuIcon: "h-8 w-8 group-hover:h-9 group-hover:w-9 transition-all duration-100",
    desktopNav: "hidden lg:flex items-center justify-end",
    mobileMenuShadow: '7px 6px 0px 0px #84520d',
  };

  // Helper function to generate navigation link classes
  const getNavLinkClass = (isActivePath, isMobile = false) => {
    // Base classes
    let classes = `${isActivePath ? colors.activeItemText : colors.text} `;
    
    // Mobile-specific classes
    if (isMobile) {
      classes += `w-full block text-center py-3 text-xl 
        ${isDiscoveryMode 
          ? (isActivePath ? `${colors.hoverBgActive} hover:text-white rounded-md` : `${colors.hoverTextInactive} ${colors.hoverBgInactive} rounded-md`) 
          :  `${colors.hoverBgInactive} rounded-md`
        } 
        hover:text-2xl transition-all duration-100 ${isActivePath ? 'font-bold' : 'font-light'}`;
    } 
    // Desktop-specific classes
    else {
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

export default createNavigationStyles;