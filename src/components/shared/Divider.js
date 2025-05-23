import React from 'react';

function Divider({ className = "", color = "#84520d", ...props }) {
  return (
    <div 
      className={`h-[0.05em] bg-[${color}] flex-grow ${className}`}
      {...props}
    />
  );
}

export default Divider;