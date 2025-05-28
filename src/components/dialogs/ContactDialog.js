import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from "../../components/ui/button.jsx";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../ui/textarea.jsx";
import createNavigationStyles from '../shared/NavigationMenuStyles';
import { cn } from '../../lib/utils';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

function ContactDialog({ isOpen, onClose, isDiscoveryMode }) {
  const { colors, baseColors, styles } = createNavigationStyles(isDiscoveryMode);
  const form = useForm({
    defaultValues: {
      email: '',
      message: ''
    }
  });
  
  const handleClose = () => {
    form.reset();
    onClose();
  }
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/srlsutton@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success('Thank you for your message! We will get back to you shortly.');
        form.reset();
        onClose();
      } else {
        toast.error('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      toast.error('There was an error submitting your message. Please try again.');
    }
  }

  const buttonClasses = cn(
    "px-4 py-2 text-white font-medium transition-all duration-200",
    isDiscoveryMode 
      ? "bg-[#ff0000] hover:bg-[#800000]"
      : "bg-[#84520d] hover:bg-[#2a1c05]"
  );

  const inputClasses = cn(
    isDiscoveryMode 
      ? "border-[#2a1c05] focus:!border-[#2a1c05] focus:!ring-[#2a1c05]/50" 
      : "border-[#84520d] focus:!border-[#fff1be] focus:!ring-[#fff1be]/50"
  );

  return (
    <>
    <Dialog open={isOpen} onOpenChange={handleClose}>
     <DialogContent 
      className={cn(
        "sm:max-w-[600px]",
        "border border-[#84520d]",
        "rounded-lg p-6",
        "shadow-lg",
        "overflow-hidden",
        "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
        isDiscoveryMode ? 'bg-[#fff1be]' : 'bg-[#462b07]'
      )}
        style={{ 
          minWidth: '300px', 
          width: '50%', 
          maxWidth: 'calc(100% - 2rem)', 
          boxShadow: styles.mobileMenuShadow,
          zIndex: 50
        }}  
        aria-describedby="Contact-dialog-description"
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
        <DialogDescription className={`text-center mb-4 ${colors.altTitleH2}`}>
          Please, be in touch!
        </DialogDescription>      
        <Form {...form}>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit(onSubmit)();
            }}
            className="space-y-4"
          >   
            {/* Hidden fields for Formsubmit.io configuration */}
            <input type="hidden" name="_subject" value="Find-a-Feeling Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
  
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: 'Email is required', 
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/, 
                  message: 'Enter a valid email'
                } 
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className={`${colors.text}`}>
                    Email <span style={{ color: baseColors.red.asterisk }}>*</span>
                  </FormLabel>     
                  <FormControl>
                    <Input 
                      type="email"
                      {...field} 
                      style={{ color: baseColors.red.asterisk }}
                      className={cn(
                        `${isDiscoveryMode ? 'bg-white' : 'bg-[#33210a]'} ${colors.text}`,
                        inputClasses,
                        fieldState.invalid && 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-left pl-1 font-bold" />
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
                    <Textarea {...field} className={`${isDiscoveryMode ? 'bg-white' : 'bg-[#33210a]'} ${colors.text} ${inputClasses} min-h-[100px]`} />
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
    <ToastContainer
      theme={isDiscoveryMode ? 'dark' : 'colored'}
      position="bottom-right" 
    />
    </>
  );
}

export default ContactDialog;