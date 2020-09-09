import React from "react";
import BannerInfo from "../../components/bannerInfo/BannerInfo";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Settings",
  links: [
    {
      label: "Registration Settings",
      url: "/settings/registration-settings",
    },
  ],
};

const Registration = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
        <div className="mb-16">
          <BannerInfo
            svgClassName="fill-current h-6 w-6 text-white-500 mr-4"
            bannerBody="If registration is Free and pro package enabled they will be be used as an optional upgrading plans"
          />
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Registration Enabled"
            body="Allow users to create accounts"
          />
        </div>
        {/* <div className="side-nav__devider my-6 border-t-2"></div> */}
        <div className="m-8">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <p className="text-xl block font-semibold my-3">
              Registration Type
            </p>
            <div className="flex">
              <div className="mr-20">
                <InputField
                  type="radio"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">Free</label>
              </div>
              <div className="mr-1">
                <InputField
                  type="radio"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">Premium</label>
              </div>
            </div>
            <span className="text-gray-500">
              Allows users to create accounts Free or via Subscriptions only
            </span>
          </div>
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Premium Package Enabled"
            body="Enable pro packages to be used as upgrading plans or for subscriptions"
          />
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Verification Enabled"
            body="Enable account verification to send verification code to user’s email/phone"
          />
        </div>
        <div className="m-8">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3">
            <p className="text-xl block font-semibold my-3">Verification Via</p>
            <div className="flex">
              <div className="mr-16">
                <InputField
                  type="radio"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">Phone</label>
              </div>
              <div className="mr-16">
                <InputField
                  type="radio"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">Email</label>
              </div>
              <div className="mr-1">
                <InputField
                  type="radio"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">SMS</label>
              </div>
            </div>
            <span className="text-gray-500">
              Select Email or SMS activation to send activation code to user’s
              email/phone
            </span>
          </div>
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Age Restriction"
            body="Enable or Disable Age restricition"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 row-gap-5 m-8">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3">
            <span className="text-xl block font-semibold my-2">
              Minimum Age
            </span>
            <InputField type="text" className="input w-full border flex-1" />
          </div>
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Delete Account"
            body="Allow users to delete their account"
          />
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Download User Information"
            body="Allow users to download their account information from settings page"
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

export default Registration;
