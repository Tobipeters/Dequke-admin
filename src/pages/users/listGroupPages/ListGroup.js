import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import ProfileCard from "../../../components/profileCard/ProfileCard";
import Account from "./GroupAccount";
import Profile from "./GroupProfile";
import Privacy from "./GroupPrivacy";
import Activity from "./GroupActivity";
import Membership from "./GroupMembership";
import Extras from "./GroupExtras";

import Button from "../../../components/button/Button";
import CustomBreadcrumb from "../../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Users",
  links: [
    {
      label: "List Group",
      url: "/users/list-groups",
    },
  ],
};

const ListGroup = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="flex justify-between">
        <Link
          to="/system-ads"
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

export default ListGroup;
