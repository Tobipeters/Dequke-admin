import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputDropdown from "../../components/inputDropdown/InputDropdown";
import Button from "../../components/button/Button";
import InputPrependGroup from "../../components/inputPrependGroup/InputPrependGroup";

const FollowSuggest = () => {
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">Follow Suggest</div>
      <hr className="mb-3" />
      <div className="mt-8">
        <ButtonToggleInput
          className="text-gray-600 w-9/12 text-sm"
          title="Follow Suggest"
          body="Enable the directory for better SEO results"
          bodyText="Make the website public to allow non logged users to view website content"
        />
        <div className="side-nav__devider border-t-2 my-8"></div>
        <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-6">
            <p className="text-lg my-2">Genre</p>
            <p className="text-gray-500">
              Banner and profile, followers, likes, page view, bio
            </p>
            <InputDropdown
              type="text"
              className="input w-full border flex-1"
              dropdownElements=""
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-6">
            <p className="text-lg my-2">Select User/Groups/Pages/Agency</p>
            <p className="text-gray-500 mb-4">
              Shows, Videos, Recommendation etc
            </p>
            <InputPrependGroup prependLabel="Olive Group" />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-6">
            <p className="text-lg my-2">Genre</p>
            <p className="text-gray-500">
              Banner and profile, followers, likes, page view, bio
            </p>
            <InputDropdown
              type="text"
              className="input w-full border flex-1"
              dropdownElements=""
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-6">
            <p className="text-lg my-2">Select User/Groups/Pages/Agency</p>
            <p className="text-gray-500 mb-4">
              Shows, Videos, Recommendation etc
            </p>
            <InputPrependGroup prependLabel="Olive Group" />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-6">
            <p className="text-lg my-2">Genre</p>
            <p className="text-gray-500">
              Banner and profile, followers, likes, page view, bio
            </p>
            <InputDropdown
              type="text"
              className="input w-full border flex-1"
              dropdownElements=""
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-6">
            <p className="text-lg my-2">Select User/Groups/Pages/Agency</p>
            <p className="text-gray-500 mb-4">
              Shows, Videos, Recommendation etc
            </p>
            <InputPrependGroup prependLabel="Olive Group" />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-6">
            <p className="text-lg my-2">Genre</p>
            <p className="text-gray-500">
              Banner and profile, followers, likes, page view, bio
            </p>
            <InputDropdown
              type="text"
              className="input w-full border flex-1"
              dropdownElements=""
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-6">
            <p className="text-lg my-2">Select User/Groups/Pages/Agency</p>
            <p className="text-gray-500 mb-4">
              Shows, Videos, Recommendation etc
            </p>
            <InputPrependGroup prependLabel="Olive Group" />
          </div>
        </div>
        <Button
          className="bg-red-700 my-8 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
};

export default FollowSuggest;
