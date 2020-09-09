import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import profileImage from "../../assets/dist/images/preview-3.jpg";

import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import InputTextArea from "../../components/inputTextArea/InputTextArea";
import TextField from "../../components/TextField/TextField";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Ads",
  links: [
    {
      label: "User Ads",
      url: "/ads/user-ads/edit-user-ads",
    },
  ],
};

export default function EditUserAds({ userImage }) {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="flex justify-between">
        <Link
          to="/ads/user-ads"
          className="text-red-700 flex mb-4 hover:text-red-700"
        >
          <Icon.ChevronLeft className="text-red-700" />
          Go Back
        </Link>

        <div className="intro-y flex justify-center col-span-12 items-center pr-16">
          <Button
            className="bg-red-700  text-white font-bold py-2 mr-3 px-4 rounded"
            value="Pause Ads"
          />
          <Button
            className="flex items-center justify-center bg-red-100 text-red-700 font-bold py-2 px-4 rounded"
            value="Save Changes"
            buttonIcon={<Icon.Trash2 className="w-4 h-4 mr-2" />}
          />
        </div>
      </div>
      <div className="intro-y box py-3 px-10 sm:py-8 mt-5 mb-5">
        <div className="flex justify-between">
          <span className="text-red-700 flex mb-4 hover:text-red-700 capitalize">
            Ad details
          </span>

          <div className="intro-y flex justify-center col-span-12 items-center">
            <Button
              className="text-black font-bold py-2 mr-3 px-4"
              value="Status"
            />
            <Button
              className="flex items-center justify-center bg-gray-300 text-green-600 font-bold py-2 px-4 rounded"
              value="Active"
            />
          </div>
        </div>

        <div className="my-6">
          <div className="text-black my-3">By</div>
          <div className="flex flex-1 items-center justify-center lg:justify-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex flex-row lg:w-16 lg:h-16 image-fit relative">
              <img
                alt="DeQube User Image"
                className="rounded-full"
                src={userImage || profileImage}
              />
            </div>
            <div className="ml-5">
              <div className="text-blue-400">Sarah Doe</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-lg font-bold">Title</span>
              <InputField
                type="text"
                className="input w-full border flex-1 mt-2"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-lg font-bold">Ad Type</span>
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
              <span className="text-lg font-bold">Start Date</span>
              <InputField
                type="text"
                className="input w-full border flex-1 mt-2"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-lg font-bold">End Date</span>
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
              <span className="text-lg font-bold">Budget</span>
              <InputField
                type="text"
                className="input w-full border flex-1 mt-2"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-lg font-bold">Descriptiion</span>
              <InputTextArea
                type="text"
                className="input w-full border flex-1 h-32"
              />
            </div>
          </div>
        </div>
        <div className="side-nav__devider my-10 border-t-2"></div>
        <div>
          <p className="text-red-600">Target Audience</p>
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-lg font-bold">Audience Country</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4"></div>
            </div>
          </div>
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-lg font-bold">Audience Gender</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4"></div>
            </div>
          </div>
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-lg font-bold">Audience Relationship</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1 mt-2"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4"></div>
            </div>
          </div>
          <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <p className="font-semibold text-lg">Potential Reach</p>
                <span className="text-lg text-green-600">
                  4965 <span className="text-gray-500">people</span>{" "}
                </span>
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <p className="font-semibold text-lg">Potential Reach</p>
                <span className="text-lg text-green-600">
                  4965 <span className="text-gray-500">people</span>{" "}
                </span>
              </div>
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
}
