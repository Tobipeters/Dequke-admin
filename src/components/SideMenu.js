import React from "react";
import MenuItemList from "./MenuItemList";

import { menuItems } from "../constants/constants";

export default function SideMenu() {
  return (
    <nav className="side-nav">
      <a href="#" className="intro-x flex items-center pl-5 pt-4">
        <img alt="DeQube Logo" src="/images/logo.png" className="w-25" />
      </a>
      <div className="side-nav__devider my-6 border-t-2"></div>
      <MenuItemList items={menuItems} />
    </nav>
  );
}
