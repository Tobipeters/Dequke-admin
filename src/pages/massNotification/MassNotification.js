import React from "react";
import Button from "../../components/button/Button";
import BannerInfo from "../../components/bannerInfo/BannerInfo";
import InputField from "../../components/inputField/InputField";
import InputTextArea from "../../components/inputTextArea/InputTextArea";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

export default function MassNotification() {
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">
        Mass Notification
      </div>
      <hr className="mb-3" />
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mb-8">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Mark All As safe"
        />
      </div>
      <BannerInfo
        svgClassName="fill-current h-6 w-6 text-white-500 mr-4 my-4"
        bannerTitle="Mass Notofication"
        bannerBody="Enable you to send notifications to all site users."
      />

      <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
          <span className="text-2xl">Pattern</span>
          <InputField type="text" className="input w-full border flex-1" />
        </div>
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
          <span className="text-2xl">Class</span>
          <InputField type="text" className="input w-full border flex-1" />
        </div>
      </div>
      <div>
        <InputTextArea
          type="text"
          className="input w-full border flex-1 mt-5 h-32"
        />
      </div>
      <Button
        className="bg-red-700 my-8 text-white font-bold py-2 px-4 rounded"
        value="Run"
      />
    </div>
  );
}
