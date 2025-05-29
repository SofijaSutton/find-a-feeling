import React from 'react';
import createGlobalStyles from '../../styles/globalStyles';
// TODO: future work to do a more lightweight global vvariable option to get colors

function Divider({ className = "", color, isDiscoveryMode, ...props }) {
  const { baseColors } = createGlobalStyles(isDiscoveryMode);
  const dividerColor = color || baseColors.brown.medium;

  return (
    <div 
      className={`h-[0.05em] bg-[${dividerColor}] flex-grow ${className}`}
      {...props}
    />
  );
}

export default Divider;