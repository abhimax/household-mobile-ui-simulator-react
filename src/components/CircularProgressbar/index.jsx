import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const CircularProgressbar = ({id,size,value,thickness}) => (
    <div className="ui-circular-progress" id={id}> 
       <CircularProgress size={size} variant="determinate" value={value} thickness={thickness} />
    </div>
  );
  
  export default CircularProgressbar;
