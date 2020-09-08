import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItemList({ items }) {
  return (
    <ul>
      {items.map((item, itemKey) => {
        let props = { ...item, ...itemKey };
        return <MenuItem key={itemKey} {...props} />;
      })}
    </ul>
  );
}
