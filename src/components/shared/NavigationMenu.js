import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../components/ui/navigation-menu';
import createNavigationStyles from './NavigationMenuStyles';

function AppNavigationMenu({ logo, title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiscoveryMode, setIsDiscoveryMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDiscoveryMode = () => setIsDiscoveryMode(!isDiscoveryMode);

  // Check if a path is active
  const isActive = (path) => location.pathname === path;

  // Get all styles based on current mode
  const { colors, styles, getNavLinkClass, getNavItemClass } = createNavigationStyles(isDiscoveryMode);

  // Navigation items - could be moved outside component or passed as props for better reusability
  const navItems = [
    { path: '/', label: 'About' },
    { path: '/quiz', label: 'Start Quiz' },
    { path: '/resources', label: 'Resources' }
  ];

  // Extracted components for better readability
  const DiscoveryModeToggle = ({ isMobile = false }) => (
    <div className={`flex items-center ${isMobile ? 'justify-center w-full py-4 mt-2' : 'mr-6 whitespace-nowrap'}`}>
      <span className={`mr-2 ${isMobile ? '' : 'font-bold'} ${colors.text}`}>Discovery Mode</span>
      <button 
        onClick={toggleDiscoveryMode}
        className={styles.toggleButton}
        role="switch"
        aria-checked={isDiscoveryMode}
      >
        <span className={styles.toggleIndicator} />
      </button>
    </div>
  );

  const MenuButton = () => (
    <button 
      className={styles.menuButtonBase + ` ${colors.text} ${colors.hoverText}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );

  return (
    <div className={`flex flex-col w-full ${colors.bg}`}>
      <div className="flex justify-between py-2 items-center w-full px-4">
        {/* Left side with logo and title */}
        <div className="flex items-center shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              className="h-12 mr-2" 
              alt="find-a-feeling logo" 
            />
            <span className={`font-bold font-slab text-4xl whitespace-nowrap hidden min-[450px]:inline ${colors.title}`}>
              {title}
            </span>
          </Link>
        </div>
        
        {/* Center divider - only visible on larger screens */}
        <div 
          className={styles.divider}
          style={{ minWidth: '50px', marginTop: '30px' }}
        />
        
        {/* Right side with discovery mode toggle and navigation */}
        <div className="flex items-center">
          {/* Discovery Mode Toggle - visible on large screens only */}
          <div className="hidden lg:block">
            <DiscoveryModeToggle />
          </div>
          
          {/* Mobile menu button - only shows on small/medium screens */}
          <MenuButton />
          
          {/* Desktop navigation - shows on large screens only */}
          <NavigationMenu className={`${colors.bg} ${styles.desktopNav}`}>
            <NavigationMenuList className="list-none flex">
              {navItems.map(item => (
                <NavigationMenuItem 
                  key={item.path}
                  className={getNavItemClass(isActive(item.path))}
                >
                  <NavigationMenuLink 
                    to={item.path} 
                    className={getNavLinkClass(isActive(item.path))}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      
      {/* Mobile navigation - only shows on small/medium screens when menu is open */}
      {isMenuOpen && (
        <NavigationMenu 
          className={styles.mobileMenuContainer}
          style={{ 
            minWidth: '200px', 
            maxWidth: 'calc(100% - 2rem)', 
            boxShadow: styles.mobileMenuShadow,
            zIndex: 50
          }}
        >
          <NavigationMenuList className="flex flex-col items-stretch w-full">
            {navItems.map(item => (
              <NavigationMenuItem 
                key={item.path}
                className={getNavItemClass(isActive(item.path), true)}
              >
                <NavigationMenuLink 
                  to={item.path} 
                  className={getNavLinkClass(isActive(item.path), true)}
                  onClick={toggleMenu} // Close menu when clicking a link
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            
            {/* Discovery Mode Toggle in mobile menu */}
            <DiscoveryModeToggle isMobile={true} />
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}

export default AppNavigationMenu;