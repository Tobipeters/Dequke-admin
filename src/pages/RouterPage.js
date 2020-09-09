import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import {
  GeneralSettings,
  AdminSettings,
  EmailNotification,
  PaymentSettings,
  PostSettings,
  RegistrationSettings,
  SecuritySettings,
  SystemSettings,
  UploadSettings,
} from "./settings/Index";

import {
  ListAdmin,
  ListUsers,
  ListUser,
  ListAgency,
  ListBanned,
  ListGroups,
  ListOnline,
  ListPages,
  ListGroup,
  ListAdminPage,
  ListAgencyPage,
  ListPage,
} from "./users/Index.js";

import {
  UserAds,
  SystemAds,
  AdSettings,
  CreateSystemAds,
  EditUserAds,
  EditSystemAds,
} from "./adContent/Index";
import Posts from "./posts/Posts";
import { Reaction, AddReaction } from "./reaction/Index";
import { Emojis, AddEmojis } from "./emojis/Index";
import FollowSuggest from "./followSuggest/FollowSuggest";
import Directory from "./directory/Directory";
import GarbageCollector from "./garbageCollector/GarbageCollector";
import { Earnings, ListSubscribers, Settings } from "./proPackages/Index";
import { ListEvents, EventCategory, EventDetails } from "./events/Index";
import { CoDEarnings, CoDSettings, UserCoD } from "./contentOnDemand/Index";
import { Points, Payments } from "./qubes/Index";
import Reports from "./reports/Reports";
import Verification from "./verification/Verification";
import MassNotification from "./massNotification/MassNotification";
import AggregateData from "./aggregateData/AggregateData";

const RouterPage = () => {
  return (
    <div>
      {/* Dashboard Route */}
      <Route path="/dashboard" name="dashboard" component={Dashboard} />

      {/* Direcotry Route */}
      <Route path="/directory" name="directory" component={Directory} />

      {/* Settings Route */}
      <Route
        exact
        path="/settings"
        render={() => <Redirect to="/settings/general-settings" />}
      />
      <Route
        path="/settings"
        render={({ match: { url } }) => (
          <>
            <Route
              path={`${url}/general-settings`}
              component={GeneralSettings}
              exact
            />
            <Route
              path={`${url}/admin-settings`}
              name="admin-settings"
              component={AdminSettings}
            />
            <Route
              path={`${url}/notification-settings`}
              name="notification-settings"
              component={EmailNotification}
            />
            <Route
              path={`${url}/payment-settings`}
              name="payment-settings"
              component={PaymentSettings}
            />
            <Route
              path={`${url}/post-settings`}
              name="post-settings"
              component={PostSettings}
            />
            <Route
              path={`${url}/registration-settings`}
              name="registration-settings"
              component={RegistrationSettings}
            />
            <Route
              path={`${url}/security-settings`}
              name="security-settings"
              component={SecuritySettings}
            />
            <Route
              path={`${url}/system-settings`}
              name="system-settings"
              component={SystemSettings}
            />
            <Route
              path={`${url}/upload-settings`}
              name="upload-settings"
              component={UploadSettings}
            />
          </>
        )}
      />

      {/* Users Route */}

      {/* <Route path="/page" name="page" component={ListPage} />
      <Route path="/group" name="group" component={ListGroup} /> */}

      <Route
        exact
        path="/users"
        render={() => <Redirect to="/users/list-users" />}
      />
      <Route
        path="/users"
        render={({ match: { url } }) => (
          <>
            <Route
              path={`${url}/list-banned`}
              name="list-banned"
              component={ListBanned}
            />

            <Route
              path={`${url}/list-online`}
              name="list-online"
              component={ListOnline}
            />
          </>
        )}
      />
      {/* List Users Route */}
      <Route path="/users/list-users" component={ListUsers} exact />
      <Route path="/users/list-users/user" component={ListUser} />
      {/* List Group Route */}
      <Route path="/users/list-group" component={ListGroups} exact />
      <Route path="/users/list-group/group" component={ListGroup} />
      {/* List Agency Route */}
      <Route path="/users/list-agency" component={ListAgency} exact />
      <Route path="/users/list-agency/agency" component={ListAgencyPage} />
      {/* List Admin Page */}
      <Route path="/users/list-admin" component={ListAdmin} exact />
      <Route path="/users/list-admin/admin" component={ListAdminPage} />
      {/* List Page Route */}
      <Route path="/users/list-page" component={ListPages} exact />
      <Route path="/users/list-page/page" component={ListPage} />

      <Route path="/users/list-groups/group" component={ListGroup} exact />
      {/* Posts */}
      <Route path="/posts" name="posts" component={Posts} />
      {/* Events */}
      <Route
        exact
        path="/events"
        render={() => <Redirect to="/events/list-events" />}
      />
      <Route
        path="/events"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/list-events`} component={ListEvents} exact />
            <Route
              path={`/events/list-events/event-details`}
              component={EventDetails}
            />

            <Route path={`${url}/event-category`} component={EventCategory} />
          </>
        )}
      />

      {/*Ads Route  */}
      <Route
        exact
        path="/ads"
        render={() => <Redirect to="/ads/ads-settings" />}
      />
      <Route
        path="/ads"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/ads-settings`} component={AdSettings} exact />
          </>
        )}
      />
      <Route path="/ads/system-ads" component={SystemAds} exact />
      <Route
        path="/ads/system-ads/create-system-ad"
        component={CreateSystemAds}
      />
      <Route path="/ads/system-ads/edit-system-ad" component={EditSystemAds} />
      <Route path="/ads/user-ads" component={UserAds} exact />
      <Route path="/ads/user-ads/edit-user-ads" component={EditUserAds} />

      {/*CoD Route  */}
      <Route
        exact
        path="/cod"
        render={() => <Redirect to="/cod/cod-settings" />}
      />
      <Route
        path="/cod"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/cod-settings`} component={CoDSettings} exact />
            <Route path={`${url}/user-cod`} component={UserCoD} />
            <Route path={`${url}/cod-earnings`} component={CoDEarnings} />
          </>
        )}
      />

      {/* Package Route */}
      <Route
        path="/package"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/subscribers`} component={ListSubscribers} />
            <Route path={`${url}/earnings`} component={Earnings} />
          </>
        )}
      />

      {/*Quibs Route  */}
      <Route
        exact
        path="/qubes"
        render={() => <Redirect to="/qubes/points" />}
      />
      <Route
        path="/qubes"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/points`} component={Points} exact />
            <Route path={`${url}/qube-payments`} component={Payments} />
          </>
        )}
      />
      {/* Report */}
      <Route path="/reports" component={Reports} />
      {/* Verification */}
      <Route path="/verification" component={Verification} />
      {/* Verification */}
      <Route path="/mass-notification" component={MassNotification} />
      {/* Reaction */}
      <Route path="/reactions" component={Reaction} exact />
      <Route
        path="/reactions/add-reaction"
        name="add-reaction"
        component={AddReaction}
      />

      {/* Emojis */}
      <Route path="/emojis" name="emojis" component={Emojis} exact />
      <Route
        path="/emojis/add-emojis"
        name="add-emojis"
        component={AddEmojis}
      />

      {/* Follow Suggest */}
      <Route
        path="/follow-suggest"
        name="follow-suggest"
        component={FollowSuggest}
      />
      {/* Aggregate Data */}
      <Route path="/aggregate-data" component={AggregateData} />
      {/* Garbage Collector */}
      <Route path="/gabbage" name="gabbage" component={GarbageCollector} />
    </div>
  );
};

export default RouterPage;
