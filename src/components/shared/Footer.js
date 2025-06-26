import React, { useState } from 'react';
import Divider from './Divider';
import { createTheme } from '../../styles/theme';
import { cn } from '../../lib/utils';
import ContactDialog from '../dialogs/ContactDialog';

function Footer({ isDiscoveryMode }) {
  const theme = createTheme(isDiscoveryMode);
  const { colors } = theme;
  
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  // Contact button styles that match navigation menu items
  const contactButtonClasses = cn(
    "px-4 py-2 rounded-xl text-center font-medium transition-all duration-100 hover:scale-110",
    isDiscoveryMode 
      ? "hover:bg-brand-red hover:text-white" // Discovery mode hover style
      : "hover:bg-brand-brown-light" // Regular mode hover style
  );

  return (
    <footer className={`w-full ${colors.bg.primary} mt-auto py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
          {/* Copyright text */}
          <div className={`${colors.text.primary} mb-4 md:mb-0 pb-2`}>
            © 2025 Find-a-Feeling. All rights reserved.
          </div>
          
          <Divider 
            className="hidden md:block flex-grow mx-8" 
            style={{ marginBottom: '18px' }}
          />
          
          {/* Contact button */}
          <button 
            className={`${contactButtonClasses} ${colors.text.primary}`}
            onClick={() => setIsContactDialogOpen(true)}
          >
            Contact Us
          </button>
          
          <ContactDialog 
            isOpen={isContactDialogOpen} 
            onClose={() => setIsContactDialogOpen(false)}
            isDiscoveryMode={isDiscoveryMode}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer