import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import {
  GeneralSettings,
  AdminSettings,
  EmailSettings,
  PaymentSettings,
  PostSettings,
  RegistrationSettings,
  SecuritySettings,
  SystemSettings,
  UploadSettings,
} from "./settings/Index";

const Main = () => {
  return (
    <Switch>
      <Route exact name="dashboard" path="/dashboard" component={Dashboard} />
      {/* <Redirect path='/' to='/dashboard' component={Dashboard} /> */}
      <Route name="settings" path="/settings" component={GeneralSettings} />
      <Route
        name="admin-settings"
        path="/admin-settings"
        component={AdminSettings}
      />
      <Route
        name="email-settings"
        path="/email-settings"
        component={EmailSettings}
      />
      <Route
        name="payment-settings"
        path="/payment-settings"
        component={PaymentSettings}
      />
      <Route
        name="post-settings"
        path="/post-settings"
        component={PostSettings}
      />
      <Route
        name="registration"
        path="/registration"
        component={RegistrationSettings}
      />
      <Route name="security" path="/security" component={SecuritySettings} />
      <Route
        name="system-settings"
        path="/system-settings"
        component={SystemSettings}
      />
      <Route name="upload" path="/upload" component={UploadSettings} />
    </Switch>
  );
};

export default Main;
