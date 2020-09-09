import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import ProfileCard from "../../../components/profileCard/ProfileCard";
import Account from "../listUserPages/Account";
import Profile from "./Profile";
import Privacy from "./Privacy";
import Activity from "./Activity";
import Membership from "./Membership";
import Extras from "./Extras";
import Button from "../../../components/button/Button";
import CustomBreadcrumb from "../../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Users",
  links: [
    {
      label: "List Users",
      url: "/users/list-users",
    },
  ],
};

const ListUser = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="flex justify-between">
        <Link
          to="/users/list-users"
          className="text-red-700 flex mb-4 hover:text-red-700"
        >
          <Icon.ChevronLeft className="text-red-700" />
          Go Back
        </Link>
        <div className="intro-y flex justify-center col-span-12 items-center pr-16">
          <Button
            className="bg-red-700  text-white font-bold py-2 mr-3 px-4 rounded"
            value="View Profile"
          />
          <Button
            className="flex items-center justify-center bg-red-100 text-red-700 font-bold py-2 px-4 rounded"
            value="Save Changes"
            buttonIcon={<Icon.Trash2 className="w-4 h-4 mr-2" />}
          />
        </div>
      </div>
      <ProfileCard
        tabAccount={<Account />}
        tabProfile={<Profile />}
        tabPrivacy={<Privacy />}
        tabActivity={<Activity />}
        tabMembership={<Membership />}
        tabExtras={<Extras />}
      />
    </div>
  );
};

export default ListUser;
