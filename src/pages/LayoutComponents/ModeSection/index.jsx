import React from "react";
import { Icon } from "../../../components/Icon";
import IconTile from "../../../components/IconTile";
import TypeListItem from "../TypeListItem";

const ModeSection = () => (
  <div className="mode-list-wrapper">
    <div className="section-header-wrapper">
      <h1 className="section-header">Modes</h1>
      <IconTile  icon={<Icon name="settings" face="fill-blue" size="small"/>} skin="outer-shadow" size="small"/>
    </div>
    <div className="section-content">
    <TypeListItem
      icon={<IconTile isOn icon={<Icon name="coolAir" face="fill-gray" size="large"/>} skin="outer-shadow" size="large"/>}
      mainText="Cool Air"
      subText="on"
    />

<TypeListItem
      icon={<IconTile icon={<Icon name="leaves" face="fill-gray" size="large"/>} skin="outer-shadow" size="large"/>} 
      skin="outer-shadow" size="large"
      mainText="Eco"
      subText="off"
    />

<TypeListItem
      icon={<IconTile icon={<Icon name="silent" face="fill-gray" size="large"/>} skin="outer-shadow" size="large"/>}
      mainText="Cool Air"
      subText="off"
    />
    </div>
  </div>
);

export default ModeSection;
