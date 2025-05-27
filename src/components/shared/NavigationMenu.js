import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../components/ui/navigation-menu';
import createNavigationStyles from './NavigationMenuStyles';
import Divider from './Divider';

function AppNavigationMenu({ logo, title, onModeChange }) {
  const location = useLocation();

  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Initialize state from localStorage if available
  const [isDiscoveryMode, setIsDiscoveryMode] = useState(() => {
    const savedMode = localStorage.getItem('discoveryMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Save discovery mode preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('discoveryMode', JSON.stringify(isDiscoveryMode));
    // Call the onModeChange callback to update app-wide styles
    if (onModeChange) {
      onModeChange(isDiscoveryMode);
    }
  }, [isDiscoveryMode, onModeChange]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    // Attach then clean up the listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDiscoveryMode = () => setIsDiscoveryMode(!isDiscoveryMode);
  const isActive = (path) => location.pathname === path;

  const { colors, styles, getNavLinkClass, getNavItemClass } = createNavigationStyles(isDiscoveryMode);

  // Navigation items - could be moved outside component or passed as props for better reusability
  const navItems = [
    { path: '/', label: 'About' },
    { path: '/quiz', label: 'Start Quiz' },
    { path: '/resources', label: 'Resources' }
  ];

  // Extracted components for better readability
  const DiscoveryModeToggle = ({ className, isMobile = false }) => (
    <div className={`flex items-center ${className} ${isMobile ? 'justify-center w-full py-4 mt-2 ' : 'mr-6 whitespace-nowrap'}`}>
      <span className={`mr-2 ${isMobile ? '' : 'font-bold'} ${colors.text}`}>Discovery Mode</span>
      {/* TODO: replace with shadcn switch */}
      <button 
        onClick={toggleDiscoveryMode}
        className={styles.toggleButton}
        role="switch"
        aria-checked={isDiscoveryMode}
      >
        <span className={`${styles.toggleIndicator} z-10 flex items-center justify-center`}>
          {isDiscoveryMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path fill="000" d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z">
                <animateTransform id="eosIconsCompass0" attributeName="transform" attributeType="XML" begin="0;eosIconsCompass2.end" dur="1s" from="-90 12 12" to="0 12 12" type="rotate"></animateTransform>
                <animateTransform id="eosIconsCompass1" attributeName="transform" attributeType="XML" begin="eosIconsCompass0.end" dur="1s" from="0 12 12" to="-90 12 12" type="rotate"></animateTransform>
                <animateTransform id="eosIconsCompass2" attributeName="transform" attributeType="XML" begin="eosIconsCompass1.end" dur="1s" from="-90 12 12" to="270 12 12" type="rotate"></animateTransform>
              </path>
            </svg>         
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#9c2ca0]" viewBox="0 0 1200 1200">
              <path fill="currentColor" d="M471.749 0c-94.045 0-170.273 76.305-170.273 170.442c0 46.55 18.624 88.767 48.842 119.528H.001v284.069c31.224-36.108 77.389-59.006 128.842-59.006c94.044 0 170.273 76.304 170.273 170.44c0 94.137-76.229 170.44-170.274 170.44c-51.452 0-97.617-22.897-128.842-59.005V1200h368c-38.914-31.238-63.832-79.2-63.832-133.016c0-94.14 76.229-170.441 170.274-170.441c94.044 0 170.272 76.305 170.272 170.44c0 53.815-24.918 101.776-63.832 133.017h328.253V843.945c30.828 30.945 73.48 50.07 120.59 50.07c94.045 0 170.273-76.305 170.273-170.441c0-94.14-76.23-170.441-170.273-170.441c-47.109 0-89.762 19.125-120.59 50.07V289.969H593.18c30.228-30.763 48.843-72.971 48.843-119.528C642.023 76.304 565.793 0 471.749 0"/>
            </svg>
          )}
        </span>
      </button>
    </div>
  );

  const MenuButton = () => (
    // TODO: replace with shadcn button?
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
        {/* Left side logo and title */}
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
        <Divider 
          className="hidden lg:block flex-grow mx-8" 
          style={{ marginBottom: '-8px' }}
        />
        
        {/* Right side with discovery mode toggle and navigation */}
        <div className="flex">
          {/* Discovery Mode Toggle - visible on large screens only */}
          <DiscoveryModeToggle className="hidden lg:flex"  />

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
          ref={menuRef}
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
                  onClick={toggleMenu}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <DiscoveryModeToggle isMobile={true} />
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}

export default AppNavigationMenu;