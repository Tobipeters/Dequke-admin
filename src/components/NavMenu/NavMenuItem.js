import React, { useState } from "react";
import * as Icon from "react-feather";
import { NavLink, useLocation, useHistory } from "react-router-dom";

const NavMenuItem = ({
  label,
  isActive,
  isSub,
  url,
  id,
  icon,
  subItems,
  itemKey,
  divider,
  onHandleClick,
}) => {
  let [open, setOpen] = useState(false);
  let [menuType, setMenuType] = useState("");
  let location = useLocation();
  let history = useHistory();
  let obj = {};
  //dropdown open onClick
  const handleClick = (e) => {
    e.preventDefault();
    //if (history.location.pathname === "/settings") {
    if (obj.type === "sub") {
      //setOpen(!open);
      //setOpen(open);
    } else {
      setOpen(!open);
    }
    onHandleClick(itemKey);
    //} else {
    //setOpen(open);
    // }
    console.log("Location: " + JSON.stringify(location));
    console.log("History: " + JSON.stringify(history));
    console.log("Key: " + id);
  };
  const handleSubClick = (value) => {
    //setMenuType(value);
    obj = { type: "sub" };
    console.log("Sub Key: " + value);
  };
  //render sub-menu-items
  const renderSubItems = () => {
    if (subItems.length > 0) {
      return (
        <ul key={itemKey} className={open ? "side-menu__sub-open block" : ""}>
          {subItems.map((subItem, subItemKey) => {
            const subProps = { id: "sub", ...subItem };
            return (
              <SubNavMenuItem
                key={subItemKey}
                {...subProps}
                handleSubClick={handleSubClick}
              />
            );
          })}
        </ul>
      );
    }
  };

  const renderDivider = () => {
    if (divider) {
      return <div className="side-nav__devider my-6 border-t-1"></div>;
    }
  };

  return (
    <li onClick={handleClick}>
      <NavLink
        to={url}
        className={open ? "side-menu side-menu--open" : "side-menu"}
        activeClassName={obj.type === "sub" ? "" : "side-menu--active"}
      >
        <div className="side-menu__icon">{icon}</div>
        <div className="side-menu__title">
          {label}
          {subItems.length > 0 ? (
            <Icon.ChevronDown
              className={
                open
                  ? "side-menu__sub-icon transform rotate-180"
                  : "side-menu__sub-icon"
              }
            />
          ) : (
            ""
          )}
        </div>
      </NavLink>
      {renderSubItems()}
      {renderDivider()}
    </li>
  );
};

export default NavMenuItem;

const SubNavMenuItem = ({ handleSubClick, url, icon, label, id }) => {
  const onClickSub = () => {
    handleSubClick(id);
  };
  return (
    <li onClick={onClickSub}>
      <NavLink to={url} className="side-menu">
        <div className="side-menu__icon">{icon}</div>
        <div className="side-menu__title">{label}</div>
      </NavLink>
    </li>
  );
};
