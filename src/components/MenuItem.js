import React, { useState } from "react";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

const MenuItem = ({
  label,
  isActive,
  isSub,
  url,
  icon,
  subItems,
  itemKey,
  divider,
}) => {
  let [open, setOpen] = useState(false);

  //dropdown open onClick
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  //render sub-menu-items
  const renderSubItems = () => {
    if (subItems.length > 0) {
      return (
        <ul key={itemKey} className={open ? "side-menu__sub-open" : ""}>
          {subItems.map((subItem, subItemKey) => {
            return <MenuItem key={subItemKey} {...subItem} />;
          })}
        </ul>
      );
    }
  };

  const renderDivider = () => {
    if (divider) {
      return <div className="side-nav__devider my-6 border-t-2"></div>;
    }
  };
  console.log("MenuItem");
  return (
    <li onClick={handleClick} className={open ? "side-menu__sub-open" : ""}>
      <NavLink
        to={url}
        activeClassName="side-menu--active"
        className="side-menu"
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

export default MenuItem;
