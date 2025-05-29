import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from "../../components/ui/button.jsx";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../ui/textarea.jsx";
import createGlobalStyles from '../../styles/globalStyles';
import { cn } from '../../lib/utils';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

// I messed up the stylings for this component - fix thesse color variables
// also nav menu hightlight color is also broken - it might just be how to get the dynamic variables
function ContactDialog({ isOpen, onClose, isDiscoveryMode }) {
  const { colors, baseColors, styles } = createGlobalStyles(isDiscoveryMode);
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
      ? `bg-[${baseColors.red.light}] hover:bg-[${baseColors.red.dark}]`
      : `bg-[${baseColors.brown.medium}] hover:bg-[${baseColors.brown.light}]`
  );

  const inputClasses = cn(
    isDiscoveryMode 
      ? `border-[${baseColors.brown.light}] focus:!border-[${baseColors.brown.light}] focus:!ring-[${baseColors.brown.light}]/50` 
      : `border-[${baseColors.brown.medium}] focus:!border-[${baseColors.white.cream}] focus:!ring-[${baseColors.white.cream}]/50` 
  );

  return (
    <>
    <Dialog open={isOpen} onOpenChange={handleClose}>
     <DialogContent 
      className={cn(
        "sm:max-w-[600px]",
        `border border-[${baseColors.brown.medium}]`,
        "rounded-lg p-6",
        "shadow-lg",
        "overflow-hidden",
        "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
        isDiscoveryMode ? `bg-[${baseColors.white.cream}]` : `bg-[${baseColors.brown.mediumAlt}]`       
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
                      // style={{ color: baseColors.red.asterisk, backgroundColor: isDiscoveryMode ? baseColors.white.pure : baseColors.brown.lightAlt }}

                      style={{ color: baseColors.red.asterisk, backgroundColor: isDiscoveryMode ? baseColors.white.pure : baseColors.brown.lightAlt }}
                      className={cn(
                        `${isDiscoveryMode ? '' : `${colors.text}`}`,
                        colors.text,
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
                    <Textarea {...field} 
                      className={`${colors.text} ${inputClasses} min-h-[100px]`} 
                      style={{ backgroundColor: isDiscoveryMode ? baseColors.white.pure : baseColors.brown.lightAlt }}

                      />

                    {/* <Textarea 
                      {...field} 
                      
                      style={{ backgroundColor: isDiscoveryMode ? baseColors.white.pure : baseColors.brown.lightAlt }}
                      className={`${colors.text} ${inputClasses}`} 
                    /> */}
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