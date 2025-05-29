import React, { useState } from 'react';
import Divider from './Divider';
import createNavigationStyles from './NavigationMenuStyles';
import { cn } from '../../lib/utils';
import ContactDialog from '../dialogs/ContactDialog';

function Footer({ isDiscoveryMode }) {
  // Get styles based on current mode
  const { colors, styles } = createNavigationStyles(isDiscoveryMode);
  
  // State for dialog open/close
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  // Contact button styles that match navigation menu items
  const contactButtonClasses = cn(
    "px-4 py-2 rounded-xl text-center font-medium transition-all duration-100 hover:scale-110",
    isDiscoveryMode 
      ? "hover:bg-[#ff0000] hover:text-white" // Discovery mode hover style
      : "hover:bg-[#2a1c05]" // Regular mode hover style
  );

  return (
    <footer className={`w-full ${colors.bg} mt-auto py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
          {/* Copyright text */}
          <div className={`${colors.text} mb-4 md:mb-0 pb-2`}>
            © 2025 Find-a-Feeling. All rights reserved.
          </div>
          
          {/* Center divider - only visible on larger screens */}
          <Divider 
            className="hidden md:block flex-grow mx-8" 
            style={{ marginBottom: '18px' }}
          />
          
          {/* Contact button */}
          <button 
            className={`${contactButtonClasses} ${colors.text}`}
            onClick={() => setIsContactDialogOpen(true)}
          >
            Contact Us
          </button>
          
          {/* Contact Dialog */}
          <ContactDialog 
            isOpen={isContactDialogOpen} 
            onClose={() => setIsContactDialogOpen(false)}
            isDiscoveryMode={isDiscoveryMode}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;