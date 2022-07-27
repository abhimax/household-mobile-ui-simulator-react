import React from 'react'
import cn from 'classnames';

const IconButton = ({ icon, handleClick, skin, size, isOn }) => (
  (skin ==='outer-shadow' || skin ==='inner-shadow') ? 
  <div className={cn('icon-button-wrapper', skin, size, {'selected' :isOn})} onClick={handleClick}>{icon}</div>:
  <div className={cn('icon-tile-outer-wrapper', skin)} onClick={handleClick}>
    <div className="icon-tile-inner-wrapper" onClick={handleClick}>
      {icon}
    </div>
  </div>
  
);
  
  export default IconButton;
