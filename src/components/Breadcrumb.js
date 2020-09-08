import React from "react";

export default function Breadcrumb() {
  return (
    <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
      {" "}
      <a href="#" className="">
        Application
      </a>{" "}
      <i data-feather="chevron-right" className="breadcrumb__icon"></i>{" "}
      <a href="#" className="breadcrumb--active">
        Dashboard
      </a>{" "}
    </div>
  );
}
