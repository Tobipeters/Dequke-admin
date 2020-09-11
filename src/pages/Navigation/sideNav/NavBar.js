import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

import { menuItems, items } from "../../../constants/constants";
import MenuItemList from "../../../components/NavMenu/NavMenuItemList";

const NavBar = () => {
  return (
    <nav className="side-nav">
      <Link to="/dashboard" className="intro-x flex items-center pl-5 pt-4">
        <img alt="DeQube Logo" src={logo} className="w-25" />
      </Link>
      <div className="side-nav__devider my-6 border-t-1"></div>
      <MenuItemList items={menuItems} />
    </nav> 
  );
};

export default NavBar;
