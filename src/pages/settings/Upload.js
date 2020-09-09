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
      label: "Upload Settings",
      url: "/settings/upload-settings",
    },
  ],
};

export default function Upload() {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
        <div className="mt-8">
          <div>
            <span className="text-xl font-bold py-4">Upload Directory</span>
            <InputDropdown
              type="text"
              className="input w-full border flex-1 mb-4"
              dropdownElements=""
            />
            <span className="text-gray-500 my-4">
              The path of uploads local directory
            </span>
          </div>

          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-xl font-bold py-4">
                Max Profile Photo Size
              </span>
              <InputField
                type="text"
                className="input my-3 w-full border flex-1"
              />
              <span className="text-gray-500">
                The maximum size of profile photo in kilobytes (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-xl font-bold py-4">
                Max Banner Photo Size
              </span>
              <InputField
                type="text"
                className="input my-3 w-full border flex-1"
              />
              <span className="text-gray-500">
                The maximum size of banner photo in kilobytes (!M = 1024KB)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
        <div>
          <ButtonToggleInput
            title="Photo Upload"
            body="Enable photo upload to share & upload photos to the site"
          />
          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-xl font-bold py-4">
                Max Profile Photo Size
              </span>
              <InputField
                type="text"
                className="input w-full my-3 border flex-1"
              />
              <span className="text-gray-500">
                This is the maximum size of uploaded photo in posts in kilobytes
                (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-xl font-bold py-4">Photo Quality</span>
              <InputField
                type="text"
                className="input w-full border my-3 flex-1"
              />
              <span className="text-gray-500">
                The maximum size of banner photo in kilobytes (!M = 1024KB)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
        <div>
          <ButtonToggleInput
            title="Video Upload"
            body="Enable video upload to share & upload videos to the site"
          />
          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-xl font-bold py-4">Max Video Size</span>
              <InputField
                type="text"
                className="input my-3 w-full border flex-1"
              />
              <span className="text-gray-500">
                This is the maximum size of uploaded video in posts in kilobytes
                (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-xl font-bold py-4">Video Extensions</span>
              <InputField
                type="text"
                className="input w-full border flex-1 my-3"
              />
              <span className="text-gray-500">
                Allowed video extensions (separated with comma “’”)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
        <div>
          <ButtonToggleInput
            title="File Upload"
            body="Enablefile upload to share & upload file to the site"
          />

          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-xl font-bold py-4">Max File Size</span>
              <InputField
                type="text"
                className="input w-full border flex-1 my-3"
              />
              <span className="text-gray-500">
                This is the maximum size of uploaded video in posts in kilobytes
                (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-xl font-bold">Video Extensions</span>
              <InputField
                type="text"
                className="input w-full border flex-1 my-3"
              />
              <span className="text-gray-500">
                Allowed video extensions (separated with comma “’”)
              </span>
            </div>
          </div>
          {/* <div className="side-nav__devider my-6 border-t-2"></div> */}
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
