import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Settings",
  links: [
    {
      label: "Security Settings",
      url: "/settings/security-settings",
    },
  ],
};

export default function Security() {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
        <div className="my-8">
          <ButtonToggleInput
            title="Unusual Login Detection"
            body="Enable unusual login detection, System will not allow user to login with same session from"
            bodyText="different device or location"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Brute Force Detection"
            body="Enable brute force attack detection, System will block the user account if hacker try to login"
            bodyText="with invalid password too many times to guess the correct account password"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-xl font-bold">
              Invalid Login Attempt Limit
            </span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              Number of invalid login attempts before account get blocked
            </span>
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-xl font-bold">Lockout Time</span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              Number of minuted the account will still locked out
            </span>
          </div>
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Cencored Words Enabled"
            body="Enable or disable words to be censored"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-xl font-bold">Cencored Words</span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              Words to be censored, separeated by a comma (,)
            </span>
          </div>
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
