import React from "react";
import { Icon } from "../../../components/Icon";
import IconTile from "../../../components/IconTile";
import TypeListItem from "../TypeListItem";
import KWhMeter from "../../../components/KWhMeter";
import { Link } from "react-router-dom";

const CurrentUsageSection = () => (
  <div className="current-usage-wrapper">
    <div className="row">
      <div className="section-title">
        <h3 className="section-sub-header text-center">Current usage</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-side">
        <TypeListItem
          icon={
            <IconTile
              icon={<Icon name="thermostat" face="fill-gray"></Icon>}
              skin="inner-shadow"
            />
          }
          skin="outer-shadow"
          size="large"
          mainText="21&#8451;"
        />
      </div>
      <div className="col-prgress">
        <KWhMeter
          progress={42}
          kwValue="14kWh"
          price="€1.25"
          icon={<Icon name="leaves" face="fill-blue" size="large" />}
        />
      </div>
      <div className="col-side">
        <TypeListItem
          icon={
            <Link to="./SmartHomeRewardPage">
              <IconTile
                icon={<Icon name="humidity" face="fill-gray"></Icon>}
                skin="inner-shadow"
              />
            </Link>
          }
          skin="outer-shadow"
          size="large"
          mainText="58%"
        />
      </div>
    </div>
  </div>
);

export default CurrentUsageSection;
