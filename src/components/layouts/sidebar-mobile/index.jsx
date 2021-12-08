import { AppContext } from "providers";
import React, { useContext } from "react";

function Index() {
  const { sidebar, setSideBar } = useContext(AppContext);
  return (
    <div
      className={`ds-sidebar fixed-top ${sidebar && "showBar"}`}
      style={{ zIndex: "97" }}
    >
      <div className="text-menu bordered_">Activities</div>
      <div className="text-menu bordered_">Startup</div>
      <div className="text-menu bordered_">Tech & Esports</div>
      <div className="text-menu bordered_">Partners</div>
      <div className="text-menu">For Readers</div>
    </div>
  );
}

export default Index;
