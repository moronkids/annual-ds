import { AppContext } from "providers";
import React, { useContext } from "react";

function Index() {
  const { sidebar, setSideBar, activeSection, setActiveSection } =
    useContext(AppContext);
  return (
    <div
      className={`ds-sidebar fixed-top ${sidebar && "showBar"}`}
      style={{ zIndex: "97" }}
    >
      <div className={`text-menu bordered_ ${activeSection === 1 && "active"}`}>
        Activities
      </div>
      <div className={`text-menu bordered_ ${activeSection === 2 && "active"}`}>
        Startup
      </div>
      <div className={`text-menu bordered_ ${activeSection === 3 && "active"}`}>
        Tech & Esports
      </div>
      <div className={`text-menu bordered_ ${activeSection === 4 && "active"}`}>
        Partners
      </div>
      <div className={`text-menu ${activeSection === 5 && "active"}`}>
        For Readers
      </div>
    </div>
  );
}

export default Index;
