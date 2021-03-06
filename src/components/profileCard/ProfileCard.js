import React, { useState } from "react";
import * as Icon from "react-feather";

import profileImage from "../../assets/dist/images/preview-3.jpg";
// import Account from "../../pages/users/listUserPages/Account";
// import Privacy from "./Privacy";
// import Profile from "./Profile";

const ProfileCard = ({
  userImage,
  userId,
  joined,
  lastLogin,
  lastLoginAdmin,
  members,
  followers,
  agencyViews,
  likes,
  tabAccountLink,
  tabProfileLink,
  tabPrivacyLink,
  tabActivityLink,
  tabMembershipLink,
  tabExtrasLink,
  tabAccount,
  tabProfile,
  tabPrivacy,
  tabActivity,
  tabMembership,
  tabExtras,
}) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="intro-y box pt-5 mt-5 mb-5">

        <div className="row px-4 border-b border-gray-200 pb-3 -mx-5">
          <div className="col-md-4">
            <div className="row pt-5">
              <div className="col-md-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit relative d-inline-block">
                  <img
                    alt="DeQube User Image"
                    className="rounded-full"
                    src={userImage || profileImage}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-5">
                  <div className="truncate sm:whitespace-normal font-medium text-lg">
                    User ID
              </div>
                  <div className="text-blue-400 underline">
                    {`/${userId}` || "DevOps Engineer"}
                  </div>
                </div>
                <div className="">
                  <div className="truncate sm:whitespace-normal font-medium text-lg">
                    User Type
              </div>
                  <div className="text-blue-400 underline">
                   Performer
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="items-center lg:items-start col-md-4 justify-center text-gray-600  px-4 border-l-2 border-r-2 border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
            <div class="flex">
              <div class="h-12 w-3/5">
                <div className="truncate sm:whitespace-normal items-center">
                  {"Joined"}
                </div>
              </div>
              <div class="w-2/5 h-12">
                <div className="truncate sm:whitespace-normal text-blue-400 underline ">
                  17 May, 2020
                </div>
              </div>
            </div>
            <div class="flex mt-3">
              <div class="h-12 w-3/5">
                <div className="truncate sm:whitespace-normal items-center">
                  Last Login
                </div>
              </div>
              <div class="w-2/5 h-12">
                <div className="truncate sm:whitespace-normal text-blue-400 underline ">
                  17 May, 2020
                </div>
              </div>
            </div>
            <div class="flex mt-3">
              <div class="h-12 w-3/5">
                <div className="truncate sm:whitespace-normal items-center">
                  Qubed Level
                </div>
              </div>
              <div class="w-2/5 h-12">
                <div className="truncate sm:whitespace-normal text-blue-400 underline ">
                  Expert
                </div>
              </div>
            </div>
          </div>
 
          <div className="col-md-4 px-4 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0">
            <div class="flex">
              <div class="w-2/3 h-10">
                <div className="truncate sm:whitespace-normal items-center">
                  Followers
                </div>
              </div>
              <div class="w-1/3 h-10">
                <div className="truncate sm:whitespace-normal font-weight-bold">
                 6.6k
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="w-2/3 h-10">
                <div className="truncate sm:whitespace-normal items-center">
                  Followings
                </div>
              </div>
              <div class="w-1/3 h-10">
                <div className="truncate sm:whitespace-normal font-weight-bold">
                  6.6k
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="h-10 w-2/3">
                <div className="truncate sm:whitespace-normal items-center">
                 Profile Views
                </div>
              </div>
              <div class="w-1/3 h-10">
                <div className="truncate sm:whitespace-normal font-weight-bold">
                  5.5k
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="h-10 w-2/3">
                <div className="truncate sm:whitespace-normal items-center ">
                Likes
                </div>
              </div>
              <div class="w-1/3 h-10">
                <div className="truncate sm:whitespace-normal font-weight-bold">
               12k
                </div>
              </div>
            </div>
          </div>

        </div>


        <div class="nav-tabs flex flex-col sm:flex-row justify-between lg:justify-between">
          <a
            data-toggle="tab"
            data-target="#account"
            href="#account"
            className={
              "px-4 py-3 ml-4 sm:mr-8 flex items-center " + (openTab === 1 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            {openTab === 1 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Account
          </a>
          <a
            data-toggle="tab"
            data-target="#profile"
            href="#profile"
            className={
              "px-4 py-3 sm:mr-8 flex items-center " + (openTab === 2 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            {openTab === 2 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Profile
          </a>
          <a
            data-toggle="tab"
            data-target="#privacy"
            href="#privacy"
            className={
              "px-4 py-3 sm:mr-8 flex items-center " + (openTab === 3 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            {openTab === 3 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Privacy &amp; User Settings
          </a>
          <a
            data-toggle="tab"
            data-target="#activity"
            href="#activity"
            className={
              "px-4 py-3 sm:mr-8 flex items-center " + (openTab === 4 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
          >
            {openTab === 4 ? <Icon.Activity className="w-4 h-4 mr-2" /> : ""}
            Activity
          </a>
          <a
            data-toggle="tab"
            data-target="#membership"
            href="#membership"
            className={
              "px-4 py-3 sm:mr-8 flex items-center " + (openTab === 5 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(5);
            }}
          >
            {openTab === 5 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Membership
          </a>
          <a
            data-toggle="tab"
            data-target="#extra"
            href="#extra"
            className={
              "px-4 py-3 sm:mr-8 flex items-center " + (openTab === 6 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(6);
            }}
          >
            {openTab === 6 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Extras
          </a>
        </div>
      </div>

      <div className="py-5 flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? "block" : "hidden"} id="account">
            {tabAccount}
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="profile">
            {tabProfile}
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="privacy">
            {tabPrivacy}
          </div>
          <div className={openTab === 4 ? "block" : "hidden"} id="activity">
            {tabActivity}
          </div>
          <div className={openTab === 5 ? "block" : "hidden"} id="membership">
            {tabMembership}
          </div>
          <div className={openTab === 6 ? "block" : "hidden"} id="extra">
            {tabExtras}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
