import React from 'react';
import createGlobalStyles from '../../styles/globalStyles';
// TODO: future work to do a more lightweight global variable option to get colors

function Divider({ className = "", color, isDiscoveryMode, ...props }) {
  const { colors } = createGlobalStyles(isDiscoveryMode);
  const dividerColor = color || colors.toggleBg;

  return (
    <div 
      className={`h-[0.05em] ${dividerColor} flex-grow ${className}`}
      style={{ color: dividerColor }}
      {...props}
    />
  );
}

export default Divider;