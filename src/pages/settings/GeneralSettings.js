import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  // start: "Settings",
  links: [
    {
      label: "General Settings",
      url: "/settings/general-settings",
    },
  ],
};

const GeneralSettings = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box px-16 sm:py-10 my-5">
        <div className="my-8">
          <ButtonToggleInput
            title="Directory"
            body="Enable the directory for better SEO results"
            bodyText="Make the website public to allow non logged users to view website content"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Pages"
            body="Users can create pages or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Groups"
            body="Users can create groups or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Agency"
            body="Users can create Agency or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Events"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Shows"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Performance"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Classes"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Performances"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Daytime Message"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8s">
          <ButtonToggleInput
            title="Profile Visitation Notification"
            body="Users can create Events or only admins/moderators"
          />
        </div>
      </div>
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end m-8 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
};

export default GeneralSettings;
