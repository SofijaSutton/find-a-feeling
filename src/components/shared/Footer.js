import React, { useState } from 'react';
import Divider from './Divider';
import createGlobalStyles from '../../styles/globalStyles';
import { cn } from '../../lib/utils';
import ContactDialog from '../dialogs/ContactDialog';

function Footer({ isDiscoveryMode }) {
  const { colors } = createGlobalStyles(isDiscoveryMode);
  
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  const contactButtonClasses = cn(
    "px-4 py-2 rounded-xl text-center font-medium transition-all duration-100 hover:scale-110",
    isDiscoveryMode 
      ? `${colors.hoverBgActive} hover:text-white`
      : `${colors.hoverBgInactive}`
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
            isDiscoveryMode={isDiscoveryMode}
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