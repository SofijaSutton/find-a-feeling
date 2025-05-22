import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../../components/ui/navigation-menu';

function AppNavigationMenu({ logo, title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col w-full bg-[#1d1203] py-2">
      <div className="flex justify-between items-center w-full px-4">
        {/* Left side with logo, title and divider */}
        <div className="flex items-center flex-grow text-[#fff1be]">
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={logo} 
              className="h-10 mr-2" 
              alt="find-a-feeling logo" 
            />
            <span className="font-bold font-slab text-4xl whitespace-nowrap hidden min-[450px]:inline">{title}</span>
          </Link>
          
          {/* Divider line - hidden on mobile and small screens, always visible on large screens, conditionally visible on medium screens */}
          <div 
            className={`h-[0.05em] bg-[#84520d] hidden ${!isMenuOpen ? 'md:block' : ''} lg:block flex-grow self-end mb-2 ml-12 mr-8`}
            style={{ minWidth: '100px', marginTop: '30px' }}
          />
        </div>
        
        {/* Mobile menu button - only visible on small and medium screens */}
        <button 
          className="lg:hidden text-[#fff1be] p-2 hover:text-[#f4baef] transition-all duration-200 group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:h-9 group-hover:w-9 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:h-9 group-hover:w-9 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop navigation - visible on large screens and up */}
        <NavigationMenu className="hidden lg:flex items-center">
          <NavigationMenuList className="list-none flex">
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuLink to="/" className="flex items-center">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuLink to="/quiz" className="flex items-center">Start Quiz</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuLink to="/resources" className="flex items-center">Resources</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* Mobile navigation - only visible on small and medium screens when menu is open */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1d1203] w-full">
          <nav className="flex flex-col items-center">
            <Link to="/" className="w-full text-center py-3 text-[#fefae0] text-xl hover:bg-[#2a1c05] hover:text-[#f4baef] hover:text-2xl transition-all duration-200" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/quiz" className="w-full text-center py-3 text-[#fefae0] text-xl hover:bg-[#2a1c05] hover:text-[#f4baef] hover:text-2xl transition-all duration-200" onClick={toggleMenu}>
              Start Quiz
            </Link>
            <Link to="/resources" className="w-full text-center py-3 text-[#fefae0] text-xl hover:bg-[#2a1c05] hover:text-[#f4baef] hover:text-2xl transition-all duration-200" onClick={toggleMenu}>
              Resources
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default AppNavigationMenu;