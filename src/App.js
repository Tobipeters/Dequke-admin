import React from "react";

import SideMenu from "./components/SideMenu";
import Menu from "./components/mobile/Menu";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <div className="body app">
      <Menu />
      <div className="flex">
        <SideMenu />
        <div className="content">
          <div className="m-6 mt-10">
            <MainBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
