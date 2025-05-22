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
      dark: '#800000'
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
    black: '#000000'
  };

  // Theme colors based on mode - these are Tailwind classes
  const colors = {
    // Background colors
    bg: isDiscoveryMode ? "bg-[#f0e448]" : "bg-[#1d1203]",
    toggleBg: isDiscoveryMode ? "bg-[#000]" : "bg-[#84520d]",
    menuItemBg: isDiscoveryMode ? "bg-[#f0e448]" : "",
    activeItemBg: isDiscoveryMode ? "bg-[#ff0000]" : "",
    hoverBgActive: isDiscoveryMode ? "hover:bg-[#800000]" : "hover:bg-[#2a1c05]",
    hoverBgInactive: isDiscoveryMode ? "hover:bg-[#e6da40]" : "hover:bg-[#2a1c05]",
    
    // Text colors
    text: isDiscoveryMode ? "text-[#1d1203]" : "text-[#fff1be]",
    title: isDiscoveryMode ? "text-[#ff0000]" : "text-[#fff1be]",
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
    toggleButton: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${colors.toggleBg} hover:scale-110 transition-transform duration-200`,
    toggleIndicator: `pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${isDiscoveryMode ? 'translate-x-5' : 'translate-x-0.5'}`,
    mobileMenuContainer: `lg:hidden border border-[#84520d] rounded-lg p-4 shadow-lg overflow-hidden ${colors.bg} absolute right-4 top-16 p-6`,
    divider: "h-[0.05em] bg-[#84520d] hidden lg:block flex-grow self-end mb-2 ml-12 mr-8",
    menuButtonBase: "lg:hidden p-2 transition-all duration-200 group",
    menuIcon: "h-8 w-8 group-hover:h-9 group-hover:w-9 transition-all duration-200",
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
          : (isActivePath ? "hover:bg-[#2a1c05] rounded-md" : "hover:bg-[#2a1c05] rounded-md")
        } 
        hover:text-2xl transition-all duration-200 ${isActivePath ? 'font-bold' : 'font-light'}`;
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
      return `w-full text-center ${isActivePath ? colors.activeItemBg : colors.menuItemBg} rounded-md`;
    } else {
      return `flex items-center ${isActivePath ? 'rounded-xl' : ''} ${isActivePath ? colors.activeItemBg : colors.menuItemBg}`;
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