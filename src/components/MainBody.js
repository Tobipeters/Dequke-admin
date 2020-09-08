import React from "react";

import Main from "../pages/Main";
import Dashboard from "../pages/dashboard/Dashboard";
// import {
//     Dashboard, GeneralSettings, AdminSettings, EmailSettings, PaymentSettings, PostSettings, RegistrationSettings,
//     SecuritySettings, SystemSettings, UploadSettings
// } from '../pages'

function MainBody() {
  return (
    <div className="content">
      <div className="mt-10">
        {/* <Dashboard /> */}
        <Main />
      </div>
    </div>
  );
}

export default MainBody;
