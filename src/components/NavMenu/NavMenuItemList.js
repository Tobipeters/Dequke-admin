import React from "react";
import NavMenuItem from "./NavMenuItem";

const MenuItemList = ({ items }) => {
  const handleClick = (id) => {
    console.log("Clicked: " + id);
  };

  return (
    <ul>
      {items.map((item, itemKey) => {
        let props = { ...item, ...itemKey };
        return (
          <NavMenuItem key={itemKey} onHandleClick={handleClick} {...props} />
        );
      })}
    </ul>
  ); 
};
export default MenuItemList;
