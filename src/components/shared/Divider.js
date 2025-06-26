import React from 'react';
import { cn } from '../../lib/utils';

function Divider({ className = "", ...props }) {
  return (
    <div 
      className={cn("h-[0.05em] bg-brand-brown flex-grow", className)}
      {...props}
    />
  );
}

export default Divider;