import React from 'react';
import cn from 'classnames';

const Button = ({ value, icon, handleClick,type,size, ...props }) => (
    <button
      className={cn('ui-button',type,size)}
      onClick={handleClick}
      {...props}
    >
      <div className="btn-inner-wrapper">
        { icon ? <div className={'icon-holder'}>{icon}</div>: "" }
        { value ? <div className={'text-holder'}>{value}</div> : ""}

      </div>
    </button>
  );
  
  export default Button;
