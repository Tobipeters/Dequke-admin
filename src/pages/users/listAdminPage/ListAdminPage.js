import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import ProfileCard from "../../../components/profileCard/ProfileCard";
import Account from "../listAdminPage/Account";
import Button from "../../../components/button/Button";
import CustomBreadcrumb from "../../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Users",
  links: [
    {
      label: "List Admin",
      url: "/users/list-admin",
    },
  ],
};

const ListAdminPage = () => {
  const [openTab, setOpenTab] = useState(1);
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
        tabAccountLink={
          <a
            data-toggle="tab"
            data-target="#account"
            href="#account"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 1 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            {openTab === 1 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Account
          </a>
        }
        tabAccount={<Account />}
      />
    </div>
  );
};

export default ListAdminPage;
