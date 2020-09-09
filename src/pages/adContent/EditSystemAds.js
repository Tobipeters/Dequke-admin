import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import InputField from "../../components/inputField/InputField";
import InputTextArea from "../../components/inputTextArea/InputTextArea";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Ads",
  links: [
    {
      label: "Edit System Ads",
      url: "/ads/system-ads/edit-system-ads",
    },
  ],
};

export default function EditSystemAds() {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <Link
        to="/ads/system-ads"
        className="text-red-700 flex mb-4 hover:text-red-700"
      >
        <Icon.ChevronLeft className="text-red-700" />
        Go Back
      </Link>
      <div className="intro-y box py-3 px-10 sm:py-8 mt-2 mb-5">
        <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Title</span>
            <InputField type="text" className="input w-full border flex-1" />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-lg font-bold">Place</span>
            <InputField type="text" className="input w-full border flex-1" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 row-gap-5 mt-3">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">HTML</span>
            <InputTextArea className="input w-full border flex-1 h-32" />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <Link className="text-green-500 hover:text-green-500 hover:underline underline">
              Add more places
            </Link>
          </div>
        </div>
      </div>
      <Button
        className="bg-red-700 m-8 text-white font-bold py-2 px-4 rounded"
        value="Save Changes"
      />
    </div>
  );
}
