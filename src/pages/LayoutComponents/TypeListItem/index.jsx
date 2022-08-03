import React from "react";

const TypeListItem = ({ icon, handleClick, mainText, subText }) => (
  <div className="type-list-item-wrapper" onClick={handleClick}>
    {icon ? icon : ""}
    {mainText ? <h2 className="item-header">{mainText}</h2> : ""}
    {subText ? <span className="item-sub-header">{subText}</span> : ""}
  </div>
);
export default TypeListItem;
