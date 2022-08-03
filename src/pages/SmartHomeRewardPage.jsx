import React from "react";
import AppHeader from "../components/AppHeader";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Illustration from "../assest/graphics/Illustration.png";

const SmartHomeRewardPage = () => {
  return (
    <div className="app-container smart-home-reward-page">
      <AppHeader></AppHeader>
      <main className="page-content">
        <img
          className="illustration-image"
          src={Illustration}
          alt="illustration"
        />
        <div className="text-container">
          <span className="special-header text-center text-uppercase">
            Monthly summary
          </span>
          <h1 className="special-jumbo-header text-center">Goal reached!</h1>
          <p className="item-sub-header">
            You managed to save{" "}
            <span className="text-strong-black">42 kWh</span> this month! That’s{" "}
            <span className="text-strong-black">3 trees</span> high-fiving you
            ✋
          </p>
        </div>

        <Link to={"/"}>
          <Button value="Continue" size="large" />
        </Link>
        <div className="result-indicator-card">
          <span className="card-title">Milestone reached</span>
          <span className="card-points">+75 credits</span>
        </div>
      </main>
    </div>
  );
};
export default SmartHomeRewardPage;
