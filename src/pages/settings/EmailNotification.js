import React from "react";
import Button from "../../components/button/Button";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Settings",
  links: [
    {
      label: "Email Notification",
      url: "/settings/notification-settings",
    },
  ],
};

export default function EmailNotification() {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box px-16 sm:py-10 my-5">
        <div className="my-8">
          <ButtonToggleInput
            title="Email Notification"
            body="Enable the directory for better SEO results"
            bodyText="Make the website public to allow non logged users to view website content"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone liked his post"
            body="Users can create pages or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone commented on his post"
            body="Users can create groups or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone shared his post"
            body="Users can create Agency or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone mentioned him"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone visited his profile"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone sent him or accepted his friend request"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone dropped a new review"
            body="Users can create Events or only admins/moderators"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Someone Tagged"
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
}
