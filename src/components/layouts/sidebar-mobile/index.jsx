import { AppContext } from "providers";
import React, { useContext } from "react";
import { ga_mobile } from "src/helpers/tracker/GaMobile";
function Index() {
  const { sidebar, setSideBar, activeSection, setActiveSection } =
    useContext(AppContext);
  return (
    <div
      className={`ds-sidebar fixed-top ${sidebar && "showBar"}`}
      style={{ zIndex: "97" }}
    >
      <div
        onClick={() => {
          setActiveSection(1);
          setSideBar(!sidebar);
          ga_mobile("activities-btn");
        }}
        className={`text-menu bordered_ ${activeSection === 1 && "active"}`}
      >
        <a href="#activities">Activities</a>
      </div>
      <div
        onClick={() => {
          setActiveSection(2);
          setSideBar(!sidebar);
          ga_mobile("startups-btn");
        }}
        className={`text-menu bordered_ ${activeSection === 2 && "active"}`}
      >
        <a href="#startup">Startups</a>
      </div>
      <div
        onClick={() => {
          setActiveSection(3);
          setSideBar(!sidebar);
          ga_mobile("tech-esports-btn");
        }}
        className={`text-menu bordered_ ${activeSection === 3 && "active"}`}
      >
        <a href="#gadget">Tech & Esports</a>
      </div>
      <div
        onClick={() => {
          setActiveSection(4);
          setSideBar(!sidebar);
          ga_mobile("partners-btn");
        }}
        className={`text-menu bordered_ ${activeSection === 4 && "active"}`}
      >
        <a href="#partners">Partners</a>
      </div>
      <div
        onClick={() => {
          setActiveSection(5);
          setSideBar(!sidebar);
          ga_mobile("for-readers-btn");
        }}
        className={`text-menu ${activeSection === 5 && "active"}`}
      >
        <a href="#readers">For Readers</a>
      </div>
    </div>
  );
}

export default Index;
