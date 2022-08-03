import React from "react";

const TemperatureListItem = ({ icon, handleClick, temperature, roomName }) => (
  <div className="temp-list-item-wrapper" onClick={handleClick}>
    {icon}
    <h2 className="item-header">{temperature}</h2>
    <span className="item-sub-header">{roomName}</span>
  </div>
);
export default TemperatureListItem;
