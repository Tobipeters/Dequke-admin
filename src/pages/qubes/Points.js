import React from "react";
import Card from "../../components/card/Card";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Qubes",
  links: [
    {
      label: "Point",
      url: "/qubes/points",
    },
  ],
};

const Points = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box py-3 px-10 sm:py-8 mt-5 mb-5">
        <div className="pl-4">
          <ButtonToggleInput
            title="Enable Ads"
            body="Enable the directory for better SEO results"
            bodyText="Make the website public to allow non logged users to view website content"
          />
        </div>

        <div className="side-nav__devider my-6 border-t-2"></div>
        <div className="">
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-lg font-bold">Points/NI</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>

              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-lg font-bold">Points/Post</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-lg font-bold">Points/Comment</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>

              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-lg font-bold">Points/Reaction</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav__devider my-6 border-t-2"></div>
        <div className="mb-12">
          <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-lg font-bold">
                Max earnable points by free users
              </span>
              <InputField
                type="text"
                className="input w-full border flex-1 mt-2"
              />
            </div>

            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-lg font-bold">
                Max earnable points by pro users
              </span>
              <InputField
                type="text"
                className="input w-full border flex-1 mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-start m-8 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
};

export default Points;
