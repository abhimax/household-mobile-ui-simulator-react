import React from "react";
import AppHeader from "../components/AppHeader";
import TemperatureList from "./LayoutComponents/TemperatureList";
import ModeSection from "./LayoutComponents/ModeSection";
import CurrentUsageSection from "./LayoutComponents/CurrentUsageSection";
import AppFooter from "../components/AppFooter";

const HomePage = () => {
  return (
    <div className="app-container smart-home-main">
      <AppHeader headerText={"Household"} hasMenu></AppHeader>
      <main>
        <div className="top-panel">
          <TemperatureList />
        </div>
        <div className="middle-panel">
          <CurrentUsageSection />
        </div>
        <div className="bottom-panel">
          <ModeSection />
        </div>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
};
export default HomePage;
