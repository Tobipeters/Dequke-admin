import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const AdminSettings = () => {
  const data = {
    start: "Settings",
    links: [
      {
        label: "Admin Settings",
        url: "/settings/admin-settings",
      },
    ],
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box px-16 sm:py-10 my-5">
        <div className="my-8">
          <ButtonToggleInput
            title="Ban Member"
            body="Admin ability to ban memebers in a page/group On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Send Consent Notification"
            body="Admin ability to send consent notifications to users On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Write Reviews & Recommendation"
            body="Admin ability to write reviews & recommendations about users On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Post Vacancies"
            body="Admin ability to post vacancies On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Post Events"
            body="Admin ability to post Events On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Approve Every Post"
            body="Admin ability to approve every post On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Promote Content"
            body="Admin ability to promote content On and Off"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Delete Page/Group"
            body="Admin ability to promote content On and Off"
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

export default AdminSettings;
