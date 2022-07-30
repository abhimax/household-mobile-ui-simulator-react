import React from 'react'
import CircularProgressbar from '../CircularProgressbar';
import TypeListItem from '../../pages/LayoutComponents/TypeListItem';

const kWhMeter = ({ progress, kwValue, price,  icon }) => (
  <div
  className="ui-circular-progress">
     
     <CircularProgressbar id="outer" size="136px" variant="determinate" value={progress} thickness={1.5}/>
     <CircularProgressbar id="inner" size="126px" variant="determinate" value={progress} thickness={8}/>
     <div className="meter-display">
     <TypeListItem
      icon={icon}
      mainText={kwValue}
      subText={price}
    />
     </div>
</div>
  );
  
  export default kWhMeter;
