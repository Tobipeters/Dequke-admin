import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Settings",
  links: [
    {
      label: "System Settings",
      url: "/settings/system-settings",
    },
  ],
};

const SystemSettings = () => {
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
            title="Users can create Pages"
            body="Users can create pages or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users can create groups"
            body="Users can create groups or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users can create Events"
            body="Users can create Agency or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users Can Write"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users can run ads"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users can create CoD"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Users to give recommendation"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="??"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="??"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="??"
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

export default SystemSettings;
