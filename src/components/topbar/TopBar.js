import React from "react";
import * as Icon from "react-feather";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
        {" "}
        <a href="#" className="">
          Application
        </a>
        <Icon.ChevronRight className="breadcrumb__icon" />
        {/* <i data-feather="chevron-right" ></i>{" "} */}
        <a href="#" className="breadcrumb--active">
          Dashboard
        </a>{" "}
      </div>
      <div className="">
        <a
          href="#"
          className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
        >
          <Icon.ToggleRight className="w-4 h-4 mr-2" />
          Logout{" "}
        </a>
      </div>
    </div>
  );
}
