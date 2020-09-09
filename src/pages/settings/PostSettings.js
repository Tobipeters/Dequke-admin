import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import InputDropdown from "../../components/inputDropdown/InputDropdown";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Settings",
  links: [
    {
      label: "Post Settings",
      url: "/settings/post-settings",
    },
  ],
};

const PostSettings = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box px-16 sm:py-10 my-5">
        <div className="my-8">
          <ButtonToggleInput
            title="Stories"
            body="Turn the stories On and Off"
            bodyText="Stories are photos and videos that only last 24 hours"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Popular Posts"
            body="Turn the stories On and Off"
            bodyText="Popular posts are public posts ordered by most reactions, comments & Shares"
          />
        </div>
        <div className="my-8">
          <ButtonToggleInput
            title="Discover Posts"
            body="Turn the stories On and Off"
            bodyText="Discover posts are public posts ordered from most recent to old"
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
        <div className="grid grid-cols-12 gap-4 row-gap-5 mt-16">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-xl font-bold">Max Post Characters</span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              The Maximum allowed post xharacters length (0 for unlimited)
            </span>
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-xl font-bold">Max Post Characters</span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              The Maximum allowed post xharacters length (0 for unlimited)
            </span>
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-xl font-bold">Max Post Characters</span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              The Maximum allowed post xharacters length (0 for unlimited)
            </span>
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-xl font-bold">Max Post Characters</span>
            <InputField type="text" className="input w-full border flex-1" />
            <span className="text-gray-500">
              The Maximum allowed post xharacters length (0 for unlimited)
            </span>
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-xl font-bold">Max Post Characters</span>
            <InputDropdown
              type="text"
              className="input w-full border flex-1"
              dropdownElements=""
            />
            <span className="text-gray-500">
              The Maximum allowed post xharacters length (0 for unlimited)
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
};

export default PostSettings;
