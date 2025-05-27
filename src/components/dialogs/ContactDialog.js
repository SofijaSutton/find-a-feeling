import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from "../../components/ui/button.jsx";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../ui/textarea.jsx";
import createNavigationStyles from '../shared/NavigationMenuStyles';
import { cn } from '../../lib/utils';
import { useForm } from "react-hook-form";

function ContactDialog({ isOpen, onClose, isDiscoveryMode }) {
  const { colors, styles } = createNavigationStyles(isDiscoveryMode);
  const form = useForm();
  
  const onSubmit = (data) => {
    console.log('Form submitted', data);
        // Example: sendEmail(data);
    onClose();
  };
  
  const buttonClasses = cn(
    "px-4 py-2 text-white font-medium transition-all duration-200",
    isDiscoveryMode 
      ? "bg-[#ff0000] hover:bg-[#800000]"
      : "bg-[#84520d] hover:bg-[#2a1c05]"
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
     <DialogContent 
      className={cn(
        "sm:max-w-[425px]",
        "border border-[#84520d]",
        "rounded-lg p-4",
        "shadow-lg",
        "overflow-hidden",
        "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
        isDiscoveryMode ? 'bg-[#fff1be]' : 'bg-[#291904]'
      )}
        style={{ 
          minWidth: '200px', 
          maxWidth: 'calc(100% - 2rem)', 
          boxShadow: styles.mobileMenuShadow,
          zIndex: 50
        }}  
      >
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24">
            <g fill="none" stroke={colors.titleHex} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
              <path strokeDasharray={64} strokeDashoffset={64} d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
              </path>
              <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></animate>
              </path>
            </g>
          </svg>
        </div>
        <DialogTitle className={`font-bold font-slab text-3xl ${colors.altTitleH2} text-center`}>Contact Us</DialogTitle>        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">     
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={colors.text}>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className={`${isDiscoveryMode ? 'bg-white' : 'bg-[#2a1c05]'} ${colors.text}`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={colors.text}>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} className={`${isDiscoveryMode ? 'bg-white' : 'bg-[#2a1c05]'} ${colors.text} min-h-[100px]`} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className={buttonClasses}
            >
              Send Message
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;