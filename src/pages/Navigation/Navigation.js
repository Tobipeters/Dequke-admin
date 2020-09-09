import React from "react";
import NavBar from "./sideNav/NavBar";
import MainBody from "../../components/MainBody/MainBody";
import MobileNavbar from "./mobileNav/MobileNavbar";

const Navigation = () => {
  return (
    <div className="app">
      <div className="flex">
        <NavBar />
        <MobileNavbar />
        <div className="content">
          <div className="m-1">
            <MainBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
