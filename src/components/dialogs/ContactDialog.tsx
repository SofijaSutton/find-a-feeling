import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
// import { Label } from '../../components/ui/label';
// import { Input } from '../../components/ui/input';
// import { Textarea } from '../../components/ui/textarea';
import createNavigationStyles from '../shared/NavigationMenuStyles';
import { cn } from '../../lib/utils';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isDiscoveryMode: boolean;
}

function ContactDialog({ isOpen, onClose, isDiscoveryMode }: ContactDialogProps) {
  // Get styles based on current mode
  const { baseColors, colors, styles } = createNavigationStyles(isDiscoveryMode);
  
  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted');
    // Close the dialog after submission
    onClose();
  };
  
  // Button styles based on discovery mode
  const buttonClasses = cn(
    "px-4 py-2 text-white font-medium transition-all duration-200",
    isDiscoveryMode 
      ? "bg-[#ff0000] hover:bg-[#800000]" // Discovery mode style
      : "bg-[#84520d] hover:bg-[#2a1c05]" // Regular mode style
  );

  // Dialog background color based on mode
  const dialogBgColor = isDiscoveryMode 
    ? baseColors.yellow.light // '#f0e448' in discovery mode
    : baseColors.brown.medium; // '#84520d' in regular mode

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "sm:max-w-[425px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg",
          isDiscoveryMode ? "bg-[#f0e448] border-[#84520d]" : "bg-[#84520d] border-[#f0e448]"
        )}
        style={{
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          border: `2px solid ${isDiscoveryMode ? baseColors.brown.medium : baseColors.yellow.light}`
        }}
      >
          <DialogTitle className={colors.title}>Contact Us</DialogTitle>
          <DialogDescription className={colors.text}>
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        
        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className={colors.text}>Name</Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              className={`${isDiscoveryMode ? 'bg-white' : 'bg-[#2a1c05]'} ${colors.text}`}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email" className={colors.text}>Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Your email address" 
              className={`${isDiscoveryMode ? 'bg-white' : 'bg-[#2a1c05]'} ${colors.text}`}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="message" className={colors.text}>Message</Label>
            <Textarea 
              id="message" 
              placeholder="Your message" 
              className={`${isDiscoveryMode ? 'bg-white' : 'bg-[#2a1c05]'} ${colors.text} min-h-[100px]`}
              required
            />
          </div>
          
            <Button 
              type="submit" 
              className={buttonClasses}
            >
              Send Message
            </Button>
        </form> */}
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;