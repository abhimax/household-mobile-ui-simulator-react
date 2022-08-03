import React from "react";
import { Icon } from "../../../components/Icon";
import IconTile from "../../../components/IconTile";
import TemperatureListItem from "../TemperatureListItem";

const TemperatureList = () => (
  <div className="temp-list-wrapper">
    <TemperatureListItem
      icon={
        <IconTile
          icon={<Icon name="livingRoom" face="fill-white" size="medium"></Icon>}
          skin="skin-green"
        ></IconTile>
      }
      temperature="19&#8451;"
      roomName="Living room"
    />
    <TemperatureListItem
      icon={
        <IconTile
          icon={<Icon name="kitchen" face="fill-white" size="medium"></Icon>}
          skin="skin-blue"
        ></IconTile>
      }
      temperature="21&#8451;"
      roomName="Living room"
    />
    <TemperatureListItem
      icon={
        <IconTile
          icon={<Icon name="bedroom" face="fill-white" size="medium"></Icon>}
          skin="skin-orange"
        ></IconTile>
      }
      temperature="19&#8451;"
      roomName="Living room"
    />
    <TemperatureListItem
      icon={
        <IconTile
          icon={<Icon name="bathroom" face="fill-white" size="medium"></Icon>}
          skin="skin-magenta"
        ></IconTile>
      }
      temperature="22&#8451;"
      roomName="Living room"
    />
  </div>
);

export default TemperatureList;
